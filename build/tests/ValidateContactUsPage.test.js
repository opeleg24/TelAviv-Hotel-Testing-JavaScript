"use strict";

var _chai = require("chai");

var _mochaSteps = require("mocha-steps");

var _builder = require("../builder");

var _builder2 = _interopRequireDefault(_builder);

var _ContactUsPage = require("../pages/ContactUsPage");

var _ContactUsPage2 = _interopRequireDefault(_ContactUsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Validate Contact Us Page", function () {
  var page = void 0;
  var contactUsPage = void 0;

  before(async function () {
    page = await _builder2.default.build("Desktop");
    contactUsPage = await new _ContactUsPage2.default(page);
    await page.goto("https://mpeleg90.com/omri");
  });

  after(async function () {
    await page.close();
  });

  (0, _mochaSteps.step)("Should click top contact us link", async function () {
    await contactUsPage.waitAndClickTopLink();
  });
  (0, _mochaSteps.step)("Should click bottom contact us link", async function () {
    await contactUsPage.waitAndClickBottomLink();
  });

  (0, _mochaSteps.step)("Should wait for Contact us page selector and validate text", async function () {
    var text = await contactUsPage.waitAndGetContactUsPageText();
    (0, _chai.expect)(text).to.equal("Contact Us");
  });

  (0, _mochaSteps.step)("Validate Contact Us page Form", async function () {
    await contactUsPage.validateContactUsForm("John James", "opeleg1990@gmail.com", "Hotel Vacancies", "Do you have rooms available on the weekend of  December 19, 2021");
    var message = await contactUsPage.waitAndGetContactUsSuccessText();
    (0, _chai.expect)(message).to.equal("Thank you for your message. It has been sent.");
  });

  (0, _mochaSteps.step)("validate Contact us Form Required Field Email", async function () {
    await page.goto("https://mpeleg90.com/omri/contact-us/");
    await contactUsPage.validateContactUsForm("John James", "", "Hotel Vacancies", "Do you have rooms available on the weekend of  December 19, 2021");
    var message = await contactUsPage.waitAndGetContactUsRequiredFieldText();
    (0, _chai.expect)(message).to.equal("The field is required.");
  });

  (0, _mochaSteps.step)("validate Contact us Form Required Field Name", async function () {
    await page.goto("https://mpeleg90.com/omri/contact-us/");
    await contactUsPage.validateContactUsForm("", "opeleg1990@gmail.com", "Hotel Vacancies", "Do you have rooms available on the weekend of  December 19, 2021");
    var message = await contactUsPage.waitAndGetContactUsRequiredFieldText();
    (0, _chai.expect)(message).to.equal("The field is required.");
  });

  (0, _mochaSteps.step)("validate Contact us Form Required Field Email", async function () {
    await page.goto("https://mpeleg90.com/omri/contact-us/");
    await contactUsPage.validateContactUsForm("John James", "invaild@@@", "Hotel Vacancies", "Do you have rooms available on the weekend of  December 19, 2021");
    var message = await contactUsPage.waitAndGetContactUsRequiredFieldText();
    (0, _chai.expect)(message).to.equal("The e-mail address entered is invalid.");
  });
});