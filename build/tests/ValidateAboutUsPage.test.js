"use strict";

var _chai = require("chai");

var _mochaSteps = require("mocha-steps");

var _builder = require("../builder");

var _builder2 = _interopRequireDefault(_builder);

var _AboutUsPage = require("../pages/AboutUsPage");

var _AboutUsPage2 = _interopRequireDefault(_AboutUsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Validate About Us Page", function () {
  var page = void 0;
  var aboutUsPage = void 0;

  before(async function () {
    page = await _builder2.default.build("Desktop");
    aboutUsPage = await new _AboutUsPage2.default(page);
    await page.goto("https://mpeleg90.com/omri");
  });

  after(async function () {
    await page.close();
  });

  (0, _mochaSteps.step)("Should click center about us link", async function () {
    await aboutUsPage.waitAndClickCenterLink();
  });
  (0, _mochaSteps.step)("Should click top about us link", async function () {
    await aboutUsPage.waitAndClickTopLink();
  });
  (0, _mochaSteps.step)("Should click bottom about us link", async function () {
    await aboutUsPage.waitAndClickBottomLink();
  });

  (0, _mochaSteps.step)("Should wait for About Us page selector and validate text", async function () {
    var text = await aboutUsPage.waitAndGetAboutUsPageText();
    (0, _chai.expect)(text).to.equal("About us");
  });
});