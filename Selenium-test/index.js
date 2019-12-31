const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.ebay.com");
    const shopByCategory = await driver.findElement(
      By.xpath('//*[@id="gh-shop-a"]')
    );
    shopByCategory.click();
    // element.sendKeys('webdriver', Key.RETURN)
    const kidsToys = await driver.findElement(
      By.xpath('//*[@id="gh-sbc"]/tbody/tr/td[3]/ul[2]/li[2]/a')
    );
    kidsToys.click();

    // const actionBrand=await driver.findElement(By.css('#w7-xCarousel-x-carousel-items > ul > li:nth-child(3) > a'))
    actionBrand = await driver.wait(
      until.elementLocated(
        By.css("#w7-xCarousel-x-carousel-items > ul > li:nth-child(3) > a")
      )
    );
    actionBrand.click();
    await driver.wait(until.titleContains("Action Diecast"));
    const car = await driver.wait(
      until.elementLocated(
        By.xpath('//*[@id="w7-xCarousel-x-carousel-items"]/ul/li[2]/a')
      ),
      4000
    );
    car.click();

    await driver.wait(
      until.titleIs("Action Diecast and Toy Car for sale | eBay"),
      4000
    );
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
