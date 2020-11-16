import { expect } from "chai";
import { step } from "mocha-steps";
import Page from "../builder";
import ContactUsPage from "../pages/ContactUsPage";

describe("Validate Contact Us Page", () => {
  let page;
  let contactUsPage;

  before(async () => {
    page = await Page.build("Desktop");
    contactUsPage = await new ContactUsPage(page);
    await page.goto("https://mpeleg90.com/omri");
  });

  after(async () => {
    await page.close();
  });

  step("Should click top contact us link", async () => {
    await contactUsPage.waitAndClickTopLink();
  });
  step("Should click bottom contact us link", async () => {
    await contactUsPage.waitAndClickBottomLink();
  });

  step(
    "Should wait for Contact us page selector and validate text",
    async () => {
      const text = await contactUsPage.waitAndGetContactUsPageText();
      expect(text).to.equal("Contact Us");
    }
  );

  step("Validate Contact Us page Form", async () => {
    await contactUsPage.validateContactUsForm(
      "John James",
      "opeleg1990@gmail.com",
      "Hotel Vacancies",
      "Do you have rooms available on the weekend of  December 19, 2021"
    );
    const message = await contactUsPage.waitAndGetContactUsSuccessText();
    expect(message).to.equal("Thank you for your message. It has been sent.");
  });

  step("validate Contact us Form Required Field Email", async () => {
    await page.goto("https://mpeleg90.com/omri/contact-us/");
    await contactUsPage.validateContactUsForm(
      "John James",
      "",
      "Hotel Vacancies",
      "Do you have rooms available on the weekend of  December 19, 2021"
    );
    const message = await contactUsPage.waitAndGetContactUsRequiredFieldText();
    expect(message).to.equal("The field is required.");
  });

  step("validate Contact us Form Required Field Name", async () => {
    await page.goto("https://mpeleg90.com/omri/contact-us/");
    await contactUsPage.validateContactUsForm(
      "",
      "opeleg1990@gmail.com",
      "Hotel Vacancies",
      "Do you have rooms available on the weekend of  December 19, 2021"
    );
    const message = await contactUsPage.waitAndGetContactUsRequiredFieldText();
    expect(message).to.equal("The field is required.");
  });

  step("validate Contact us Form Required Field Email", async () => {
    await page.goto("https://mpeleg90.com/omri/contact-us/");
    await contactUsPage.validateContactUsForm(
      "John James",
      "invaild@@@",
      "Hotel Vacancies",
      "Do you have rooms available on the weekend of  December 19, 2021"
    );
    const message = await contactUsPage.waitAndGetContactUsRequiredFieldText();
    expect(message).to.equal("The e-mail address entered is invalid.");
  });
});
