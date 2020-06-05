const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    
    data = new Uint8Array(Buffer.from(data));

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err)
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = []
    }
}

const getListado = () => {
    cargarDB()
    for (const tarea of listadoPorHacer) {
        console.log('========Por Hacer======='.green)
        console.log(tarea.descripcion)
        console.log('Estado: ', tarea.completado)
        console.log('========================'.green)
    }
}

const actualizar = (descripcion, completado = true) => {
    
    cargarDB()
    
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB()
        return true
    } else {
        return false
    }

}

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };

    cargarDB()

    listadoPorHacer.push(porHacer);

    guardarDB()

    return porHacer;
}

module.exports = {
    crear,
    getListado,
    actualizar
}