function Modal() {}

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

		overlay.remove();

		document.body.classList.remove('modal-open');
	},

	render: function (conf) {
		this.html = '' +
			'<div class="overlay overlayJS"></div>' +
			'<div class="modal modalWrapJS">' +
				'<div class="modal__wrap">' +
					'<div class="modal__main">' +
						'<img class="modal__icon" src="img/' + conf.icon + '.svg" alt="modal-icon">' +
						'<span class="modal__title">' + conf.title + '</span>' +
						'<p class="modal__desc">' + conf.desc + '</p>'  +
					'</div>' +
					'<span class="modal__close btn-style btn-style_gray modalCloseJS">Закрыть</span>' +
				'</div>' +
			'</div>';

		this.afterRender();
	},

	afterRender: function () {
		this.parent = document.querySelector('.modalJs');

		this.show();

		document.body.addEventListener('click' , function (e) {
			var target = e.target;
			if (target.classList.contains('overlayJS') || target.classList.contains('modalCloseJS')) {

				var modal = document.querySelector('.modalWrapJS');

				this.hide(modal);
			}
		}.bind(this));
	}
};




