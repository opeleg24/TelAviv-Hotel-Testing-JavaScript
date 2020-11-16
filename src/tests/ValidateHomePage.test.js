import { expect } from "chai";
import { step } from "mocha-steps";
import Page from "../builder";
import HomePage from "../pages/HomePage";

describe("Validate Home Page", () => {
  let page;
  let homePage;

  before(async () => {
    page = await Page.build("Desktop");
    homePage = await new HomePage(page);
    await page.goto("https://mpeleg90.com/omri");
  });

  after(async () => {
    await page.close();
  });

  step("Should Validate Top Bar Address Text", async () => {
    await homePage.waitAndGetTopBarAddressText();
  });

  step("Should Validate Hotel Description Text", async () => {
    await homePage.waitAndGetHotelDescriptionText();
  });

  step(
    "Should Validate Bottom Bar Credentials from site with Bottom Bar Credentials Data List",
    async () => {
      let BottomBarCredentialsList = await homePage.getListOfBottomBarCredentialsData();
      let BottomBarCredentialsListFromSite = await homePage.waitAndGetBottomBarCredentialsFromSite();
      let ListBottomBarCredentialsListFromSite = new Array();

      for (let item of BottomBarCredentialsListFromSite) {
        let itemFromSite = await page.evaluate((el) => el.innerText, item);
        ListBottomBarCredentialsListFromSite.push(itemFromSite);
      }

      let i, j;
      for (
        i = 0, j = 0;
        i <= BottomBarCredentialsList.length - 1 &&
        j <= ListBottomBarCredentialsListFromSite.length;
        i++, j++
      ) {
        let BottomBarCredentialsIteam = BottomBarCredentialsList[i];
        let BottomBarCredentialsIteamFromSite =
          ListBottomBarCredentialsListFromSite[j];
        expect(BottomBarCredentialsIteam).to.equal(
          BottomBarCredentialsIteamFromSite
        );
      }
    }
  );

  step(
    "Should Validate FAQsButton Section from site with FAQsButton Section Data List",
    async () => {
      let buttons = await homePage.waitAndGetFAQsButton();
      for (let item of buttons) {
        await homePage.waitforSelectorAndGetFAQsButton();
        item.click();
        await homePage.waitforFAQsButtonDescription();
      }

      let ListFAQsDescriptionData = await homePage.getListFAQsDescriptionData();
      let FAQsDescription = await homePage.waitAndGetFAQsDescription();
      let ListOfFAQsDescription = new Array();

      for (let answer of FAQsDescription) {
        let AnswerFromSite = await page.evaluate((el) => el.innerText, answer);
        ListOfFAQsDescription.push(AnswerFromSite);
      }

      let i, j;
      for (
        i = 0, j = 0;
        i <= ListFAQsDescriptionData.length - 1 &&
        j <= ListOfFAQsDescription.length;
        i++, j++
      ) {
        let FAQsDescriptionAnswerData = ListFAQsDescriptionData[i];
        let FAQsDescription = ListOfFAQsDescription[j];
        expect(FAQsDescriptionAnswerData).to.equal(FAQsDescription);
      }
    }
  );
  step("Should Validate Top Nav Social Media", async () => {
    const TopNavSocialMedia = await homePage.waitforAndGetTopNavSocialMediaLinks();

    for (let link of TopNavSocialMedia) {
      console.log(link);
      const response = await page.goto(link);
      expect(response.status()).to.be.within(
        0,
        400,
        "This " + link + " link is broken"
      );
      await page.goBack();
    }
  });
});
