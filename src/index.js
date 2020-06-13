const express = require('express');
const cors = require('cors');
const firebase = require('firebase');
const app = express();
// server config
const { port } = require('./config');
// fb init
const config = require('./firebase/firebase.json');
firebase.initializeApp(config);

// api dependecies use
app.use(cors());
app.use(express.json());

// root route
app.get('/api', (req, res) => res.json({
  log: 'api is on!'
}));

app.listen(port, () => console.log('running in port:', port));