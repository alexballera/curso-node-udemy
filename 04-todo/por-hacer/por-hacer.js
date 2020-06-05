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
    crear
}