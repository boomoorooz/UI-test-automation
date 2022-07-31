const { Builder, By, until, Key } = require("selenium-webdriver");

async function dynamicid() {
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

async function classattribute() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://uitestingplayground.com/");

  //Click the button
  await driver
    .findElement(By.xpath("/html/body/section[2]/div/div[1]/div[2]/h3/a"))
    .click();

  //Find primary-btn
  await driver
    .findElement(
      By.xpath(
        "//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]"
      )
    )
    .click();

  //Accepting alert
  let alert = await driver.switchTo().alert();
  await alert.accept();
}

async function hiddenlayers() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our page
  await driver.get("http://uitestingplayground.com/");

  //Click the button
  await driver
    .findElement(By.xpath("/html/body/section[2]/div/div[1]/div[3]/h3/a"))
    .click();

  await driver.sleep(2000);
  //Click green button
  await driver.findElement(By.xpath('//*[@id="greenButton"]')).click();
  await driver.sleep(1000);
  //Click blue button
  await driver.findElement(By.xpath('//*[@id="blueButton"]')).click();
  await driver.sleep(1000);
  //Click green button again - error
  await driver.findElement(By.xpath('//*[@id="greenButton"]')).click();
}
