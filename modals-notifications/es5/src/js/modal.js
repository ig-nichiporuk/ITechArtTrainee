function Modal(parent,config) {
	Parent.prototype.constructor.apply(this, arguments);

	this.parent = parent;
	this.config = config;
	this.html = '' +
		'<div class="overlay overlayJS"></div>' +
		'<div class="modal modalWrapJS">' +
			'<div class="modal__wrap">' +
				'<div class="modal__main">' +
					'<img class="modal__icon" src="img/' + this.config.icon + '.svg" alt="modal-icon">' +
					'<span class="modal__title">' + this.config.title + '</span>' +
					'<p class="modal__desc">' + this.config.desc + '</p>'  +
				'</div>' +
			'<span class="modal__close btn-style btn-style_gray modalCloseJS">Закрыть</span>' +
			'</div>' +
		'</div>';

	this._render();
}

extend (Modal, Parent);
