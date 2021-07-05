class Headerbar {
	Gtk;

	widget;
	leftHeader;
	rightSide;
	rightTextHeader;
	rightHeader;

	constructor(Gtk) {
		this.Gtk = Gtk;

		this.widget = new Gtk.Box();

		this.leftHeader = new Gtk.HeaderBar();
		this.widget.append(this.leftHeader);

		this.rightSide = new Gtk.Box({ hexpand: true });
		this.rightTextHeader = new Gtk.HeaderBar();
		this.rightHeader = new Gtk.HeaderBar({ hexpand: true });

		this.rightHeader.setTitleWidget(new Gtk.Box());

		this.rightTextHeader.setShowTitleButtons(false);
		if(process.env.SIDE == 'left'){
			this.rightHeader.setShowTitleButtons(false);
		}else{
			this.leftHeader.setShowTitleButtons(false);
		}

		this.rightSide.append(this.rightTextHeader)
		this.rightSide.append(this.rightHeader);
		
		this.widget.append(this.rightSide);

		this.setChannelTitle('');
	}

	/**
	 * @param {string} title
	 * @memberof Headerbar
	 */
	setGroupTitle(title) {
		leftHeader.setTitleWidget(new this.Gtk.Label({ label: title }));
	}

	/**
	 * @param {string} title
	 * @memberof Headerbar
	 */
	setChannelTitle(title) {
		this.rightTextHeader.setTitleWidget(new this.Gtk.Label({ label: title }));
	}
}

module.exports = Headerbar;