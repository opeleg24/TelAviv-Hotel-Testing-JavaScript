"use strict";

var _chai = require("chai");

var _mochaSteps = require("mocha-steps");

var _builder = require("../builder");

var _builder2 = _interopRequireDefault(_builder);

var _TelAvivCityPage = require("../pages/TelAvivCityPage");

var _TelAvivCityPage2 = _interopRequireDefault(_TelAvivCityPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Validate Tel Aviv City Page", function () {
  var page = void 0;
  var telAvivCityPage = void 0;

  before(async function () {
    page = await _builder2.default.build("Desktop");
    telAvivCityPage = await new _TelAvivCityPage2.default(page);
    await page.goto("https://mpeleg90.com/omri");
  });

  after(async function () {
    await page.close();
  });

  (0, _mochaSteps.step)("Should click center contact us link", async function () {
    await telAvivCityPage.waitAndClickCenterLink();
  });
  (0, _mochaSteps.step)("Should click top contact us link", async function () {
    await telAvivCityPage.waitAndClickTopLink();
  });
  (0, _mochaSteps.step)("Should click bottom contact us link", async function () {
    await telAvivCityPage.waitAndClickBottomLink();
  });

  (0, _mochaSteps.step)("Should wait for Tel Aviv City page selector and validate text", async function () {
    var text = await telAvivCityPage.waitAndGetTelAvivCityPageText();
    (0, _chai.expect)(text).to.equal("Tel Aviv City");
  });
});