const express = require('express');
const dbConnect = require('./database/index'); 
const {PORT} = require('./config/index')

const app = express();


app.get('/', (req, res)=> res.json({msg: 'Hey, I am doing some programming stuff'}));

app.listen(PORT, console.log(`Backend is running on port: ${PORT}`));