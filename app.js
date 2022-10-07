import wppconnect from "@wppconnect-team/wppconnect";

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