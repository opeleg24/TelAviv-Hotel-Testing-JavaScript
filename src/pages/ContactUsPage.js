export default class ContactUsPage {
  constructor(page) {
    this.page = page;
  }

  async waitAndClickTopLink() {
    await this.page.waitForXPath(
      "//div[@class='sq-menu sq-clearfix']/ul[1]/li[4]/a"
    );
    await this.page.$x("//div[@class='sq-menu sq-clearfix']/ul[1]/li[4]/a");
    const elements = await this.page.$x(
      "//div[@class='sq-menu sq-clearfix']/ul[1]/li[4]/a"
    );
    await elements[0].click();
  }

  async waitAndClickBottomLink() {
    await this.page.waitForXPath(
      "//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[4]/a[1]"
    );
    await this.page.$x(
      "//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[4]/a[1]"
    );
    const elements = await this.page.$x(
      "//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[4]/a[1]"
    );
    await elements[0].click();
  }

  async waitAndGetContactUsPageText() {
    await this.page.waitForSelector("div[class='sq-container'] h1");
    return this.page.$eval("div[class='sq-container'] h1", (e) => e.innerHTML);
  }

  async validateContactUsForm(full_name, email_address, subject, message) {
    await this.page.waitInputAndType("[name='your-name']", full_name);
    await this.page.waitInputAndType("[name='your-email']", email_address);
    await this.page.waitInputAndType("[name='your-subject']", subject);
    await this.page.waitInputAndType("[name='your-message']", message);
    await this.page.waitAndClick("[type='submit']");
  }

  async waitAndGetContactUsSuccessText() {
    await this.page.waitForSelector("[class*='wpcf7-mail-sent-ok']");
    return this.page.$eval("[class*='wpcf7-mail-sent-ok']", (e) => e.innerHTML);
  }

  async waitAndGetContactUsRequiredFieldText() {
    await this.page.waitForSelector("[class='wpcf7-not-valid-tip']");
    return this.page.$eval("[class='wpcf7-not-valid-tip']", (e) => e.innerHTML);
  }
}
