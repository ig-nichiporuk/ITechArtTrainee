import Component from './component';

import modalTemplate from '../templates/modalTemplate.hbs';
import overlayTemplate from '../templates/overlayTemplate.hbs';

class Modal extends Component {
	constructor(conf) {
		super(conf);

		this.parent = document.querySelector('.modalJs');
		this.html = modalTemplate(conf);
	}

	show() {
		super.show();

		const winScrollTop = window.scrollY,
			winHeight = document.documentElement.clientHeight;

		this.parent.insertAdjacentHTML('beforebegin', overlayTemplate());

		let modalHeight = this.parent.clientHeight,
			modalTop = winScrollTop + (winHeight - modalHeight) / 2;

		document.body.classList.add('modal-open');

		this.parent.style.cssText = `top:${modalTop}px`;
	}

	hide(elem) {
		elem ? super.hide(elem) : this.parent.innerHTML = '';

		const overlay = document.body.getElementsByClassName('overlayJS')[0];

		overlay && overlay.remove();

		document.body.classList.remove('modal-open');

	}
}


export default Modal;
