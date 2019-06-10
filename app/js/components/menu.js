const Hbs = require('../handlebars-dance');
const Helpers = require('../helpers');

class Menu {
  init() {
    this.Data = {
      items: [
        {name: 'Home'},
        {name: 'Reason why'},
        {name: 'Our mission'},
        {name: 'Our clients'},
        {name: 'Ideology'},
        {name: 'Pricing'},
        {name: 'Workflow'},
        {name: 'Our members'},
        {name: 'Competences'},
        {name: 'Technologies'},
        {name: 'Contact us'},
      ]
    };
    this.createURLs();

    Hbs.render(Helpers.id('menu-template'), this.Data, Helpers.class('menu-container'));
  }

  createURLs() {
    this.Data.items.forEach((item) => {
      item.url = item.name.toLowerCase().split(' ').join('-');
    });
  }
}

module.exports = new Menu();