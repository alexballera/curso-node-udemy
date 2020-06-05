const argv = require('yargs')
            .command('crear', 'Crea una tarea', {
                description: {
                    demand: true,
                    alias: 'd',
                    description: 'Descripción de la tarea por hacer'
                }
            })
            .command('listar', 'Lista una tarea', {
                description: {
                    demand: true,
                    alias: 'd'
                }
            })
            .command('actualizar', 'Actualiza una tarea', {
                description: {
                    demand: true,
                    alias: 'd',
                    description: 'Descripción de la tarea por hacer'
                },
                completado: {
                    alias: 'c',
                    default: true,
                    description: 'Marca como completado o pendiente la tarea'
                }
            })
            .help()
            .argv;



module.exports = { argv }