import puppeteer from "puppeteer";

export default class Launcher {
  static async build(viewport) {
    const launchOptions = {
      headless: true,
      slowMo: 20,
      args: [
        "--no-sandbox",
        "--disable-setui-sandbox",
        "--disable-web-security",
      ],
    };
    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();
    const extendedPage = new Launcher(page);
    page.setDefaultTimeout(10000);

    switch (viewport) {
      case "Mobile":
        const mobileViewport = puppeteer.devices["iPhone X"];
        await page.emulate(mobileViewport);
        break;
      case "Tablet":
        const tabletViewport = puppeteer.devices["iPad landscape"];
        await page.emulate(tabletViewport);
        break;
      case "Desktop":
        await page.setViewport({ width: 1024, height: 768 });
        break;
      default:
        throw new Error("Devices are only MOBILE | TABLET | DESKTOP");
    }

    return new Proxy(extendedPage, {
      get: function (_target, property) {
        return extendedPage[property] || browser[property] || page[property];
      },
    });
  }

  constructor(page) {
    this.page = page;
  }

  async waitInputAndType(selector, text) {
    await this.page.waitForSelector(selector);
    await this.page.type(selector, text);
  }
  async waitClearInputAndType(selector, text) {
    await this.page.waitForSelector(selector, { timeout: 150000 });
    await this.page.type(selector, "");
    await this.page.type(selector, text);
  }

  async waitAndClick(selector) {
    await this.page.waitForSelector(selector);
    await this.page.click(selector);
  }

  async waitAndClickCheckBox(selector) {
    await this.page.waitForSelector(selector);
    await this.page.click(selector, { clickCount: 1 });
  }

  async isElementVisible(selector) {
    let visible = true;
    await this.page
      .waitForSelector(selector, { visible: true, timeout: 3000 })
      .catch(() => {
        visible = false;
      });
    return visible;
  }

  async generateScreenshot() {
    await this.page.screenshot({
      path: "./src/tests/exampleFormPage.png",
      fullpage: true,
    });
  }
}
