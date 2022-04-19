function Notification(config, duration) {
	Parent.prototype.constructor.apply(this, arguments);

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
		var parentWarp = document.querySelector('.notificationsJS');

		if(parentWarp) {
			this.parent = parentWarp;

		} else {
			this.parent.setAttribute('class', 'notifications notificationsJS');

			document.body.insertAdjacentElement('beforeend', this.parent);
		}

		Notification.superclass.show.apply(this);

		var notifications = this.parent.querySelectorAll('.notificationJS');

		notifications[0].setAttribute('data-timer-id',this._timerHideNotification(this.duration));
	},

	_hide: function () {
		this.elem = event.target.parentElement;

		clearTimeout(event.target.parentElement.dataset.timerId);

		Notification.superclass._hide.apply(this);
	},

	_timerHideNotification: function (duration) {
		return setTimeout(function () {
			var notifications = this.parent.querySelectorAll('.notificationJS');

			notifications[notifications.length - 1].remove();
		}.bind(this), duration);
	},

	_afterRender: function () {
		document.body.onclick = function () {
			event.target.classList.contains('notificationCloseJS') && this._hide();
		}.bind(this);
	}
}
