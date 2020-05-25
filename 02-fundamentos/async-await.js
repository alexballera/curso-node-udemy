/**
 * Async Await
 * 
 */

//  let getNombre = async() => {

//      return "Alexander"
//  }

 let getNombre = () => {
     
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve('Alexander')
        }, 3000)
    })
}

let saludo = async () => {

    let nombre = await getNombre();

    return `Hola ${nombre}`
}

//  getNombre().then(nombre => {
//      console.log(nombre)
//  }).catch(err => {
//      console.log('Error de ASYNC ', err)
//  })

 saludo().then(mensaje => {
    console.log(mensaje)
}).catch(err => {
    console.log('Error de ASYNC ', err)
})