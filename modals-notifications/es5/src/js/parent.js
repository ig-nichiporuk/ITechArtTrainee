function Parent(config) {
	this.config = config;
	this.parent = document.createElement('div');
	this.elem = document.createElement('div');
}

Parent.prototype = {
	constructor: Parent,

	show: function () {
		this.parent.insertAdjacentHTML('afterbegin', this.html);

		this.afterRender()
	},

	hide: function () {
		this.elem.remove();
	},

	afterRender: function () {
		return;
	}
}
