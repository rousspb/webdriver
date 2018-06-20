const contactPage = require('../pageObjects/contacts.page');
const general = require('../pageActions/general.js');
describe('Contacts list', () => {
  it('should go to main page', () => {
    browser.url('http://localhost:4200/contacts');
    expect(browser.getUrl()).toBe('http://localhost:4200/contacts');
    general.waitForStartingApp();
  });

  it('should shows twenty contacts', () => {
    expect(contactPage.contactsList.length).toBe(20);
  });

  it('should shows the components for a card are visible', () => {
    expect(contactPage.contactPhoto(0).isVisible()).toBe(true);
    expect(contactPage.contactName(0).isVisible()).toBe(true);
    expect(contactPage.contactCompanyName(0).isVisible()).toBe(true);
  });

  it('should shows the contact details when click over an contact', () => {
    contactPage.contactName(0).click();
    expect(contactPage.openContactDetail.isVisible()).toBe(true);
    browser.pause(5000);
  });
});
