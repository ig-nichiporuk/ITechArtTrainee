class Component {
	constructor(conf) {
		this.title = conf.title;
		this.desc = conf.desc;
		this.icon = conf.icon;
	}

	show() {
		this.parent.insertAdjacentHTML('afterbegin', this.html);
	}

	hide(elem) {
		elem.parentElement.remove();
	}
}


export default Component;
