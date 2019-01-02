var express = require('express');
var stripe = require('stripe')('sk_test_iXE0mtmgeEnJ5cFKjevvFcfc');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));

  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')

  app.listen(app.get('port'), function() { console.log('Node app is running on port', app.get('port'));
});
