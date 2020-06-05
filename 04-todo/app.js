const argv = require("./config/yargs").argv;

let comando = argv._[0]

switch (comando) {
    case 'crear':
        console.log('Crear tarea')
        break;
    case 'listar':
        console.log('Listar tareas')
        break;
    case 'actualizar':
        console.log('Actualizar tarea')
        break;
    default:
        console.log('Comando desconocido')
        break;
}