import Component from './parent';

import modalTemplate from '../templates/modalTemplate.hbs';

class Modal extends Component {
	constructor(parent,config) {
		super(parent,config);

		this.parent = parent;
		this.config = config;
		this.html = modalTemplate(this.config);

		this._render();
	}
}

export default Modal;
