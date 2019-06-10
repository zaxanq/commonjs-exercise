const Hbs = require('../handlebars-dance');
const Helpers = require('../helpers');
const Menu = require('./menu');

class Wrapper {
    init() {
        this.Data = {
            contentPages: [
                {
                    title: 'Welcome!',
                    message: 'This is it.'
                },
                {
                    title: 'Reason why we were founded',
                    message: 'No reason at all tbh...'
                }
            ]
        };

        this.createPages();
        this.addIds();
        Hbs.render(Helpers.id('content-template'), this.Data, Helpers.class('content'));

        this.setPage('home');
        this.addEventListeners();
    }

    addIds() {
        for (let i = 1; i <= this.Data.contentPages.length; i++) {
            this.Data.contentPages[i - 1]   .id = Menu.Data.items[i - 1].url;
        }
    }

    createPages() {
        const that = this;

        this.Pages = [];
        for (let i = 1; i <= this.Data.contentPages.length; i++) {
            this.Pages.push({
                id: i,
                idName: Menu.Data.items[i - 1].url,
                title: that.Data.contentPages[i - 1].title,
                message: that.Data.contentPages[i - 1].message,
                hidden: true
            });
        }
        console.log(this.Pages);
    }

    setPage(id) {
        this.Pages.forEach((page) => {
            if (page.idName === id) {
                page.hidden = false;
            } else {
                page.hidden = true;
            }
        });

        this.updatePages();
    }

    updatePages() {
        let pageHidden = 'content__page--hidden';
        this.Pages.forEach((page) => {
            if (!page.hidden) {
                Helpers.removeClass(Helpers.id(page.idName), pageHidden);
            } else {
                Helpers.addClass(Helpers.id(page.idName), pageHidden);
            }
        });
    }

    addEventListeners() {
        [...Helpers.class('menu-item', false)].map((item) => {
            item.addEventListener('click', () => {
                setTimeout(() => {
                    this.setPage(window.location.hash.slice(1));
                }, 0);
            });
        })
    }

}

module.exports = new Wrapper;
