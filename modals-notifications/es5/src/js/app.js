var app = document.getElementById('app'),
	modalInfo,
	notification;

app.addEventListener('click', function (e) {
	var target = e.target;

	if (target.classList.contains('modalOpenJS')) {
		event.preventDefault();

		modalInfo = new Modal(modalConfig[Math.floor(Math.random() * modalConfig.length)]);

		modalInfo.show();
	}

	target.classList.contains('modalCloseJS') && modalInfo.hide(target);

	target.classList.contains('overlayJS') && modalInfo.hide();

	if (target.classList.contains('notificationOpenJS')) {
		var notificationType = notificationsConfig.find(function (item) {
			return item.type === target.dataset.type;
		});

		notification = new Notification(notificationType);

		notification.show();
	}

	target.classList.contains('notificationCloseJS') && notification.hide(target);
});
