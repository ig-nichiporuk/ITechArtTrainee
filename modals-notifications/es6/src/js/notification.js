import Parent from './parent';

import notificationTemplate from '../templates/notificationTamplate.hbs';
import notificationWrapTemplate from '../templates/notificationWrapTemplate.hbs';

const body = document.body;

class Notification extends Parent {
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

	render(conf) {
		this.html = notificationTemplate(conf);

		this.show();
	};

	setActions(conf, duration) {
		body.insertAdjacentHTML('beforeend', notificationWrapTemplate());

		this.parent = document.querySelector('.notificationsJS');

		this.duration = duration;

		body.addEventListener('click' , e => {
			const target = e.target;

			target.classList.contains('notificationOpenJS') && this.render(target.dataset.type ? conf[target.dataset.type] : conf);

			target.classList.contains('notificationCloseJS') && this.hide(target.parentElement, target.parentElement.dataset.timerId);

		});
	};
}

export default Notification;
