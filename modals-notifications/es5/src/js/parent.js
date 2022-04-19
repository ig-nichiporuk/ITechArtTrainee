function Parent(config) {
	this.config = config;
	this.elem = document.createElement('div');
	this.parent = document.createElement('div');
}

Parent.prototype = {
	constructor: Parent,

	show: function () {
		this.parent.insertAdjacentHTML('afterbegin', this.html);

		this._afterRender();
	},

	hide: function () {
		this.elem.remove();
	},

	_afterRender: function () {
		document.body.onclick = function () {
			if(event.target.classList.contains('notificationCloseJS') ||
				event.target.classList.contains('overlayJS') ||
				event.target.classList.contains('modalCloseJS')) {
					this.hide();
			}
		}.bind(this);
	},

	_creatParentWrap: function (selector) {
		var parentWarp = document.querySelector('.' + selector);

		if(parentWarp) {
			return parentWarp;

		} else {
			this.parent = document.createElement('div');

			this.parent.setAttribute('class', selector + ' ' + selector + 'JS');

			document.body.insertAdjacentElement('beforeend', this.parent);

			return this.parent;
		}
	}
}
