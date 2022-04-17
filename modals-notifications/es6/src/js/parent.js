class Parent {
	show() {
		this.parent.insertAdjacentHTML('afterbegin', this.html);
	}

	hide() {
		this.elem.remove();
	}
}

export default Parent;

