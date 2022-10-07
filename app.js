import wppconnect from "@wppconnect-team/wppconnect";

import { welcome } from './components/welcome.js';

wppconnect
	.create({
		session: 'wcastro-bot',
		autoClose: false,
		useChrome: false,
		puppeteerOptions: { args: ['--no-sandbox'] }
	})
	.then((client) => {
		console.log("Conexão Estabelecida!");
		start(client);
	})
	.catch((error) => console.log(error));

global.context = [];

const start = (client) => {
	client.onMessage(async (message) => {
		global.context[message.from] = "Inicial";

		if (global.context[message.from] == 'Inicial') {
			await welcome(message, client);
		}
	});
}