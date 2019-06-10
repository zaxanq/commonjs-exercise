const Handlebars = require('./handlebars');

class HbsDance {
    render(source, data, target) {
        let templateHTML = source.innerHTML;
        let compiled = Handlebars.compile(templateHTML);
        target.innerHTML = compiled(data);
    }
}

module.exports = new HbsDance;
