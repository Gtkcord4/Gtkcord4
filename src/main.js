const gi = require('node-gtk');
const GLib = gi.require('GLib', '2.0');
const Gtk = gi.require('Gtk', '4.0');

// Components
const Headerbar = require('./components/headerbar/headerbar');

const loop = GLib.MainLoop.new(null, false);
const app = new Gtk.Application('org.blueoompa.Gtkcord4', 0);
app.on('activate', onActivate);
const status = app.run([]);

console.log('Finished with status:', status)

function onActivate() {
	const window = new Gtk.ApplicationWindow(app);
	window.setTitle('Gtkcord4');
	window.setDefaultSize(700, 600);
	window.on('close-request', onQuit);

	const headerbar = new Headerbar(Gtk);
	window.setTitlebar(headerbar.widget);

	window.show();
	window.present();

	gi.startLoop();
	loop.run();
}

function onQuit() {
	loop.quit();
	app.quit();
	return false;
}