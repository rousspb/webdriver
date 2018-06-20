// (C) 2016 Agilysys NV, LLC.  All Rights Reserved.  Confidential Information of Agilysys NV, LLC.

'use strict';

class ContactsListObject {

  get contactsList () {
    return $$('.contacts-list li');
  }

  contactPhoto(index) {
    return $$('.contacts-list li')[index].$('img');
  }

  contactName(index) {
    return this.contactsList[index].$('.information .name');
  }

  contactCompanyName(index) {
    return this.contactsList[index].$('.information .title-company');
  }

  get openContactDetail() {
    return $('.main.open-detail');
  }
}

module.exports = new ContactsListObject();
