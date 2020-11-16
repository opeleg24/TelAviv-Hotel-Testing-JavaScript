"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContactUsPage = function () {
  function ContactUsPage(page) {
    _classCallCheck(this, ContactUsPage);

    this.page = page;
  }

  _createClass(ContactUsPage, [{
    key: "waitAndClickTopLink",
    value: async function waitAndClickTopLink() {
      await this.page.waitForXPath("//div[@class='sq-menu sq-clearfix']/ul[1]/li[4]/a");
      await this.page.$x("//div[@class='sq-menu sq-clearfix']/ul[1]/li[4]/a");
      var elements = await this.page.$x("//div[@class='sq-menu sq-clearfix']/ul[1]/li[4]/a");
      await elements[0].click();
    }
  }, {
    key: "waitAndClickBottomLink",
    value: async function waitAndClickBottomLink() {
      await this.page.waitForXPath("//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[4]/a[1]");
      await this.page.$x("//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[4]/a[1]");
      var elements = await this.page.$x("//div[@class='sq-footer sq-footer4']/aside/ul[1]/li[4]/a[1]");
      await elements[0].click();
    }
  }, {
    key: "waitAndGetContactUsPageText",
    value: async function waitAndGetContactUsPageText() {
      await this.page.waitForSelector("div[class='sq-container'] h1");
      return this.page.$eval("div[class='sq-container'] h1", function (e) {
        return e.innerHTML;
      });
    }
  }, {
    key: "validateContactUsForm",
    value: async function validateContactUsForm(full_name, email_address, subject, message) {
      await this.page.waitInputAndType("[name='your-name']", full_name);
      await this.page.waitInputAndType("[name='your-email']", email_address);
      await this.page.waitInputAndType("[name='your-subject']", subject);
      await this.page.waitInputAndType("[name='your-message']", message);
      await this.page.waitAndClick("[type='submit']");
    }
  }, {
    key: "waitAndGetContactUsSuccessText",
    value: async function waitAndGetContactUsSuccessText() {
      await this.page.waitForSelector("[class*='wpcf7-mail-sent-ok']");
      return this.page.$eval("[class*='wpcf7-mail-sent-ok']", function (e) {
        return e.innerHTML;
      });
    }
  }, {
    key: "waitAndGetContactUsRequiredFieldText",
    value: async function waitAndGetContactUsRequiredFieldText() {
      await this.page.waitForSelector("[class='wpcf7-not-valid-tip']");
      return this.page.$eval("[class='wpcf7-not-valid-tip']", function (e) {
        return e.innerHTML;
      });
    }
  }]);

  return ContactUsPage;
}();

exports.default = ContactUsPage;