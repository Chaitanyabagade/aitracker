// ===================== USER AGENTS =====================
const userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; rv:119.0) Gecko/20100101 Firefox/119.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:119.0) Gecko/20100101 Firefox/119.0",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64; rv:119.0) Gecko/20100101 Firefox/119.0",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:118.0) Gecko/20100101 Firefox/118.0",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 13; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.90 Mobile Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:119.0) Gecko/20100101 Firefox/119.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15",
    "Mozilla/5.0 (iPad; CPU OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.7 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 11; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.90 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 10; SM-A515F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.5938.132 Mobile Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:119.0) Gecko/20100101 Firefox/119.0",
    "Mozilla/5.0 (Windows NT 10.0; ARM64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15",
    "Mozilla/5.0 (Linux; Android 9; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 8.1.0; Nexus 5X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.90 Mobile Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; Win64; rv:118.0) Gecko/20100101 Firefox/118.0",
    "Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:119.0) Gecko/20100101 Firefox/119.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Safari/605.1.15",
    "Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 12; ONEPLUS A6010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.90 Mobile Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:117.0) Gecko/20100101 Firefox/117.0",
    "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 7.1.1; Moto G5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 6P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.90 Mobile Safari/537.36",
    "Mozilla/5.0 (Windows NT 5.1; Win64; rv:119.0) Gecko/20100101 Firefox/119.0",
    "Mozilla/5.0 (X11; CrOS x86_64 15604.56.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.199 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1 Safari/605.1.15",
    "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.90 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; Nexus 4) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; Trident/7.0; rv:11.0) like Gecko",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9",
    "Mozilla/5.0 (Linux; Android 9; Pixel 3a XL Build/PD2A.190115.029) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 8.0; Pixel XL Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.90 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 7.0; Nexus 6P Build/NBD91K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.5938.132 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5 Build/MMB29V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.5938.132 Mobile Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.11 (KHTML, like Gecko) Ubuntu/11.10 Chromium/17.0.963.65 Chrome/17.0.963.65 Safari/535.11"
];

const { default: axios } = require('axios');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

const SCRAPE_DELAY = 100;
const PAGE_TIMEOUT = 60000;

// ===================== HELPERS =====================
const delay = ms => new Promise(r => setTimeout(r, ms));

function getRandomHeaders() {
    const ua = userAgents[Math.floor(Math.random() * userAgents.length)];
    return {
        'User-Agent': ua,
        'Accept-Language': 'en-US,en;q=0.9',
        'DNT': '1'
    };
}


// ===================== SCRAPER =====================
async function scrapeUrl(browser, item) {
    const context = await browser.createBrowserContext();
    const page = await context.newPage();
    const headers = getRandomHeaders();

    await page.setExtraHTTPHeaders(headers);
    await page.setUserAgent(headers['User-Agent']);
    await page.setViewport({ width: 1280, height: 800 });

    await page.setRequestInterception(true);
    page.on('request', req => {
        const type = req.resourceType();
        if (['image', 'media', 'font', 'stylesheet', 'other', 'ping', 'analytics', 'tracking'].includes(type)) {
            req.abort();
        } else {
            req.continue();
        }
    });

    const domain = new URL(item.p_url.trim().replace(/\s+/g, '')).hostname;
    let imageUrl = "";
    try {
        await page.goto(item.p_url.trim().replace(/\s+/g, ''), {
            waitUntil: 'domcontentloaded',
            timeout: PAGE_TIMEOUT
        });

        if (domain.includes('robu.in')) {
            imageUrl = await page
                .$eval('figure[data-thumb]', el => el.getAttribute('data-thumb'))
                .catch(() => null);
        }
        else if (domain.includes('hitechxyz.in')) {
            await page.waitForSelector('.product__media img', { timeout: 15000 });
            imageUrl = await page.$eval('.product__media img', img => {
                let src =
                    img.getAttribute('data-src') ||
                    img.getAttribute('data-lazy') ||
                    img.getAttribute('src');
                if (!src) return null;
                if (src.startsWith('//')) return 'https:' + src;
                if (src.startsWith('/')) return location.origin + src;
                return src;
            });
        }
        else if (domain.includes('drkstore.in')) {
            await page.waitForSelector('figure[data-thumb]', { timeout: 15000 });
            imageUrl = await page.$eval(
                'figure[data-thumb]',
                el => el.getAttribute('data-thumb')
            );
        }
        else if (domain.includes('quadkart.in')) {

            await page.waitForSelector(
                '.woocommerce-product-gallery__image.is-selected',
                { timeout: 30000 }
            );

            imageUrl = await page.$eval(
                '.woocommerce-product-gallery__image.is-selected',
                el =>
                    el.getAttribute('data-zoom-image') ||
                    el.getAttribute('data-thumb') ||
                    el.getAttribute('data-src') ||
                    el.getAttribute('src')
            );

            if (imageUrl && imageUrl.startsWith('//')) {
                imageUrl = 'https:' + imageUrl;
            }
        }
        else if (domain.includes('robocraze.com')) {
            await page.waitForSelector('.media img', { timeout: 15000 });
            imageUrl = await page.$eval(
                '.media img',
                el => el.dataset.src || el.src
            );
            imageUrl = imageUrl.startsWith('//') ? 'https:' + imageUrl : imageUrl;
        }
        else if (domain.includes('flyrobo.in')) {
            await delay(3000);
            imageUrl = await page.$eval(
                '.swiper-slide img',
                el => el.getAttribute('data-image') || el.getAttribute('src')
            );
            imageUrl = "https://www.flyrobo.in/" + imageUrl;
        }



    } catch (err) {
        console.error(`❌ ${domain}: ${err.message}`);
    }

    await page.close();
    await context.close();
    return {
        id: item.id,
        imageUrl: imageUrl
    };
}

// ===================== MAIN LOOP =====================
(async () => {
    console.log('🚀 Browser started');

    const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

    browser = await puppeteer.launch({
        headless: false,
        executablePath: CHROME_PATH,
        userDataDir: "./chrome-profile-imageUrl",
        defaultViewport: null,
        args: [
            "--start-maximized",
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--disable-blink-features=AutomationControlled"
        ]
    });

    while (true) {
        const products = await getNextProducts();
        console.log(products);
        if (!products || products.length === 0) {
            console.log('⚠️ No product received, retrying...');
            await delay(5000);
            continue;
        }
        let results = [];
        for (const product of products) {
            let result = null;
            for (let attempt = 1; attempt <= 2; attempt++) {
                try {
                    console.log(`🔎 Getting Imgage Url Of ${product.p_url} (Attempt ${attempt})`);
                    result = await scrapeUrl(browser, product);
                    // check imageUrl
                    if (result && result.imageUrl) {
                        console.log(`✅ Image found`);
                        break;
                    }
                    console.log(`⚠️ imageUrl empty`);
                    result.imageUrl="https://darkslategray-lion-860323.hostingersite.com/productTraker/server/imagenotfound.png"
                } catch (err) {
                    console.error(`❌ Error on attempt ${attempt}:`, err.message);
                }
                // retry delay
                if (attempt === 1) {
                    console.log(`🔁 Retrying scrape...`);
                    await delay(1000);
                }
            }
            results.push(result);
        }
        console.log("✅ All Results:");
        console.log(results);

        if (results) {
            console.log("************************ setting the product image urls *************************");
            try {
                const response = await axios.post(
                    "https://darkslategray-lion-860323.hostingersite.com/productTraker/server/setImageUrl.php",
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

const PRODUCT_API = 'https://darkslategray-lion-860323.hostingersite.com/productTraker/server/getProductsData.php';
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