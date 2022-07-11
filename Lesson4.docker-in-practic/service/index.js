const http = require('http')
const adjectives = require('./adjectives');
const nouns = require("./nouns");

const port = 3000

const requestHandler = (_request, response) => {
	const phrase = adjectives[Math.floor(Math.random() * adjectives.length)] + " "
		+ nouns[Math.floor(Math.random() * nouns.length)]
	response.setHeader("Access-Control-Allow-Origin", "*");
    response.end(phrase)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
	
    if (err) {
        return console.log('Что-то пошло не так', err)
	}
	
	console.log(`Сервер запущен на порту ${port}`)

})