const Helpers = require('./helpers');
const Handlebars = require('./handlebars');

class HbsDance {
    renderPage() {

        let templateHTML = Helpers.id('test').innerHTML;
        let compiled = Handlebars.compile(templateHTML);
        console.log(compiled);
        Helpers.id('test-container').innerHTML = compiled({name: 'czesc'});

    }
}

module.exports = new HbsDance();
