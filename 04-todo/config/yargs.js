const argv = require('yargs')
            .command('crear', 'Crea una tarea', {
                descripcion: {
                    demand: true,
                    alias: 'd',
                    desc: 'Descripción de la tarea por hacer'
                }
            })
            .command('listar', 'Lista una tarea', {
                descripcion: {
                    demand: true,
                    alias: 'd'
                }
            })
            .command('actualizar', 'Actualiza una tarea', {
                descripcion: {
                    demand: true,
                    alias: 'd',
                    desc: 'Descripción de la tarea por hacer'
                },
                completado: {
                    alias: 'c',
                    default: true,
                    desc: 'Marca como completado o pendiente la tarea'
                }
            })
            .help()
            .argv;



module.exports = { argv }