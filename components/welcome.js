import sleep from "es7-sleep";
import { firstWordName } from "../utils/helpers.js";

export const welcome = async (message, client) => {
    client.sendText(message.from, '_Olá, eu sou *Wilson*, caso você tenha interesse em me contratar, eu desenvolvi o *WILL* 🤖 meu assistente virtual para que através dele você possa me conhecer um pouco melhor e também para facilitar e agilizar o nosso primeiro contato._');
    await sleep(6000);
    client.sendText(message.from, '_Eu e ele somos praticamente um só. Conversando com ele é como se você estivesse conversando comigo. Então, sinta-se a vontade para conversar com ele. 😊_');
    await sleep(5000);
    client.sendText(message.from, 'Oi ' + firstWordName(message.notifyName) + ', sou *WILL* 🤖, assistente virtual do Wilson e estou aqui para te ajudar!');
    await sleep(2000);
}