function Parent(config) {
	this.config = config;
	this.parent = document.createElement('div');
	this.elem = document.createElement('div');
}

Parent.prototype = {
	constructor: Parent,

	show: function () {
		this.parent.insertAdjacentHTML('afterbegin', this.html);

		this._afterRender()
	},

	_hide: function () {
		this.elem.remove();
	},

	_afterRender: function () {
		return;
	}
}
