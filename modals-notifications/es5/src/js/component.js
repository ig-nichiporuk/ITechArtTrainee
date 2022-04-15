function Component(conf) {
	this.title = conf.title;
	this.desc = conf.desc;
	this.icon = conf.icon;
}

Component.prototype.show = function () {
	this.parent.insertAdjacentHTML('afterbegin', this.html);
}

Component.prototype.hide = function (elem) {
	elem.parentElement.remove();
}
