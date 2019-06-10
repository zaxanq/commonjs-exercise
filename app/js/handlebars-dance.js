const Helpers = require('./helpers');
const Handlebars = require('./handlebars');

class HbsDance {
    init(source, data, target) {
        let templateHTML = source.innerHTML;
        let compiled = Handlebars.compile(templateHTML);
        target.innerHTML = compiled(data);
    }

    renderMenu() {
        this.Data = {
            items: [
                {name: 'Home'},
                {name: 'Reason why'},
                {name: 'Our mission'},
                {name: 'Our clients'},
                {name: 'Ideology'},
                {name: 'Our members'},
                {name: 'Technologies'},
                {name: 'Contact us'},
            ]
        };
        this.createURLs();

        this.init(Helpers.id('test'), this.Data, Helpers.class('menu-container'));
    }

    createURLs() {
        this.Data.items.forEach((item) => {
            item.url = item.name.toLowerCase().split(' ').join('-');
        });
    }
}

module.exports = new HbsDance();
