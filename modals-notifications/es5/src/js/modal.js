function Modal(config) {
	Parent.prototype.constructor.apply(this, arguments);

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
		'</div>'
}

extend (Modal, Parent);

Modal.prototype = {
	show: function () {
		var parentWarp = document.querySelector('.modalJs');

		if(parentWarp) {
			this.parent = parentWarp;

		} else {
			this.parent.setAttribute('class', 'modal-container modalJs');

			document.body.insertAdjacentElement('beforeend', this.parent);
		}
		Modal.superclass.show.apply(this);

		document.body.classList.add('modal-open');
	},

	hide: function () {
		var overlay = document.body.getElementsByClassName('overlayJS')[0];

		this.elem = document.querySelector('.modalWrapJS');

		Modal.superclass.hide.apply(this);

		overlay.remove();

		document.body.classList.remove('modal-open');
	},

	afterRender: function () {
		document.body.onclick = function () {
			if (event.target.classList.contains('overlayJS') || event.target.classList.contains('modalCloseJS')) {
				this.hide();
			}
		}.bind(this);
	}
};




