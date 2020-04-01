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

//---------------------------------------------------------------------------------
routes.get('/a', (req, res)=>{
  return res.send(dadosArduino)
})

routes.get('/b',(request, response)=>{
    const params = request.query
    console.log(params)
    return response.json({
        data: "sensor",
        test: "quase lá"
    })
})


module.exports = routes
