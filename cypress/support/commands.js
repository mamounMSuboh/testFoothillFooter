module.exports.checkTheText=  (item, text) => {
    cy.get(item).should('have.text', text);

};
module.exports.clickItem=  (item) => {
    cy.get(item).click();
};
module.exports.checkItemIfExist=  (item) => {
    cy.get(item).should('be.visible');
}
module.exports.scrollToItem=  (item) => {
    cy.get(item).scrollIntoView();
}