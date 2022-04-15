import '../styles/style';

import Modal from './modal';
import Notification from './notification';
import {modalConfig, notificationsConfig} from "./config";


const app = document.getElementById('app');

let modalInfo, notification;

app.addEventListener('click', e => {
	const target = e.target;

	if (target.classList.contains('modalOpenJS')) {
		e.preventDefault();

		modalInfo = new Modal(modalConfig[Math.floor(Math.random() * modalConfig.length)]);

		modalInfo.show();
	}

	target.classList.contains('modalCloseJS') && modalInfo.hide(target);

	target.classList.contains('overlayJS') && modalInfo.hide();

	if (target.classList.contains('notificationOpenJS')) {
		const notificationType = notificationsConfig.find(item => item.type === target.dataset.type);

		notification = new Notification(notificationType);

		notification.show();
	}

	target.classList.contains('notificationCloseJS') && notification.hide(target)
});
