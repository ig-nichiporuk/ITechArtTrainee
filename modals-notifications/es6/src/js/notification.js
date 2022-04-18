import Parent from './parent';

import notificationTemplate from '../templates/notificationTamplate.hbs';

class Notification extends Parent {
	constructor(config, duration) {
		super(config);

		this.parent = document.querySelector('.notificationsJS');
		this.duration = duration;
		this.html = notificationTemplate(this.config);
	}

	show() {
		super.show();

		const notifications = this.parent.querySelectorAll('.notificationJS');

		notifications[0].setAttribute('data-timer-id',this.timerHideNotification(this.duration));
	};

	hide(elem, timerID) {
		this.elem = elem;

		clearTimeout(timerID);

		super.hide();
	};

	timerHideNotification(duration) {
		return setTimeout(() => {
			const notifications = this.parent.querySelectorAll('.notificationJS');

			notifications[notifications.length - 1].remove();
		}, duration);
	};

	afterRender() {
		document.body.addEventListener('click' , e => {
			const target = e.target;

			target.classList.contains('notificationCloseJS') && this.hide(target.parentElement, target.parentElement.dataset.timerId);

		});
	}
}

export default Notification;
