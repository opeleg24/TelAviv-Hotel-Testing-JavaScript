import { expect } from "chai";
import { step } from "mocha-steps";
import Page from "../builder";
import BlogPage from "../pages/BlogPage";

describe("Validate Blog Page Page", () => {
  let page;
  let blogPage;

  before(async () => {
    page = await Page.build("Desktop");
    blogPage = await new BlogPage(page);
    await page.goto("https://mpeleg90.com/omri");
  });

  after(async () => {
    await page.close();
  });

  step("Should click center blog Page link", async () => {
    await blogPage.waitAndClickCenterLink();
  });
  step("Should click top blog Page link", async () => {
    await blogPage.waitAndClickTopLink();
  });
  step("Should click bottom blog Page link", async () => {
    await blogPage.waitAndClickBottomLink();
  });

  step(
    "Should wait for blog Page page selector and validate text",
    async () => {
      const text = await blogPage.waitAndGetBlogPageText();
      expect(text).to.equal("Blog");
    }
  );

  step("Should varify first article", async () => {
    await blogPage.waitAndClickFirstArticle();
    const text = await blogPage.waitAndGetBlogPageText();
    expect(text).to.equal("Road Trip : My Last Weekend Memories");
    await blogPage.validateArticleReplyForm(
      "Insightful compelling article. Interesting read. I recommend reading it.",
      "Tom James",
      "opeleg90@gmail.com",
      "https://www.google.com"
    );
    const Msg = await blogPage.waitAndGetSuccessMsg();
    expect(Msg).to.equal("Your comment is awaiting moderation.");

    await blogPage.validateBlogArticalesAndFailureOnPostingReply(
      "Insightful compelling article. Interesting read. I recommend reading it.",
      "https://www.google.com"
    );
    const FailMsg = await blogPage.waitAndGetErrorMsg();
    expect(FailMsg).to.equal(
      "ERROR: please fill the required fields (name, email)."
    );
    blogPage.waitAndClickBackBottomLink();
  });

  step("Should varify second article", async () => {
    await blogPage.waitAndClickSecondArticle();
    const text = await blogPage.waitAndGetBlogPageText();
    expect(text).to.equal("Memories from the Last Summer");
    await blogPage.validateArticleReplyForm(
      "Insightful and compelling article. Definitely an interesting read. I recommend reading it.",
      "Tom James",
      "opeleg90@gmail.com",
      "https://www.google.com"
    );
    const Msg = await blogPage.waitAndGetSuccessMsg();
    expect(Msg).to.equal("Your comment is awaiting moderation.");

    await blogPage.validateBlogArticalesAndFailureOnPostingReply(
      "Insightful and compelling article. Definitely an interesting read. I recommend reading it.",
      "https://www.google.com"
    );
    const FailMsg = await blogPage.waitAndGetErrorMsg();
    expect(FailMsg).to.equal(
      "ERROR: please fill the required fields (name, email)."
    );
    blogPage.waitAndClickBackBottomLink();
  });

  step("Should varify third article", async () => {
    await blogPage.waitAndClickThirdArticle();
    const text = await blogPage.waitAndGetBlogPageText();
    expect(text).to.equal("Flowers & Decorations");
    await blogPage.validateArticleReplyForm(
      "Insightful and compelling article. Definitely an interesting read. I recommend reading it.",
      "Tom James",
      "opeleg90@gmail.com",
      "https://www.google.com"
    );
    const Msg = await blogPage.waitAndGetSuccessMsg();
    expect(Msg).to.equal("Your comment is awaiting moderation.");

    await blogPage.validateBlogArticalesAndFailureOnPostingReply(
      "Insightful and compelling article. Definitely an interesting read. I recommend reading it.",
      "https://www.google.com"
    );
    const FailMsg = await blogPage.waitAndGetErrorMsg();
    expect(FailMsg).to.equal(
      "ERROR: please fill the required fields (name, email)."
    );
    blogPage.waitAndClickBackBottomLink();
  });
  step("Should varify forth article", async () => {
    await blogPage.waitAndClickForthArticle();
    const text = await blogPage.waitAndGetBlogPageText();
    expect(text).to.equal("Adventure & Optimism");
    await blogPage.validateArticleReplyForm(
      "Insightful and compelling article. Definitely an interesting read. I recommend reading it.",
      "Tom James",
      "opeleg90@gmail.com",
      "https://www.google.com"
    );
    const Msg = await blogPage.waitAndGetSuccessMsg();
    expect(Msg).to.equal("Your comment is awaiting moderation.");

    await blogPage.validateBlogArticalesAndFailureOnPostingReply(
      "Insightful and compelling article. Definitely an interesting read. I recommend reading it.",
      "https://www.google.com"
    );
    const FailMsg = await blogPage.waitAndGetErrorMsg();
    expect(FailMsg).to.equal(
      "ERROR: please fill the required fields (name, email)."
    );
    blogPage.waitAndClickBackBottomLink();
  });

  step("Should varify fifth article", async () => {
    await blogPage.waitAndClickFifthArticle();
    const text = await blogPage.waitAndGetBlogPageText();
    expect(text).to.equal("My Trip to New York");
    await blogPage.validateArticleReplyForm(
      "Insightful and compelling article. Definitely an interesting read. I recommend reading it.",
      "Tom James",
      "opeleg90@gmail.com",
      "https://www.google.com"
    );
    const Msg = await blogPage.waitAndGetSuccessMsg();
    expect(Msg).to.equal("Your comment is awaiting moderation.");

    await blogPage.validateBlogArticalesAndFailureOnPostingReply(
      "Insightful and compelling article. Definitely an interesting read. I recommend reading it.",
      "https://www.google.com"
    );
    const FailMsg = await blogPage.waitAndGetErrorMsg();
    expect(FailMsg).to.equal(
      "ERROR: please fill the required fields (name, email)."
    );
    blogPage.waitAndClickBackBottomLink();
  });
});
