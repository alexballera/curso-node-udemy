const { crearArchivo } = require('./multiplicar/multiplicar')

// let base = 'e';

// console.log(process.argv)

let argv = process.argv;
let param = argv[2]
let base = param.split('=')[1]


crearArchivo(base)
  .then(archivo => console.log(`Archivo creado: ${archivo}`))
  .catch(e => console.log(e))
