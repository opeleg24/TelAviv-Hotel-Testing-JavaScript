"use strict";

var _chai = require("chai");

var _mochaSteps = require("mocha-steps");

var _builder = require("../builder");

var _builder2 = _interopRequireDefault(_builder);

var _HomePage = require("../pages/HomePage");

var _HomePage2 = _interopRequireDefault(_HomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Validate Home Page", function () {
  var page = void 0;
  var homePage = void 0;

  before(async function () {
    page = await _builder2.default.build("Desktop");
    homePage = await new _HomePage2.default(page);
    await page.goto("https://mpeleg90.com/omri");
  });

  after(async function () {
    await page.close();
  });

  (0, _mochaSteps.step)("Should Validate Top Bar Address Text", async function () {
    await homePage.waitAndGetTopBarAddressText();
  });

  (0, _mochaSteps.step)("Should Validate Hotel Description Text", async function () {
    await homePage.waitAndGetHotelDescriptionText();
  });

  (0, _mochaSteps.step)("Should Validate Bottom Bar Credentials from site with Bottom Bar Credentials Data List", async function () {
    var BottomBarCredentialsList = await homePage.getListOfBottomBarCredentialsData();
    var BottomBarCredentialsListFromSite = await homePage.waitAndGetBottomBarCredentialsFromSite();
    var ListBottomBarCredentialsListFromSite = new Array();

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = BottomBarCredentialsListFromSite[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        var itemFromSite = await page.evaluate(function (el) {
          return el.innerText;
        }, item);
        ListBottomBarCredentialsListFromSite.push(itemFromSite);
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

    var i = void 0,
        j = void 0;
    for (i = 0, j = 0; i <= BottomBarCredentialsList.length - 1 && j <= ListBottomBarCredentialsListFromSite.length; i++, j++) {
      var BottomBarCredentialsIteam = BottomBarCredentialsList[i];
      var BottomBarCredentialsIteamFromSite = ListBottomBarCredentialsListFromSite[j];
      (0, _chai.expect)(BottomBarCredentialsIteam).to.equal(BottomBarCredentialsIteamFromSite);
    }
  });

  (0, _mochaSteps.step)("Should Validate FAQsButton Section from site with FAQsButton Section Data List", async function () {
    var buttons = await homePage.waitAndGetFAQsButton();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = buttons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;

        await homePage.waitforSelectorAndGetFAQsButton();
        item.click();
        await homePage.waitforFAQsButtonDescription();
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var ListFAQsDescriptionData = await homePage.getListFAQsDescriptionData();
    var FAQsDescription = await homePage.waitAndGetFAQsDescription();
    var ListOfFAQsDescription = new Array();

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = FAQsDescription[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var answer = _step3.value;

        var AnswerFromSite = await page.evaluate(function (el) {
          return el.innerText;
        }, answer);
        ListOfFAQsDescription.push(AnswerFromSite);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var i = void 0,
        j = void 0;
    for (i = 0, j = 0; i <= ListFAQsDescriptionData.length - 1 && j <= ListOfFAQsDescription.length; i++, j++) {
      var FAQsDescriptionAnswerData = ListFAQsDescriptionData[i];
      var _FAQsDescription = ListOfFAQsDescription[j];
      (0, _chai.expect)(FAQsDescriptionAnswerData).to.equal(_FAQsDescription);
    }
  });
  (0, _mochaSteps.step)("Should Validate Top Nav Social Media", async function () {
    var TopNavSocialMedia = await homePage.waitforAndGetTopNavSocialMediaLinks();

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = TopNavSocialMedia[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var link = _step4.value;

        console.log(link);
        var response = await page.goto(link);
        (0, _chai.expect)(response.status()).to.be.within(0, 400, "This " + link + " link is broken");
        await page.goBack();
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  });
});