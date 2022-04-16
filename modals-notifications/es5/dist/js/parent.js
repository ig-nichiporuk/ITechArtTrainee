function Parent(conf, parentBlock) {
	this.title = conf.title;
	this.desc = conf.desc;
	this.icon = conf.icon;
	this.parent = parentBlock;
}

Parent.prototype = {
	constructor: Parent,

	show: function () {
		this.parent.insertAdjacentHTML('afterbegin', this.html);
	},

	hide: function () {
		this.elem.remove();
	}
}
