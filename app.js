const express = require('express');

const app = express();
const helloWorld = require('./controllers/hello-World.js');

app.get('/', helloWorld);
app.listen(3000, () => console.log('Example app Listening on port 3000'));