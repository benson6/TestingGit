const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get ('/', (req,res)=> res.send('Hello world x2000'))

app.get ('/sleep', (req, res)=> res.send('you have called the sleep route'))

app.listen(PORT, ()=>console.log(`example app listening on ${PORT}`))

console.log("testing git");






