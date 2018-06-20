class General {
  waitForStartingApp() {
    browser.waitForVisible('body .main', 1000);
  }
}

module.exports = new General();
