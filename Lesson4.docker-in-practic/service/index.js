import {adjectives} from "./adjectives";
import {nouns} from "./nouns";

const http = require('http')

const port = 3000

const requestHandler = (_request, response) => {
	const phrase = adjectives[Math.floor(Math.random() * adjectives.length)] + " "
		+ nouns[Math.floor(Math.random() * nouns.length)]
    response.end(phrase)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
	
    if (err) {
        return console.log('Что-то пошло не так', err)
	}
	
	console.log(`Сервер запущен на порту ${port}`)

})