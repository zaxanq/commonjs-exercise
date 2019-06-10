class Helpers {
    class(className, firstOnly = true) {
        let elements = document.getElementsByClassName(className);
        return firstOnly ? elements[0] : elements;
    }

    id(idName) {
        return document.getElementById(idName);
    }

    addClass(className, element) {
        element.classList.add(className);
    }

    removeClass(className, element) {
        element.classList.remove(className);
    }
}

module.exports = new Helpers;
