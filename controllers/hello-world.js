const express = require('express');

const app = express();

const helloWorld = (req, res) => res.send({ message: 'Hello World!' });

module.exports = helloWorld;

// app.get('/', (req, res) => res.send({ message: 'Hello World!' }));
// const helloWorld = (req, res) => res.send({ message: 'Hello World!' });
