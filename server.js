const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.get('/', (req, res) => {res.json({message:'Hello Word in new server!!!'})});

app.listen(port, () => {console.log('Server runing on port', {port})});