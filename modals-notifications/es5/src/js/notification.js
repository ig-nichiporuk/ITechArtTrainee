function Notification(conf, parentBlock) {
	Parent.prototype.constructor.apply(this, arguments);

	this.type = conf.type;
	this.parent = parentBlock;
}

extend (Notification, Parent);

Notification.prototype = {
	show: function () {
		var timerID = setTimeout(function () {
			var notifications = this.parent.querySelectorAll('.notificationJS');

			notifications[notifications.length - 1].remove();
		}.bind(this), 5000);

		this.html = '' +
			'<div class="notification notificationJS" data-timer-id="' + timerID +'">' +
				'<div class="notification__icon">' +
					'<img src="img/' + this.icon + '.svg" alt="icon">' +
				'</div>' +
				'<div class="notification__content">' +
					'<span class="notification__title notification__title_' + this.type + '">' + this.title + '</span>' +
					'<p class="notification__desc">' + this.desc + '</p>' +
				'</div>' +
				'<span class="notification__close notificationCloseJS"></span>' +
			'</div>';

		Notification.superclass.show.apply(this);
	},

	hide: function (elem, timerID) {
		this.elem = elem;

		clearTimeout(timerID);

		Notification.superclass.hide.apply(this);
	},

	setActions: function () {
		var notificationWrap = document.querySelector('.notificationsJS');

		notificationWrap.addEventListener('click' , function (e) {
			var target = e.target;

			target.classList.contains('notificationCloseJS') && this.hide(target.parentElement, target.parentElement.dataset.timerId);

		}.bind(this));
	}
}
