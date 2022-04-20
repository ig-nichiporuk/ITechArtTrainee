document.body.addEventListener('click', function(e) {
	var target = e.target;

	if(target.classList.contains('notificationOpenJS')) {
		var notification = document.querySelector('.notification_' + target.dataset.type);

		if(!notification.classList.contains('show')) {
			switch (target.dataset.type) {
				case 'success':
					new Notification(notification, {type: 'success', title: 'Success', desc: 'Everything is fine', icon: 'success-icon'}, 5000).show();
					break;
				case 'warning':
					new Notification(notification, {type: 'warning', title: 'Warning', desc: 'You must be careful', icon: 'warning-icon'}, 5000).show();
					break;
				case 'error':
					new Notification(notification, {type: 'error', title: 'Error', desc: 'Something is wrong', icon: 'error-icon'}, 5000).show();
					break;
				case 'info':
					new Notification(notification, {type: 'info', title: 'Info', desc: 'Useful information for you', icon: 'info-icon'}, 5000).show();
					break;
			}
		}
	};

	if(target.classList.contains('modalOpenJS')) {
		var modal = document.querySelector('.modals');

		if(!modal.classList.contains('show')) {
			new Modal(modal,{type: 'info', title: 'Info', desc: 'Useful information for you', icon: 'info-icon'}).show();
		}
	};
});
