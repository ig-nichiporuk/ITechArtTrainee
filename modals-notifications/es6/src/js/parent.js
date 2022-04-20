class Parent {
	constructor(config) {
		this.config = config;
		this.parent = document.createElement('div');
		this.elem = document.createElement('div');
	}
	show() {
		this.parent.classList.add('show');

		this._afterRender();
	}

	hide() {
		this.parent.classList.remove('show');
	}

	_render() {
		this.parent.innerHTML = this.html;
	}

	_afterRender() {
		document.body.onclick = () => {

			const validCloseClasses = ['notificationCloseJS', 'overlayJS', 'modalCloseJS'];

			if([...event.target.classList].some(className => validCloseClasses.includes(className))) {
				this.parent = event.target.closest('.show');

				this.hide();
			}
		};
	}
}

export default Parent;

