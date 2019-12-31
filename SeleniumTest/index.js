const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:3000/");
    const notePage = await driver.findElement(By.id("note_page"));
    notePage.click();
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Success");
    try {
      await driver.quit();
    } catch (error) {
      console.log(`error quitting selenium`);
    }
  }
})();
