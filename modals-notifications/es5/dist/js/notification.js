function Notification(conf) {
	Component.apply(this, arguments);

	this.type = conf.type;
	this.parent = document.querySelector('.notificationsJS');
	this.html = '' +
			'<div class="notification__icon">' +
				'<img src="img/' + this.icon + '.svg" alt="icon">' +
			'</div>' +
			'<div class="notification__content">' +
				'<span class="notification__title notification__title_' + this.type + '">' + this.title + '</span>' +
				'<p class="notification__desc">' + this.desc + '</p>' +
			'</div>' +
			'<span class="notification__close notificationCloseJS"></span>';
}

Notification.prototype = Object.create(Component.prototype);

Notification.prototype.constructor = Notification;

Notification.prototype.show = function () {
	var newElement  = document.createElement('div'),
		notificationsWrap = document.querySelector('.notificationsJS');

	newElement.insertAdjacentHTML('afterbegin', this.html);

	notificationsWrap.insertAdjacentElement('afterbegin', newElement);

	setTimeout(function () {
		newElement.remove();
	}, 5000);
};
