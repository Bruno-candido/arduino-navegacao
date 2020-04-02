const express = require('express')
const routes = express.Router()

const serialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new serialPort('COM3', { baudRate: 9600})
const parser = port.pipe(new Readline({ delimiter: '\r\n'}))

parser.on('open', ()=>{
    console.log('Arduino ON')
})
let dadosArduino
parser.on('data', function(dados){
    console.log(dados)
    dadosArduino=dados
}) 

routes.get('/readdata', (req, res)=>{
  return res.send(dadosArduino)
})

routes.get('/writedata',(request, response)=>{
    const params = request.query
    port.write(params.data)
    console.log(params.data)
    return response.json({
        "Enviado": params
    }) 
})


module.exports = routes
