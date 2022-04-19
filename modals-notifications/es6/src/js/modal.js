import Component from './parent';

import modalTemplate from '../templates/modalTemplate.hbs';

class Modal extends Component {
	constructor(config) {
		super(config);

		this.html = modalTemplate(this.config);
	}

	show() {
		const parentWarp = document.querySelector('.modalJs');

		if(parentWarp) {
			this.parent = parentWarp;

		} else {
			this.parent.setAttribute('class', 'modal-container modalJs');

			document.body.insertAdjacentElement('beforeend', this.parent);
		}

		super.show();

		document.body.classList.add('modal-open');
	};

	_hide() {
		const overlay = document.body.getElementsByClassName('overlayJS')[0];

		this.elem = document.querySelector('.modalWrapJS');

		super._hide();

		overlay.remove();

		document.body.classList.remove('modal-open');
	};

	_afterRender() {
		document.body.onclick = () => {
			if (event.target.classList.contains('overlayJS') || event.target.classList.contains('modalCloseJS')) {
				this._hide();
			}
		}
	};
}

export default Modal;
