const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
            .command('crear', 'Crea una tarea', {descripcion})
            .command('listar', 'Lista una tarea', {
                descripcion: {
                    alias: 'd'
                }
            })
            .command('actualizar', 'Actualiza una tarea', {
                descripcion,
                completado
            })
            .command('borrar', 'Elimina una tarea', {descripcion})
            .help()
            .argv;



module.exports = { argv }