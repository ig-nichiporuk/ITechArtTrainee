function Parent() {}

Parent.prototype = {
	constructor: Parent,

	show: function () {
		this.parent.insertAdjacentHTML('afterbegin', this.html);
	},

	hide: function () {
		this.elem.remove();
	}
}
