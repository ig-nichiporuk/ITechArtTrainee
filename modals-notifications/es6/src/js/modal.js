import Component from './parent';

import modalTemplate from '../templates/modalTemplate.hbs';

class Modal extends Component {
	constructor(config) {
		super(config);

		this.parent = document.querySelector('.modalJs');
		this.html = modalTemplate(this.config);
	}

	show() {
		super.show();

		document.body.classList.add('modal-open');
	};

	hide(elem) {
		const overlay = document.body.getElementsByClassName('overlayJS')[0];

		this.elem = elem;

		super.hide();

		overlay && overlay.remove();

		document.body.classList.remove('modal-open');
	};

	afterRender() {
		document.body.addEventListener('click' , e => {
			const target = e.target;
			if (target.classList.contains('overlayJS') || target.classList.contains('modalCloseJS')) {

				const modal = document.querySelector('.modalWrapJS');

				this.hide(modal);
			}
		});
	}
}

export default Modal;
