var	notificationConf = {
		'error': {type: 'error', title: 'Error', desc: 'Something is wrong', icon: 'error-icon'},
		'success': {type: 'success', title: 'Success', desc: 'Everything is fine', icon: 'success-icon'},
		'warning': {type: 'warning', title: 'Warning', desc: 'You must be careful', icon: 'warning-icon'},
		'info': {type: 'info', title: 'Info', desc: 'Useful information for you', icon: 'info-icon'},
	},

	modalConf = {type: 'info', title: 'Info', desc: 'Useful information for you', icon: 'info-icon'},

	notification = new Notification(),
	modal = new Modal();

notification.setActions(notificationConf, 5000);
modal.setActions(modalConf);
