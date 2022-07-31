const { Builder, By, until, Key } = require("selenium-webdriver");

async function first() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://uitestingplayground.com/");

  //Click the button
  await driver
    .findElement(By.xpath("/html/body/section[2]/div/div[1]/div[1]/h3/a"))
    .click();

  await driver.findElement(By.xpath("/html/body/section/div/button")).click();

  await driver.quit();
}
first();
