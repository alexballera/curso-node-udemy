const http = require('http')

http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'application/json'})

    let salida = {
      nombre: 'Alexander',
      edad: 40,
      url: req.url
    }
  
    res.write(JSON.stringify(salida))

  // res.write('Hola Mundo')
  res.end()
})
.listen(8080)

console.log('Escuchando puerto 8080')