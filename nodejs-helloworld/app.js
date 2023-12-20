var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World! - Exemplo do que ira mostrar na tela\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

