const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:3000");
    const notePage = await driver.findElement(By.xpath('//*[@id="note_page"]'));
    notePage.click();
    module = await driver.wait(
      until.elementLocated(By.xpath('//*[@id="IGL"]'))
    );
    console.log("module IGL affiché");
  } catch (err) {
    console.log(err);
  } finally {
    console.log("test fini avec succès");
  }
})();
