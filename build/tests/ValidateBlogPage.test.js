"use strict";

var _chai = require("chai");

var _mochaSteps = require("mocha-steps");

var _builder = require("../builder");

var _builder2 = _interopRequireDefault(_builder);

var _BlogPage = require("../pages/BlogPage");

var _BlogPage2 = _interopRequireDefault(_BlogPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Validate Blog Page Page", function () {
  var page = void 0;
  var blogPage = void 0;

  before(async function () {
    page = await _builder2.default.build("Desktop");
    blogPage = await new _BlogPage2.default(page);
    await page.goto("https://mpeleg90.com/omri");
  });

  after(async function () {
    await page.close();
  });

  (0, _mochaSteps.step)("Should click center blog Page link", async function () {
    await blogPage.waitAndClickCenterLink();
  });
  (0, _mochaSteps.step)("Should click top blog Page link", async function () {
    await blogPage.waitAndClickTopLink();
  });
  (0, _mochaSteps.step)("Should click bottom blog Page link", async function () {
    await blogPage.waitAndClickBottomLink();
  });

  (0, _mochaSteps.step)("Should wait for blog Page page selector and validate text", async function () {
    var text = await blogPage.waitAndGetBlogPageText();
    (0, _chai.expect)(text).to.equal("Blog");
  });

  (0, _mochaSteps.step)("Should varify first article", async function () {
    await blogPage.waitAndClickFirstArticle();
    var text = await blogPage.waitAndGetBlogPageText();
    (0, _chai.expect)(text).to.equal("Road Trip : My Last Weekend Memories");
    await blogPage.validateArticleReplyForm("Insightful compelling article. Interesting read. I recommend reading it.", "Tom James", "opeleg90@gmail.com", "https://www.google.com");
    var Msg = await blogPage.waitAndGetSuccessMsg();
    (0, _chai.expect)(Msg).to.equal("Your comment is awaiting moderation.");

    await blogPage.validateBlogArticalesAndFailureOnPostingReply("Insightful compelling article. Interesting read. I recommend reading it.", "https://www.google.com");
    var FailMsg = await blogPage.waitAndGetErrorMsg();
    (0, _chai.expect)(FailMsg).to.equal("ERROR: please fill the required fields (name, email).");
    blogPage.waitAndClickBackBottomLink();
  });

  (0, _mochaSteps.step)("Should varify second article", async function () {
    await blogPage.waitAndClickSecondArticle();
    var text = await blogPage.waitAndGetBlogPageText();
    (0, _chai.expect)(text).to.equal("Memories from the Last Summer");
    await blogPage.validateArticleReplyForm("Insightful and compelling article. Definitely an interesting read. I recommend reading it.", "Tom James", "opeleg90@gmail.com", "https://www.google.com");
    var Msg = await blogPage.waitAndGetSuccessMsg();
    (0, _chai.expect)(Msg).to.equal("Your comment is awaiting moderation.");

    await blogPage.validateBlogArticalesAndFailureOnPostingReply("Insightful and compelling article. Definitely an interesting read. I recommend reading it.", "https://www.google.com");
    var FailMsg = await blogPage.waitAndGetErrorMsg();
    (0, _chai.expect)(FailMsg).to.equal("ERROR: please fill the required fields (name, email).");
    blogPage.waitAndClickBackBottomLink();
  });

  (0, _mochaSteps.step)("Should varify third article", async function () {
    await blogPage.waitAndClickThirdArticle();
    var text = await blogPage.waitAndGetBlogPageText();
    (0, _chai.expect)(text).to.equal("Flowers & Decorations");
    await blogPage.validateArticleReplyForm("Insightful and compelling article. Definitely an interesting read. I recommend reading it.", "Tom James", "opeleg90@gmail.com", "https://www.google.com");
    var Msg = await blogPage.waitAndGetSuccessMsg();
    (0, _chai.expect)(Msg).to.equal("Your comment is awaiting moderation.");

    await blogPage.validateBlogArticalesAndFailureOnPostingReply("Insightful and compelling article. Definitely an interesting read. I recommend reading it.", "https://www.google.com");
    var FailMsg = await blogPage.waitAndGetErrorMsg();
    (0, _chai.expect)(FailMsg).to.equal("ERROR: please fill the required fields (name, email).");
    blogPage.waitAndClickBackBottomLink();
  });
  (0, _mochaSteps.step)("Should varify forth article", async function () {
    await blogPage.waitAndClickForthArticle();
    var text = await blogPage.waitAndGetBlogPageText();
    (0, _chai.expect)(text).to.equal("Adventure & Optimism");
    await blogPage.validateArticleReplyForm("Insightful and compelling article. Definitely an interesting read. I recommend reading it.", "Tom James", "opeleg90@gmail.com", "https://www.google.com");
    var Msg = await blogPage.waitAndGetSuccessMsg();
    (0, _chai.expect)(Msg).to.equal("Your comment is awaiting moderation.");

    await blogPage.validateBlogArticalesAndFailureOnPostingReply("Insightful and compelling article. Definitely an interesting read. I recommend reading it.", "https://www.google.com");
    var FailMsg = await blogPage.waitAndGetErrorMsg();
    (0, _chai.expect)(FailMsg).to.equal("ERROR: please fill the required fields (name, email).");
    blogPage.waitAndClickBackBottomLink();
  });

  (0, _mochaSteps.step)("Should varify fifth article", async function () {
    await blogPage.waitAndClickFifthArticle();
    var text = await blogPage.waitAndGetBlogPageText();
    (0, _chai.expect)(text).to.equal("My Trip to New York");
    await blogPage.validateArticleReplyForm("Insightful and compelling article. Definitely an interesting read. I recommend reading it.", "Tom James", "opeleg90@gmail.com", "https://www.google.com");
    var Msg = await blogPage.waitAndGetSuccessMsg();
    (0, _chai.expect)(Msg).to.equal("Your comment is awaiting moderation.");

    await blogPage.validateBlogArticalesAndFailureOnPostingReply("Insightful and compelling article. Definitely an interesting read. I recommend reading it.", "https://www.google.com");
    var FailMsg = await blogPage.waitAndGetErrorMsg();
    (0, _chai.expect)(FailMsg).to.equal("ERROR: please fill the required fields (name, email).");
    blogPage.waitAndClickBackBottomLink();
  });
});