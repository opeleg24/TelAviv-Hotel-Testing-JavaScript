"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TelAvivCityPage = function () {
  function TelAvivCityPage(page) {
    _classCallCheck(this, TelAvivCityPage);

    this.page = page;
  }

  _createClass(TelAvivCityPage, [{
    key: "waitAndClickCenterLink",
    value: async function waitAndClickCenterLink() {
      await this.page.waitForSelector("div[class*='q-featured-post2'] a");
      await this.page.click("div[class*='q-featured-post2'] a");
    }
  }, {
    key: "waitAndClickTopLink",
    value: async function waitAndClickTopLink() {
      await this.page.waitForXPath("//div[@class='sq-menu sq-clearfix']/ul[1]/li[2]/a");
      await this.page.$x("//div[@class='sq-menu sq-clearfix']/ul[1]/li[2]/a");
      var elements = await this.page.$x("//div[@class='sq-menu sq-clearfix']/ul[1]/li[2]/a");
      await elements[0].click();
    }
  }, {
    key: "waitAndClickBottomLink",
    value: async function waitAndClickBottomLink() {
      await this.page.waitForXPath("//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[2]/a[1]");
      await this.page.$x("//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[2]/a[1]");
      var elements = await this.page.$x("//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[2]/a[1]");
      await elements[0].click();
    }
  }, {
    key: "waitAndGetTelAvivCityPageText",
    value: async function waitAndGetTelAvivCityPageText() {
      await this.page.waitForSelector("div[class='sq-container'] h1");
      return this.page.$eval("div[class='sq-container'] h1", function (e) {
        return e.innerHTML;
      });
    }
  }]);

  return TelAvivCityPage;
}();

exports.default = TelAvivCityPage;