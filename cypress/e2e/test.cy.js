const selectors = require("../fixtures/selectors.json");
const commands = require("../support/commands");
const {navigators,home, aboutUS} = require("../fixtures/data");
beforeEach( () => {
  cy.visit('https://www.foothillsolutions.com/');

});

describe('test foothill footer', () => {
  it('Go to foothill footer', () => {
    commands.scrollToItem(selectors.footer);
  });
  it("Check the titles", () => {
    commands.checkTheText(selectors.navigate,'Navigate')
    commands.checkTheText(selectors.home,'Home')
    commands.checkTheText(selectors.about_us,'About Us')
   });

  it("Check the Navigate buttons ", () => {
    let item;
    for(item of navigators) {
      commands.checkTheText(item.xpath, item.name)
      commands.clickItem(item.xpath);
      commands.checkItemIfExist(item.destinationXpath);
      commands.scrollToItem(selectors.footer);
    }
  });
  it("Check the Home buttons ", () => {
    let item;
    for(item of home) {
      commands.checkTheText(item.xpath, item.name)
      commands.clickItem(item.xpath);
      commands.checkItemIfExist(item.destinationXpath);
      commands.scrollToItem(selectors.footer);
    }
  });

  it("Check the About US buttons ", () => {
    let item;
    for(item of aboutUS) {
      commands.checkTheText(item.xpath, item.name)
      commands.clickItem(item.xpath);
      commands.checkItemIfExist(item.destinationXpath);
      commands.scrollToItem(selectors.footer);
    }
  });
})