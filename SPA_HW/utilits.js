const $ = (selector) => {
    return document.querySelector(selector)
}

Object.prototype.addTo = function(selector) {
 const mySelector = $(selector)

 mySelector.appendChild(this)
 return this
}

Object.prototype.addClass = function(className) {
 this.classList.add(className)
 return this
}

Object.prototype.listener = function(type, func) {
 this.addEventListener(type, func)
 return this
}

