export default class AboutUsPage {
  constructor(page) {
    this.page = page;
  }

  async waitAndClickCenterLink() {
    await this.page.waitForSelector("div[class*='q-featured-post1'] a");
    await this.page.click("div[class*='q-featured-post1'] a");
  }

  async waitAndClickTopLink() {
    await this.page.waitForXPath(
      "//div[@class='sq-menu sq-clearfix']/ul[1]/li[1]/a"
    );
    await this.page.$x("//div[@class='sq-menu sq-clearfix']/ul[1]/li[1]/a");
    const elements = await this.page.$x(
      "//div[@class='sq-menu sq-clearfix']/ul[1]/li[1]/a"
    );
    await elements[0].click();
  }

  async waitAndClickBottomLink() {
    await this.page.waitForXPath(
      "//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[1]/a[1]"
    );
    await this.page.$x(
      "//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[1]/a[1]"
    );
    const elements = await this.page.$x(
      "//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[1]/a[1]"
    );
    await elements[0].click();
  }

  async waitAndGetAboutUsPageText() {
    await this.page.waitForSelector("div[class='sq-container'] h1");
    return this.page.$eval("div[class='sq-container'] h1", (e) => e.innerHTML);
  }
}
