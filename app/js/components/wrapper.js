const Hbs = require('../handlebars-dance');
const Helpers = require('../helpers');
const Menu = require('./menu');

class Wrapper {
    init() {
        this.Data = {
            contentPages: [
                {
                    title: 'Welcome!',
                    message: '<span>This is it.</span><span>This is the first CommonJS / Handlebars project I\'ve created.</span><span>It is the first time I have used multiple Javascript files and created communication between them.</span><span>This is only one of many example pages created in this example project, so as you may expect, the content quality here is not high. In fact, this is not even meant to be read but simply to fill the space in this content container.</span>'
                },
                {
                    title: 'Reason why we were founded',
                    message: '<span>Perhaps a better title would be "reason why this is created", but even then - you already know it.</span><span>Normally there would be a page with reason behind creating a company, a project or at least an idea that was developed into something else than just an idea in someone\'s head.</span><span>It would present some most important personas that were the timber of the company, a CEO probably, a CTO perhaps. People who are just workers, yet they work for decades. The inspiration that fueled them all to create something new.</span>'
                },
                {
                    title: 'Our mission, our goal',
                    message: '<span>Each company has a goal. Probably even every human has a goal, at least old enough to understand the concept of goal, or a point they\'re heading towards.</span><span>Most of the companies\' missions can be shortened to simple "make profit", but not in the case of this imaginary company. This company would seek the profit of course, but it\'s main goal, main purpose would be to make the moon expeditions and space expeditions in general a possibility.</span><span>A company strongly inspired by quite fresh SpaceX, simply because it was the first thing that came to my mind when I had to think of a goal for an imaginary company.</span>'
                },
                {
                    title: 'Clients',
                    message: '<span>Obviously as a "real" company we have "real" clients. No fake opinions in any form, only reliable comments about services we provide.</span><span>We have built an immense client base consisting of many high level industry figures with unimaginable funding capabilities and very strong connections. These clients hold a huge part of the market and are initiators of the field.</span>'
                },
                {
                    title: 'Our ideology',
                    message: '<span>Lorem ipsum dolor sit amet leo vitae pede. Lorem ipsum nibh, sed justo semper urna. Nam eu lacus. Nullam et ultrices posuere cubilia Curae, Duis hendrerit nibh nulla, vitae ante.</span><span>Vestibulum leo. Suspendisse luctus ullamcorper tellus wisi, dapibus vitae, vulputate vel, dapibus velit. Mauris convallis tellus. Aliquam sit amet, consectetuer adipiscing eget, ante.</span><span>Curabitur vel leo. Quisque vitae faucibus orci ipsum, molestie vitae, bibendum a, tristique eu, pulvinar lacinia, urna mattis id, mattis vel, arcu. In ornare in, ornare dapibus. Aenean lobortis dapibus, libero et malesuada elit semper eu, elit.</span>'
                },
                {
                    title: 'The price',
                    message: '<span>Curabitur fringilla mi, nec augue. Vestibulum non eros. Maecenas malesuada fames ac augue. Nam ullamcorper eleifend et, pharetra nulla sit amet erat. Vivamus malesuada aliquet, dui eu dui quis molestie ultricies accumsan. Proin id leo vitae justo. Vestibulum commodo magna, sollicitudin ligula condimentum vitae, pede. Sed non eros sed erat. Quisque facilisis dignissim tempor, pede porta et, porttitor vel, ornare lacus iaculis nec, molestie enim.</span><span>Cras ipsum sit amet, nonummy malesuada, arcu vitae ultrices mi. Pellentesque mattis rhoncus eu, egestas quam nunc, in felis vitae lectus pharetra vel, ipsum. Nunc.</span>'
                },
                {
                    title: 'Our workflow',
                    message: '<span>Vestibulum leo. Suspendisse luctus ullamcorper tellus wisi, dapibus vitae, vulputate vel, dapibus velit. Mauris convallis tellus. Aliquam sit amet, consectetuer adipiscing eget, ante.</span><span>Curabitur vel leo. Quisque vitae faucibus orci ipsum, molestie vitae, bibendum a, tristique eu, pulvinar lacinia, urna mattis id, mattis vel, arcu. In ornare in, ornare dapibus. Aenean lobortis dapibus, libero et malesuada elit semper eu, elit.</span><span>Curabitur fringilla mi, nec augue. Vestibulum non eros. Maecenas malesuada fames ac augue. Nam ullamcorper eleifend et, pharetra nulla sit amet erat. Vivamus malesuada aliquet, dui eu dui quis molestie ultricies accumsan. Proin id leo vitae justo. Vestibulum commodo magna, sollicitudin ligula condimentum vitae, pede. Sed non eros sed erat. Quisque facilisis dignissim tempor, pede porta et, porttitor vel, ornare lacus iaculis nec, molestie enim.</span>'
                }
            ]
        };

        this.createPages();
        this.addIds();
        Hbs.render(Helpers.id('content-template'), this.Data, Helpers.class('content'));

        this.setPage(window.location.hash.slice(1));
        this.addEventListeners();

    }

    addIds() {
        for (let i = 1; i <= this.Data.contentPages.length; i++) {
            this.Data.contentPages[i - 1].id = Menu.Data.items[i - 1].url;
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
        if (id === '') id = 'home';
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
        });

        window.addEventListener('hashchange', () => {
            setTimeout(() => {
                this.setPage(window.location.hash.slice(1));
            }, 0);
        });
    }

}

module.exports = new Wrapper;
