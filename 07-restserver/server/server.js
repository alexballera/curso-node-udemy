require('./config/config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const port = process.env.PORT

app.get('/usuario', function(req, res) {
  res.json('Get Usuario');
});

app.post('/usuario', function(req, res) {

  let body = req.body

  if (!body.nombre) {
    res.status(400).json({
      ok: false,
      msg: 'El nombre es requerido'
    })
  } else {
    res.json({
      ok: true,
      persona: body
    });
  }
});

app.put('/usuario/:id', function(req, res) {
  let id = req.params.id
  res.json({
    id
  });
});

app.delete('/usuario/:id', function(req, res) {
  let id = req.params.id
  res.json({
    id
  });
});

app.listen(port, () => console.log('Escuchando puerto', port))
