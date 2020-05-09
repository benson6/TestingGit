const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get ('/', (req,res)=> res.send('Hello world x1000'))

app.listen(PORT, ()=>console.log(`example app listening on ${PORT}`))





