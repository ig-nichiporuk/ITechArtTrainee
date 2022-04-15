function Modal(conf) {
	Component.apply(this, arguments);

	this.parent = document.querySelector('.modalJs');
	this.html = '' +
		'<div class="modal__wrap">' +
			'<div class="modal__main">' +
				'<img class="modal__icon" src="img/' + this.icon + '.svg" alt="modal-icon">' +
				'<span class="modal__title">' + this.title + '</span>' +
				'<p class="modal__desc">' + this.desc + '</p>'  +
			'</div>' +
			'<span class="modal__close btn-style btn-style_gray modalCloseJS">Закрыть</span>' +
		'</div>';
}

Modal.prototype = Object.create(Component.prototype);

Modal.prototype.constructor = Modal;

Modal.prototype.show = function () {
	Component.prototype.show.apply(this, arguments);

	var winScrollTop = window.scrollY,
		winHeight = document.documentElement.clientHeight;

	this.parent.insertAdjacentHTML('beforebegin', '<div class="overlay overlayJS"></div>');

	var modalHeight = this.parent.clientHeight,
		modalTop = winScrollTop + (winHeight - modalHeight) / 2;

	document.body.classList.add('modal-open');

	this.parent.style.cssText = 'top :' + modalTop + 'px';
};

Modal.prototype.hide = function (elem) {
	elem ? Component.prototype.hide.apply(this, arguments) : this.parent.innerHTML = '';

	var overlay = document.body.getElementsByClassName('overlayJS')[0];

	overlay && overlay.remove();

	document.body.classList.remove('modal-open');
};


