import Parent from './parent';

import notificationTemplate from '../templates/notificationTamplate.hbs';

class Notification extends Parent {
	constructor(config, duration) {
		super(config);

		this.duration = duration;
		this.html = notificationTemplate(this.config);
	}

	show() {
		const parentWarp = document.querySelector('.notificationsJS');

		if(parentWarp) {
			this.parent = parentWarp;

		} else {
			this.parent.setAttribute('class', 'notifications notificationsJS');

			document.body.insertAdjacentElement('beforeend', this.parent);
		}

		super.show();

		const notifications = this.parent.querySelectorAll('.notificationJS');

		notifications[0].setAttribute('data-timer-id',this._timerHideNotification(this.duration));
	};

	_hide() {
		this.elem = event.target.parentElement;

		clearTimeout(event.target.parentElement.dataset.timerId);

		super._hide();
	};

	_timerHideNotification(duration) {
		return setTimeout(() => {
			const notifications = this.parent.querySelectorAll('.notificationJS');

			notifications[notifications.length - 1].remove();
		}, duration);
	};

	_afterRender() {
		document.body.onclick = () => event.target.classList.contains('notificationCloseJS') && this._hide();
	}
}

export default Notification;
