import Component from './component';

import notificationTemplate from '../templates/notificationTamplate.hbs';

class Notification extends Component {
	constructor(conf) {
		super(conf);

		this.type = conf.type;
		this.parent = document.querySelector('.notificationsJS');
		this.html = notificationTemplate(conf);
	}

	show() {
		const newElement  = document.createElement('div'),
			notificationsWrap = document.querySelector('.notificationsJS');

		newElement.insertAdjacentHTML('afterbegin', this.html);

		notificationsWrap.insertAdjacentElement('afterbegin', newElement);

		setTimeout( () => newElement.remove(), 5000);
	}
}

export default Notification;
