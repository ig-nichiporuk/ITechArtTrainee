function Parent(config) {
	this.config = config;
}

Parent.prototype = {
	constructor: Parent,

	show: function () {
		if(this.parent) {
			this.parent.insertAdjacentHTML('afterbegin', this.html);

			this.afterRender();
		} else {
			return;
		};
	},

	hide: function () {
		return this.elem ? this.elem.remove() : '';
	},

	afterRender: function () {
		return;
	}

}
