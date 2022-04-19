document.body.addEventListener('click', function(e) {
	var target = e.target;

	if(target.classList.contains('notificationOpenJS')) {
		switch (target.dataset.type) {
			case 'success':
				new Notification({type: 'success', title: 'Success', desc: 'Everything is fine', icon: 'success-icon'}, 5000).show();
				break;
			case 'warning':
				new Notification({type: 'warning', title: 'Warning', desc: 'You must be careful', icon: 'warning-icon'}, 5000).show();
				break;
			case 'error':
				new Notification({type: 'error', title: 'Error', desc: 'Something is wrong', icon: 'error-icon'}, 5000).show();
				break;
			case 'info':
				new Notification({type: 'info', title: 'Info', desc: 'Useful information for you', icon: 'info-icon'}, 5000).show();
				break;
		}
	};

	if(target.classList.contains('modalOpenJS')) {
		new Modal({type: 'info', title: 'Info', desc: 'Useful information for you', icon: 'info-icon'}).show();
	};
});
