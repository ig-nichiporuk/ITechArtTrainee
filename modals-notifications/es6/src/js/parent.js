class Parent {
	constructor(config) {
		this.config = config;
		this.parent = document.createElement('div');
		this.elem = document.createElement('div');
	}
	show() {
		if(this.parent) {
			this.parent.insertAdjacentHTML('afterbegin', this.html);

			this._afterRender();
		}
	}

	_hide() {
		return this.elem ? this.elem.remove() : '';
	}

	_afterRender() {
		return;
	}
}

export default Parent;

