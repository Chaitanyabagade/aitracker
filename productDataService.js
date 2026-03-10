const axios = require("axios");
const puppeteer = require("puppeteer");
let browser;
let page;
const SCRAPE_DELAY = 100;
const delay = ms => new Promise(res => setTimeout(res, ms));

const instruction = `
Return ONLY valid JSON for product price and availability.
Rules:
- Use Google Search to extract the information.
- Returns only json.
Format:
[
  {
    "id": 123,
    "p_name": "Product Name",
    "p_c_price": 232xx,
    "availability": "In stock"
  }
]
`;

// ----------------------------
// Start new Gemini chat
// ----------------------------
let login = false;
async function startNewChat() {
    if (!login) {
        try {
            await page.evaluate(() => {
                const btn = document.querySelector('a[data-test-id="expanded-button"]');
                if (btn) btn.click();
            });
        } catch (err) {
            console.log("⚠️ New chat button not found");
        }
        await delay(1000);
        try {
            await page.waitForSelector('button[data-test-id="confirm-button"]');
            await page.evaluate(() => {
                const btn = document.querySelector('button[data-test-id="confirm-button"]');
                if (btn) btn.click();
            });
        } catch (err) {
            console.log("⚠️ Confirm button not found");
        }
    }
    else {
        try {
            await page.evaluate(() => {
                const btn = document.querySelector('button[data-test-id="temp-chat-button"]');
                if (btn) btn.click();
                isFirstTime = false;
            });
        } catch (err) {
            console.log("⚠️ Temp. Chat button not found");
        }
    }
    await delay(1000);
    console.log("✅ New Temp. chat started");


}
async function ensureSidebarOpen() {
    const isOpen = await page.evaluate(() => {
        const app = document.querySelector("chat-app");
        return app && app.classList.contains("side-nav-open");
    });

    if (!isOpen) {
        const menuButton = await page.$('button');
        if (menuButton) {
            await menuButton.click();
            await delay(500);
        }
    }
}

// ----------------------------
// Wait for Gemini response
// ----------------------------
async function waitForFinalResponse() {

    let lastText = "";
    let stableCount = 0;

    while (true) {

        await delay(800);

        const text = await page.evaluate(() => {

            const msgs = document.querySelectorAll("message-content");

            if (!msgs.length) return "";

            const last = msgs[msgs.length - 1];

            const markdown = last.querySelector(".markdown");

            return markdown ? markdown.innerText.trim() : "";

        });

        if (!text) continue;

        if (text === lastText) {
            stableCount++;
        } else {
            stableCount = 0;
            lastText = text;
        }

        if (stableCount >= 5) {
            if (login) {
                await page.evaluate(() => {
                    const btn = document.querySelector('button[data-test-id="temp-chat-button"]');
                    if (btn) btn.click();
                    isFirstTime = false;
                });
            }
            return text;
        }

    }
}


// ----------------------------
// Send prompt to Gemini
// ----------------------------
async function getInformation(productArray) {
    await startNewChat()
    await delay(100);
    try {

        console.log("📤 Sending products to Gemini");

        const prompt = instruction + "\n\nProducts:\n" + JSON.stringify(productArray);

        const editorSelector = ".ql-editor";

        await page.waitForSelector(editorSelector);

        await page.focus(editorSelector);

        await page.evaluate((text) => {

            const editor = document.querySelector(".ql-editor");

            if (editor) {
                editor.textContent = text;
                editor.dispatchEvent(new Event("input", { bubbles: true }));
            }

        }, prompt);

        await delay(1000);

        await page.keyboard.press("Enter");

        console.log("⏳ Waiting Gemini response...");

        const reply = await waitForFinalResponse();

        // Extract JSON
        const start = reply.indexOf("[");
        const end = reply.lastIndexOf("]");

        if (start === -1 || end === -1) {
            throw new Error("JSON not found in Gemini response");
        }

        const cleanJson = reply.slice(start, end + 1);

        let data;

        try {
            data = JSON.parse(cleanJson);
        } catch (err) {
            console.log("❌ JSON parse failed:");
            console.log(cleanJson);
            throw err;
        }

        return data;

    } catch (err) {

        console.error("❌ ERROR:", err);

        return null;

    }

}


// ===================== MAIN =====================

(async () => {

    console.log("🚀 Launching browser...");

    const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

    browser = await puppeteer.launch({
        headless: false,
        executablePath: CHROME_PATH,
        userDataDir: "./chrome-profile-gemini2",
        defaultViewport: null,
        args: [
            "--start-maximized",
            "--window-size=1920,1080",
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--disable-blink-features=AutomationControlled"
        ]
    });

    page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', req => {
        const type = req.resourceType();
        if (['image', 'media', 'font', 'stylesheet', 'other', 'ping', 'analytics', 'tracking'].includes(type)) {
            req.abort();
        } else {
            req.continue();
        }
    });
    page.on("pageerror", err => console.log("❌ PAGE ERROR:", err));

    console.log("🌐 Opening Gemini...");

    await page.goto("https://gemini.google.com/app", {
        waitUntil: "networkidle2"
    });

    console.log("✅ Gemini UI ready");
    await ensureSidebarOpen();


    while (true) {

        const products = await getNextProducts();
        if (!products || products.length === 0) {
            console.log('⚠️ No product received, retrying...');
            await delay(1000);
            continue;
        }
        function withTimeout(promise, ms) {
            return Promise.race([
                promise,
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error("Timeout")), ms)
                )
            ]);
        }
        let results=[];
        try {
            results = await withTimeout(getInformation(products), 50000); // 50 sec
            console.log(results);
        } catch (err) {
            console.log("Skipped: request took too long");
            continue;
        }
        await delay(1000);
        console.log("✅ Final Parsed Result:");
        console.log(results);
        if (results) {
            console.log("************************ setting the product image urls *************************");
            try {
                const response = await axios.post(
                    "https://darkslategray-lion-860323.hostingersite.com/productTraker/server/udateProdcutData.php",
                    results,
                    {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        timeout: 15000
                    }
                );
                console.log(response.data);

            } catch (error) {
                console.error(
                    "❌ Failed to update database:",
                    error.response?.data || error.message
                );
            }
        }
        await delay(SCRAPE_DELAY);
    }

})();
const PRODUCT_API = 'https://darkslategray-lion-860323.hostingersite.com/productTraker/server/getProductsDataForData.php';
async function getNextProducts() {
    try {
        const res = await fetch(PRODUCT_API, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            timeout: 15000
        });
        const json = await res.json();
        if (!json.status || !json.data) return null;
        return json.data;
    } catch (err) {
        console.error('❌ API error:', err.message);
        return null;
    }
}