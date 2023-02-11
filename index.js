const express = require('express')
const app = express();
const port = 5000;
const bodyParser=require("body-parser")

const { db, connect } = require('./utils/db')
app.use(bodyParser());

app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb",  extended: true, parameterLimit: 100000000 }));
// Connect
connect();

// tracker
app.use('*', (req, res, next) => {
    console.log("=>", req.method, req.url);
    next();
})



app.use('/api',require('./routes'))    

app.use('/',(req,res)=>{
    res.send("<h1>This is default</h1>");
})

app.listen(port || 5000, () => {
    console.log("Server listning on ", port)
})