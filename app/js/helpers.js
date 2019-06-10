class Helpers {
    class(className, firstOnly = true) {
        let elements = document.getElementsByClassName(className);
        return firstOnly ? elements[0] : elements;
    }

    id(idName) {
        return document.getElementById(idName);
    }

    addClass(element, className) {
        element.classList.add(className);
    }

    removeClass(element, className) {
        element.classList.remove(className);
    }
}

module.exports = new Helpers;
