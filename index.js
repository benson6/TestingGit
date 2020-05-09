const express = require('express');
const app = express();
const PORT = 5555 || process.env.PORT;

app.get ('/', (req,res)=> res.send('Hello world x1000'))

app.listen(PORT, ()=>console.log(`example app listening on ${PORT}`))





