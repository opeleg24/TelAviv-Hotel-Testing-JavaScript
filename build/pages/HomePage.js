"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomePage = function () {
  function HomePage(page) {
    _classCallCheck(this, HomePage);

    this.page = page;
  }

  _createClass(HomePage, [{
    key: "waitAndGetTopBarAddressText",
    value: async function waitAndGetTopBarAddressText() {
      await this.page.waitForSelector("div[class='sq-top-left-header']");
      return this.page.$eval("div[class='sq-top-left-header']", function (e) {
        return e.innerHTML;
      });
    }
  }, {
    key: "waitAndGetHotelDescriptionText",
    value: async function waitAndGetHotelDescriptionText() {
      await this.page.waitForSelector(".textwidget>p");
      return this.page.$eval(".textwidget>p", function (e) {
        return e.innerHTML;
      });
    }
  }, {
    key: "waitAndGetBottomBarCredentialsFromSite",
    value: async function waitAndGetBottomBarCredentialsFromSite() {
      await this.page.waitForSelector(".sq-contact-info");
      var bottomBarCredentials = await this.page.$$(".sq-contact-info>ul>li");
      return bottomBarCredentials;
    }
  }, {
    key: "getListOfBottomBarCredentialsData",
    value: async function getListOfBottomBarCredentialsData() {
      var listOfBottomBarCredentials = ["0547333333", "example@.com", "https://www.youtube.com", "Tel Aviv 130 Street, Tel Aviv", "9:00-18:00"];
      return listOfBottomBarCredentials;
    }
  }, {
    key: "waitAndGetFAQsDescription",
    value: async function waitAndGetFAQsDescription() {
      await this.page.waitForSelector("div[class*='ufaq-faq-post']");
      var FAQsDescription = await this.page.$$("div[class*='ufaq-faq-post']");
      return FAQsDescription;
    }
  }, {
    key: "getListFAQsDescriptionData",
    value: async function getListFAQsDescriptionData() {
      var listOfFAQsDescriptionData = ["The booking conditions will be shown in the booking process under “details”. You will also find them on your booking confirmation.", "A detailed overview will be shown beneath the rate grid, if you click on a rate or category. The rate description will show every included service.", "Yes, of course you can enjoy a meal or drink in one of our restaurants or bars. You may also reserve a table with our table reservation form on each restaurant website.", "When booking through our website www.dorint.com, via our service center or directly in our hotel, we guarantee, that you will get the best available rate. In case you will find a cheaper price after your booking, you will receive the cheaper rate less 25% discount", "Generally hotel rooms are available from 3pm and apartments from 5pm."];
      return listOfFAQsDescriptionData;
    }
  }, {
    key: "waitAndGetFAQsButton",
    value: async function waitAndGetFAQsButton() {
      await this.page.waitForSelector("div[class*='faq-display-style-Default']");
      var faqsButton = await this.page.$$("div[class*='faq-display-style-Default']");
      return faqsButton;
    }
  }, {
    key: "waitforSelectorAndGetFAQsButton",
    value: async function waitforSelectorAndGetFAQsButton() {
      await this.page.waitForSelector("div[class*='faq-display-style-Default']");
    }
  }, {
    key: "waitforFAQsButtonDescription",
    value: async function waitforFAQsButtonDescription() {
      await this.page.waitForSelector("div[class*='ufaq-faq-post']");
    }
  }, {
    key: "waitforAndGetTopNavSocialMediaLinks",
    value: async function waitforAndGetTopNavSocialMediaLinks() {
      await this.page.waitForSelector(".sq-top-right-header>a");
      var ListTopNavSocialMediaLinks = await this.page.$$(".sq-top-right-header>a");
      var ListTopNavSocialMediaLinksArray = new Array();

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = ListTopNavSocialMediaLinks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var link = _step.value;

          var ListTopNavSocialMediaLink = await this.page.evaluate(function (el) {
            return el.getAttribute("href");
          }, link);
          ListTopNavSocialMediaLinksArray.push(ListTopNavSocialMediaLink);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return ListTopNavSocialMediaLinksArray;
    }
  }]);

  return HomePage;
}();

exports.default = HomePage;