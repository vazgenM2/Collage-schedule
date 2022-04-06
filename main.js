const express = require('express')
const path = require('path')
const fs = require('fs')
const XLSX = require('xlsx')

const app = express()
const PORT = process.env.PORT || 3000

let course = fs.readFileSync('./table.txt', 'utf-8')
let res = ''

let workbook = XLSX.readFile('./Dasacucak-04-04.xls')
let worksheet = workbook.Sheets[workbook.SheetNames[0]]
for (let i = 4; i < 54; i++) {
	const h1 = worksheet[`D${i}`]?.v

	res += `<p>${h1}</p>`
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'static', 'index.html'))
	// response.send(`<p>${res}</p>`)
})

app.listen(PORT, () => {
	console.log('Server started...')
})