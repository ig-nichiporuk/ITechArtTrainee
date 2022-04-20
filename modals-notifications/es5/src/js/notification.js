function Notification(parent, config, duration) {
	Parent.prototype.constructor.apply(this, arguments);

	this.parent = parent;
	this.config = config;
	this.duration = duration;
	this.html = '' +
			'<div class="notification__icon">' +
				'<img src="img/' + this.config.icon + '.svg" alt="icon">' +
			'</div>' +
			'<div class="notification__content">' +
				'<span class="notification__title notification__title_' + this.config.type + '">' + this.config.title + '</span>' +
				'<p class="notification__desc">' + this.config.desc + '</p>' +
			'</div>' +
			'<span class="notification__close notificationCloseJS"></span>';

	this._render();
	this.parent.setAttribute('data-timer-id',this._timerHideNotification(this.duration));
}

extend(Notification, Parent);

Notification.prototype.hide = function () {
	Notification.superclass.hide.apply(this);

	clearTimeout(this.parent.dataset.timerId);
};

Notification.prototype._timerHideNotification = function (duration) {
	return setTimeout(function () {
		this.parent.classList.remove('show');
	}.bind(this), duration);
};
