const axios = require('axios')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).help().argv;


const encodedUrl = encodeURI(argv.direccion)

const instance = axios.create({
    baseURL: `https://crypto-asset-market-data-unified-apis-for-professionals.p.rapidapi.com/api/v1/exchanges/?name=${encodedUrl}`,
    headers: {
        'x-api-key': 'Vhcl75IoYr5JhVxiaYHArbQydrj0ax',
        'x-rapidapi-host': 'crypto-asset-market-data-unified-apis-for-professionals.p.rapidapi.com',
        'x-rapidapi-key': 'c4b2e2d5eamshbd290c7d69be791p11ebc7jsn67df034ec23c',
        'x-api-secret': 'BiXE5D7gpAW0Wr3iQoTKp8lwHcNwIyyuscYhIzdKYL6lm'
    }
  });

instance.get()
        .then(resp => {
            console.log(resp.data)
        })
        .catch(err => {
            console.log('Errorrrr!!!!', err)
        })