import Component from './parent';

import modalWrapTemplate from '../templates/modalWrapTemplate.hbs';
import modalTemplate from '../templates/modalTemplate.hbs';

const body = document.body;

class Modal extends Component {
	show() {
		super.show();

		body.classList.add('modal-open');
	};

	hide(elem) {
		const overlay = body.getElementsByClassName('overlayJS')[0];

		this.elem = elem;

		super.hide();

		overlay.remove();

		body.classList.remove('modal-open');
	};

	render(conf) {
		this.html = modalTemplate(conf);

		this.show();
	};

	setActions(conf) {
		body.insertAdjacentHTML('beforeend', modalWrapTemplate());

		this.parent = document.querySelector('.modalJs');

		body.addEventListener('click' , e => {
			const target = e.target;

			target.classList.contains('modalOpenJS') && this.render(conf);

			if (target.classList.contains('overlayJS') || target.classList.contains('modalCloseJS')) {

				const modal = document.querySelector('.modalWrapJS');

				this.hide(modal);
			}
		});
	};
}

export default Modal;
