const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)  
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido "${base}" no es un número`)
            return
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n` 
        }

        data = new Uint8Array(Buffer.from(data));
        fs.writeFile(`tablas/tabla-${base}-hasta-${limite}.txt`, data, (err) => {
        if (err)
            reject(err);
        else
            resolve(`tabla-${base}-hasta-${limite}..txt`)
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}