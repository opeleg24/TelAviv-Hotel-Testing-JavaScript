"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BlogPage = function () {
  function BlogPage(page) {
    _classCallCheck(this, BlogPage);

    this.page = page;
  }

  _createClass(BlogPage, [{
    key: "waitAndClickCenterLink",
    value: async function waitAndClickCenterLink() {
      await this.page.waitForSelector("div[class*='q-featured-post3'] a");
      await this.page.click("div[class*='q-featured-post3'] a");
    }
  }, {
    key: "waitAndClickTopLink",
    value: async function waitAndClickTopLink() {
      await this.page.waitForXPath("//div[@class='sq-menu sq-clearfix']/ul[1]/li[3]/a");
      await this.page.$x("//div[@class='sq-menu sq-clearfix']/ul[1]/li[3]/a");
      var elements = await this.page.$x("//div[@class='sq-menu sq-clearfix']/ul[1]/li[3]/a");
      await elements[0].click();
    }
  }, {
    key: "waitAndClickBottomLink",
    value: async function waitAndClickBottomLink() {
      await this.page.waitForXPath("//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[3]/a[1]");
      await this.page.$x("//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[3]/a[1]");
      var elements = await this.page.$x("//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[3]/a[1]");
      await elements[0].click();
    }
  }, {
    key: "waitAndGetBlogPageText",
    value: async function waitAndGetBlogPageText() {
      await this.page.waitForSelector("div[class='sq-container'] h1");
      return this.page.$eval("div[class='sq-container'] h1", function (e) {
        return e.innerHTML;
      });
    }
  }, {
    key: "waitAndClickFirstArticle",
    value: async function waitAndClickFirstArticle() {
      await this.page.waitForSelector("#recent-posts-4 > ul > li:nth-child(1) > a");
      await this.page.click("#recent-posts-4 > ul > li:nth-child(1) > a");
    }
  }, {
    key: "waitAndClickSecondArticle",
    value: async function waitAndClickSecondArticle() {
      await this.page.waitForSelector("#recent-posts-4 > ul > li:nth-child(2) > a");
      await this.page.click("#recent-posts-4 > ul > li:nth-child(2) > a");
    }
  }, {
    key: "waitAndClickThirdArticle",
    value: async function waitAndClickThirdArticle() {
      await this.page.waitForSelector("#recent-posts-4 > ul > li:nth-child(3) > a");
      await this.page.click("#recent-posts-4 > ul > li:nth-child(3) > a");
    }
  }, {
    key: "waitAndClickForthArticle",
    value: async function waitAndClickForthArticle() {
      await this.page.waitForSelector("#recent-posts-4 > ul > li:nth-child(4) > a");
      await this.page.click("#recent-posts-4 > ul > li:nth-child(4) > a");
    }
  }, {
    key: "waitAndClickFifthArticle",
    value: async function waitAndClickFifthArticle() {
      await this.page.waitForSelector("#recent-posts-4 > ul > li:nth-child(5) > a");
      await this.page.click("#recent-posts-4 > ul > li:nth-child(5) > a");
    }
  }, {
    key: "validateArticleReplyForm",
    value: async function validateArticleReplyForm(commentReply, nameReply, emailReply, urlReply) {
      await this.page.waitInputAndType("#comment", commentReply);
      await this.page.waitInputAndType("#author", nameReply);
      await this.page.waitInputAndType("#email", emailReply);
      await this.page.waitInputAndType("#url", urlReply);
      await this.page.waitFor(8000);
      await this.page.waitAndClick("#submit");
    }
  }, {
    key: "waitAndGetSuccessMsg",
    value: async function waitAndGetSuccessMsg() {
      await this.page.waitForSelector(".comment-awaiting-moderation", {
        timeout: 150000
      });
      return this.page.$eval(".comment-awaiting-moderation", function (e) {
        return e.innerHTML;
      });
    }
  }, {
    key: "validateBlogArticalesAndFailureOnPostingReply",
    value: async function validateBlogArticalesAndFailureOnPostingReply(commentReply, urlReply) {
      await this.page.waitInputAndType("#comment", commentReply);
      await this.page.waitInputAndType("#url", urlReply);

      await this.page.waitFor(8000);
      await this.page.waitAndClick("#submit");
    }
  }, {
    key: "waitAndGetErrorMsg",
    value: async function waitAndGetErrorMsg() {
      await this.page.waitForXPath("//body[@id='error-page']/p[2]");

      var _ref = await this.page.$x("//body[@id='error-page']/p[2]"),
          _ref2 = _slicedToArray(_ref, 1),
          getXpath = _ref2[0];

      var getMsg = await this.page.evaluate(function (name) {
        return name.innerText;
      }, getXpath);
      return getMsg;
    }
  }, {
    key: "waitAndClickBackBottomLink",
    value: async function waitAndClickBackBottomLink() {
      await this.page.waitForXPath("//body[@id='error-page']/p[4]/a");
      await this.page.$x("//body[@id='error-page']/p[4]/a");
      var elements = await this.page.$x("//body[@id='error-page']/p[4]/a");
      await elements[0].click();
    }
  }]);

  return BlogPage;
}();

exports.default = BlogPage;