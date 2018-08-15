const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const user = require('./routes/user.route');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', user);
app.use('/kudos/:name', user);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App running on port ${port}`));