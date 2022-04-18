class Parent {
	constructor(config) {
		this.config = config;
	}
	show() {
		if(this.parent) {
			this.parent.insertAdjacentHTML('afterbegin', this.html);

			this.afterRender();
		}
	}

	hide() {
		return this.elem ? this.elem.remove() : '';
	}

	afterRender() {
		return;
	}
}

export default Parent;

