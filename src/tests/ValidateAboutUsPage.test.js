import { expect } from "chai";
import { step } from "mocha-steps";
import Page from "../builder";
import AboutUsPage from "../pages/AboutUsPage";

describe("Validate About Us Page", () => {
  let page;
  let aboutUsPage;

  before(async () => {
    page = await Page.build("Desktop");
    aboutUsPage = await new AboutUsPage(page);
    await page.goto("https://mpeleg90.com/omri");
  });

  after(async () => {
    await page.close();
  });

  step("Should click center about us link", async () => {
    await aboutUsPage.waitAndClickCenterLink();
  });
  step("Should click top about us link", async () => {
    await aboutUsPage.waitAndClickTopLink();
  });
  step("Should click bottom about us link", async () => {
    await aboutUsPage.waitAndClickBottomLink();
  });

  step("Should wait for About Us page selector and validate text", async () => {
    const text = await aboutUsPage.waitAndGetAboutUsPageText();
    expect(text).to.equal("About us");
  });
});
