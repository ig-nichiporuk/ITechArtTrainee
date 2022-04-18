function Notification() {}

extend(Notification, Parent);

Notification.prototype = {
	show: function () {
		Notification.superclass.show.apply(this);

		var notifications = this.parent.querySelectorAll('.notificationJS');

		notifications[0].setAttribute('data-timer-id',this.timerHideNotification(this.duration));
	},

	hide: function (elem, timerID) {
		this.elem = elem;

		clearTimeout(timerID);

		Notification.superclass.hide.apply(this);
	},

	timerHideNotification: function (duration) {
		return setTimeout(function () {
			var notifications = this.parent.querySelectorAll('.notificationJS');

			notifications[notifications.length - 1].remove();
		}.bind(this), duration);
	},

	render: function (conf, duration) {
		this.html = '' +
			'<div class="notification notificationJS">' +
				'<div class="notification__icon">' +
					'<img src="img/' + conf.icon + '.svg" alt="icon">' +
				'</div>' +
				'<div class="notification__content">' +
					'<span class="notification__title notification__title_' + conf.type + '">' + conf.title + '</span>' +
					'<p class="notification__desc">' + conf.desc + '</p>' +
				'</div>' +
				'<span class="notification__close notificationCloseJS"></span>' +
			'</div>';

		this.afterRender(duration);
	},

	afterRender: function (duration) {
		this.parent = document.querySelector('.notificationsJS');

		this.duration = duration;

		this.show();

		document.body.addEventListener('click' , function (e) {
			var target = e.target;

			target.classList.contains('notificationCloseJS') && this.hide(target.parentElement, target.parentElement.dataset.timerId);

		}.bind(this));

	}
}
