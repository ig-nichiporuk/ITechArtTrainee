var app = document.getElementById('app'),
	notificationWrap = document.querySelector('.notificationsJS'),
	modalWrap = document.querySelector('.modalJs'),

	errorConf = {type: 'error', title: 'Error', desc: 'Something is wrong', icon: 'error-icon'},
	successConf = {type: 'success', title: 'Success', desc: 'Everything is fine', icon: 'success-icon'},
	warningConf = {type: 'warning', title: 'Warning', desc: 'You must be careful', icon: 'warning-icon'},
	infoConf = {type: 'info', title: 'Info', desc: 'Useful information for you', icon: 'info-icon'},

	modalConf = {type: 'info', title: 'Info', desc: 'Useful information for you', icon: 'info-icon'},

	errorNotification = new Notification(errorConf, notificationWrap),
	successNotification = new Notification(successConf, notificationWrap),
	warningNotification = new Notification(warningConf, notificationWrap),
	infoNotification = new Notification(infoConf, notificationWrap),

	modal = new Modal(modalConf, modalWrap);


app.addEventListener('click', function (e) {
	if (e.target.classList.contains('modalOpenJS')) {
		event.preventDefault();

		modal.show();
	}

	if (e.target.classList.contains('notificationOpenJS')) {
		switch (e.target.dataset.type) {
			case 'success':
				successNotification.show();
				break;
			case 'warning':
				warningNotification.show();
				break;
			case 'error':
				errorNotification.show();
				break;
			case 'info':
				infoNotification.show();
				break;
		}
	}
});

Notification.prototype.setActions();
Modal.prototype.setActions();
