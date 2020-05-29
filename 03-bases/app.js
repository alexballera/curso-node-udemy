const argv = require('./config/yargs').argv

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = Object.keys(argv)[1]

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite)
    break
  
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(e => console.log(e))
    break
  default:
    console.log('Comando desconocido')
    break;
}
