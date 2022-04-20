import Parent from './parent';

import notificationTemplate from '../templates/notificationTamplate.hbs';

class Notification extends Parent {
	constructor(parent, config, duration) {
		super(parent, config);

		this.parent = parent;
		this.config = config;
		this.duration = duration;
		this.html = notificationTemplate(this.config);

		this._render();
		this.parent.setAttribute('data-timer-id',this._timerHideNotification(this.duration));
	}

	hide() {
		super.hide();

		clearTimeout(this.parent.dataset.timerId);
	};
	_timerHideNotification(duration) {
		return setTimeout(() => this.parent.classList.remove('show'), duration);
	};
}

export default Notification;
