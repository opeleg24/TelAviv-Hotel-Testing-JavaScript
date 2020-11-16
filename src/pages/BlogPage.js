export default class BlogPage {
  constructor(page) {
    this.page = page;
  }

  async waitAndClickCenterLink() {
    await this.page.waitForSelector("div[class*='q-featured-post3'] a");
    await this.page.click("div[class*='q-featured-post3'] a");
  }

  async waitAndClickTopLink() {
    await this.page.waitForXPath(
      "//div[@class='sq-menu sq-clearfix']/ul[1]/li[3]/a"
    );
    await this.page.$x("//div[@class='sq-menu sq-clearfix']/ul[1]/li[3]/a");
    const elements = await this.page.$x(
      "//div[@class='sq-menu sq-clearfix']/ul[1]/li[3]/a"
    );
    await elements[0].click();
  }

  async waitAndClickBottomLink() {
    await this.page.waitForXPath(
      "//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[3]/a[1]"
    );
    await this.page.$x(
      "//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[3]/a[1]"
    );
    const elements = await this.page.$x(
      "//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[3]/a[1]"
    );
    await elements[0].click();
  }

  async waitAndGetBlogPageText() {
    await this.page.waitForSelector("div[class='sq-container'] h1");
    return this.page.$eval("div[class='sq-container'] h1", (e) => e.innerHTML);
  }

  async waitAndClickFirstArticle() {
    await this.page.waitForSelector(
      "#recent-posts-4 > ul > li:nth-child(1) > a"
    );
    await this.page.click("#recent-posts-4 > ul > li:nth-child(1) > a");
  }
  async waitAndClickSecondArticle() {
    await this.page.waitForSelector(
      "#recent-posts-4 > ul > li:nth-child(2) > a"
    );
    await this.page.click("#recent-posts-4 > ul > li:nth-child(2) > a");
  }
  async waitAndClickThirdArticle() {
    await this.page.waitForSelector(
      "#recent-posts-4 > ul > li:nth-child(3) > a"
    );
    await this.page.click("#recent-posts-4 > ul > li:nth-child(3) > a");
  }
  async waitAndClickForthArticle() {
    await this.page.waitForSelector(
      "#recent-posts-4 > ul > li:nth-child(4) > a"
    );
    await this.page.click("#recent-posts-4 > ul > li:nth-child(4) > a");
  }
  async waitAndClickFifthArticle() {
    await this.page.waitForSelector(
      "#recent-posts-4 > ul > li:nth-child(5) > a"
    );
    await this.page.click("#recent-posts-4 > ul > li:nth-child(5) > a");
  }

  async validateArticleReplyForm(
    commentReply,
    nameReply,
    emailReply,
    urlReply
  ) {
    await this.page.waitInputAndType("#comment", commentReply);
    await this.page.waitInputAndType("#author", nameReply);
    await this.page.waitInputAndType("#email", emailReply);
    await this.page.waitInputAndType("#url", urlReply);
    await this.page.waitFor(8000);
    await this.page.waitAndClick("#submit");
  }

  async waitAndGetSuccessMsg() {
    await this.page.waitForSelector(".comment-awaiting-moderation", {
      timeout: 150000,
    });
    return this.page.$eval(".comment-awaiting-moderation", (e) => e.innerHTML);
  }

  async validateBlogArticalesAndFailureOnPostingReply(commentReply, urlReply) {
    await this.page.waitInputAndType("#comment", commentReply);
    await this.page.waitInputAndType("#url", urlReply);

    await this.page.waitFor(8000);
    await this.page.waitAndClick("#submit");
  }
  async waitAndGetErrorMsg() {
    await this.page.waitForXPath("//body[@id='error-page']/p[2]");
    const [getXpath] = await this.page.$x("//body[@id='error-page']/p[2]");
    const getMsg = await this.page.evaluate((name) => name.innerText, getXpath);
    return getMsg;
  }

  async waitAndClickBackBottomLink() {
    await this.page.waitForXPath("//body[@id='error-page']/p[4]/a");
    await this.page.$x("//body[@id='error-page']/p[4]/a");
    const elements = await this.page.$x("//body[@id='error-page']/p[4]/a");
    await elements[0].click();
  }
}
