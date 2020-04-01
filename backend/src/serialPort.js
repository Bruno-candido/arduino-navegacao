const serialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new serialPort('COM3', { baudRate: 9600})
const parser = port.pipe(new Readline({ delimiter: '\r\n'}))


parser.on('data', function(dados){
    console.log(dados)//leitura
    port.write('0')//escrita
})
