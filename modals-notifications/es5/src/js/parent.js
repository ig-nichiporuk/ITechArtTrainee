function Parent(config) {
	this.config = config;
	this.elem = document.createElement('div');
	this.parent = document.createElement('div');
}

Parent.prototype.constructor = Parent,

Parent.prototype.show = function () {
	this.parent.classList.add('show');

	this._afterRender();
};

Parent.prototype.hide = function () {
	this.parent.classList.remove('show');
};

Parent.prototype._render = function () {
	this.parent.innerHTML = this.html;
}

Parent.prototype._afterRender = function () {
	document.body.onclick = function () {
		if(event.target.classList.contains('notificationCloseJS') ||
			event.target.classList.contains('overlayJS') ||
			event.target.classList.contains('modalCloseJS')) {
				this.parent = event.target.closest('.show');

				this.hide();
		}
	}.bind(this);
};

