import { expect } from "chai";
import { step } from "mocha-steps";
import Page from "../builder";
import TelAvivCityPage from "../pages/TelAvivCityPage";

describe("Validate Tel Aviv City Page", () => {
  let page;
  let telAvivCityPage;

  before(async () => {
    page = await Page.build("Desktop");
    telAvivCityPage = await new TelAvivCityPage(page);
    await page.goto("https://mpeleg90.com/omri");
  });

  after(async () => {
    await page.close();
  });

  step("Should click center contact us link", async () => {
    await telAvivCityPage.waitAndClickCenterLink();
  });
  step("Should click top contact us link", async () => {
    await telAvivCityPage.waitAndClickTopLink();
  });
  step("Should click bottom contact us link", async () => {
    await telAvivCityPage.waitAndClickBottomLink();
  });

  step(
    "Should wait for Tel Aviv City page selector and validate text",
    async () => {
      const text = await telAvivCityPage.waitAndGetTelAvivCityPageText();
      expect(text).to.equal("Tel Aviv City");
    }
  );
});
