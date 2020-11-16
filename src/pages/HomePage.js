export default class HomePage {
  constructor(page) {
    this.page = page;
  }

  async waitAndGetTopBarAddressText() {
    await this.page.waitForSelector("div[class='sq-top-left-header']");
    return this.page.$eval(
      "div[class='sq-top-left-header']",
      (e) => e.innerHTML
    );
  }

  async waitAndGetHotelDescriptionText() {
    await this.page.waitForSelector(".textwidget>p");
    return this.page.$eval(".textwidget>p", (e) => e.innerHTML);
  }

  async waitAndGetBottomBarCredentialsFromSite() {
    await this.page.waitForSelector(".sq-contact-info");
    let bottomBarCredentials = await this.page.$$(".sq-contact-info>ul>li");
    return bottomBarCredentials;
  }

  async getListOfBottomBarCredentialsData() {
    const listOfBottomBarCredentials = [
      "0547333333",
      "example@.com",
      "https://www.youtube.com",
      "Tel Aviv 130 Street, Tel Aviv",
      "9:00-18:00",
    ];
    return listOfBottomBarCredentials;
  }

  async waitAndGetFAQsDescription() {
    await this.page.waitForSelector("div[class*='ufaq-faq-post']");
    let FAQsDescription = await this.page.$$("div[class*='ufaq-faq-post']");
    return FAQsDescription;
  }

  async getListFAQsDescriptionData() {
    const listOfFAQsDescriptionData = [
      "The booking conditions will be shown in the booking process under “details”. You will also find them on your booking confirmation.",
      "A detailed overview will be shown beneath the rate grid, if you click on a rate or category. The rate description will show every included service.",
      "Yes, of course you can enjoy a meal or drink in one of our restaurants or bars. You may also reserve a table with our table reservation form on each restaurant website.",
      "When booking through our website www.dorint.com, via our service center or directly in our hotel, we guarantee, that you will get the best available rate. In case you will find a cheaper price after your booking, you will receive the cheaper rate less 25% discount",
      "Generally hotel rooms are available from 3pm and apartments from 5pm.",
    ];
    return listOfFAQsDescriptionData;
  }

  async waitAndGetFAQsButton() {
    await this.page.waitForSelector("div[class*='faq-display-style-Default']");
    let faqsButton = await this.page.$$(
      "div[class*='faq-display-style-Default']"
    );
    return faqsButton;
  }

  async waitforSelectorAndGetFAQsButton() {
    await this.page.waitForSelector("div[class*='faq-display-style-Default']");
  }

  async waitforFAQsButtonDescription() {
    await this.page.waitForSelector("div[class*='ufaq-faq-post']");
  }

  async waitforAndGetTopNavSocialMediaLinks() {
    await this.page.waitForSelector(".sq-top-right-header>a");
    const ListTopNavSocialMediaLinks = await this.page.$$(
      ".sq-top-right-header>a"
    );
    let ListTopNavSocialMediaLinksArray = new Array();

    for (let link of ListTopNavSocialMediaLinks) {
      let ListTopNavSocialMediaLink = await this.page.evaluate(
        (el) => el.getAttribute("href"),
        link
      );
      ListTopNavSocialMediaLinksArray.push(ListTopNavSocialMediaLink);
    }

    return ListTopNavSocialMediaLinksArray;
  }
}
