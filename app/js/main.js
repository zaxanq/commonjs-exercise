// Promise.all([
//     module.import('./test')g
// ]).then(function (modules) {
//     const [test] = modules;
//     test('siema');
// });


// module.import('./test').then(function (test) {
//     test('Hello CommonJS!');
// });


// const test = require('./test');
// test('elo');

class App {
    init() {
        this.helpers = require('./helpers');

        this.menu = require('./components/menu');
        this.menu.init();

        this.wrapper = require('./components/wrapper');
        this.wrapper.init();
    }
}

(new App).init();
