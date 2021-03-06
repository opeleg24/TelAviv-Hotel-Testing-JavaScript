"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _puppeteer = require("puppeteer");

var _puppeteer2 = _interopRequireDefault(_puppeteer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Launcher = function () {
  _createClass(Launcher, null, [{
    key: "build",
    value: async function build(viewport) {
      var launchOptions = {
        headless: true,
        slowMo: 20,
        args: ["--no-sandbox", "--disable-setui-sandbox", "--disable-web-security"]
      };
      var browser = await _puppeteer2.default.launch(launchOptions);
      var page = await browser.newPage();
      var extendedPage = new Launcher(page);
      page.setDefaultTimeout(10000);

      switch (viewport) {
        case "Mobile":
          var mobileViewport = _puppeteer2.default.devices["iPhone X"];
          await page.emulate(mobileViewport);
          break;
        case "Tablet":
          var tabletViewport = _puppeteer2.default.devices["iPad landscape"];
          await page.emulate(tabletViewport);
          break;
        case "Desktop":
          await page.setViewport({ width: 1024, height: 768 });
          break;
        default:
          throw new Error("Devices are only MOBILE | TABLET | DESKTOP");
      }

      return new Proxy(extendedPage, {
        get: function get(_target, property) {
          return extendedPage[property] || browser[property] || page[property];
        }
      });
    }
  }]);

  function Launcher(page) {
    _classCallCheck(this, Launcher);

    this.page = page;
  }

  _createClass(Launcher, [{
    key: "waitInputAndType",
    value: async function waitInputAndType(selector, text) {
      await this.page.waitForSelector(selector);
      await this.page.type(selector, text);
    }
  }, {
    key: "waitClearInputAndType",
    value: async function waitClearInputAndType(selector, text) {
      await this.page.waitForSelector(selector, { timeout: 150000 });
      await this.page.type(selector, "");
      await this.page.type(selector, text);
    }
  }, {
    key: "waitAndClick",
    value: async function waitAndClick(selector) {
      await this.page.waitForSelector(selector);
      await this.page.click(selector);
    }
  }, {
    key: "waitAndClickCheckBox",
    value: async function waitAndClickCheckBox(selector) {
      await this.page.waitForSelector(selector);
      await this.page.click(selector, { clickCount: 1 });
    }
  }, {
    key: "isElementVisible",
    value: async function isElementVisible(selector) {
      var visible = true;
      await this.page.waitForSelector(selector, { visible: true, timeout: 3000 }).catch(function () {
        visible = false;
      });
      return visible;
    }
  }, {
    key: "generateScreenshot",
    value: async function generateScreenshot() {
      await this.page.screenshot({
        path: "./src/tests/exampleFormPage.png",
        fullpage: true
      });
    }
  }]);

  return Launcher;
}();

exports.default = Launcher;