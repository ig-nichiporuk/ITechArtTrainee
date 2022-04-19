function Notification(config, duration) {
	Parent.prototype.constructor.apply(this, arguments);

	this.parent = Parent.prototype._creatParentWrap('notifications');

	this.test = this.prototype;
	this.duration = duration;
	this.html = '' +
			'<div class="notification notificationJS">' +
				'<div class="notification__icon">' +
					'<img src="img/' + this.config.icon + '.svg" alt="icon">' +
				'</div>' +
				'<div class="notification__content">' +
					'<span class="notification__title notification__title_' + this.config.type + '">' + this.config.title + '</span>' +
					'<p class="notification__desc">' + this.config.desc + '</p>' +
				'</div>' +
				'<span class="notification__close notificationCloseJS"></span>' +
			'</div>';
}

extend(Notification, Parent);

Notification.prototype = {
	show: function () {
		Notification.superclass.show.apply(this);

		var notifications = this.parent.querySelectorAll('.notificationJS');

		// notifications[0].setAttribute('data-timer-id',this._timerHideNotification(this.duration));
	},

	hide: function () {
		this.elem = event.target.parentElement;

		clearTimeout(event.target.parentElement.dataset.timerId);

		Notification.superclass.hide.apply(this);
	},

	_timerHideNotification: function (duration) {
		return setTimeout(function () {
			var notifications = this.parent.querySelectorAll('.notificationJS');

			notifications[notifications.length - 1].remove();
		}.bind(this), duration);
	},

	_afterRender: function () {
		Notification.superclass._afterRender.apply(this);
	}
}
