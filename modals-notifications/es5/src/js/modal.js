function Modal(config) {
	Parent.prototype.constructor.apply(this, arguments);

	this.parent = document.querySelector('.modalJs');
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
		Modal.superclass.show.apply(this);

		document.body.classList.add('modal-open');
	},

	hide: function (elem) {
		var overlay = document.body.getElementsByClassName('overlayJS')[0];

		this.elem = elem;

		Modal.superclass.hide.apply(this);

		overlay && overlay.remove();

		document.body.classList.remove('modal-open');
	},

	afterRender: function () {
		document.body.addEventListener('click' , function (e) {
			var target = e.target;
			if (target.classList.contains('overlayJS') || target.classList.contains('modalCloseJS')) {

				var modal = document.querySelector('.modalWrapJS');

				this.hide(modal);
			}
		}.bind(this));
	}
};




