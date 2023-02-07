const express = require('express')
const app = express();
const port = 5000;

const { db, connect } = require('./utils/db')

// Connect
connect();

// tracker
app.use('*', (req, res, next) => {
    console.log("=>", req.method, req.url);
    next();
})

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use('/api',require('./routes'))    
app.use('/',(req,res)=>{
    res.send("<h1>This is default</h1>");
})

app.listen(port || 5000, () => {
    console.log("Server listning on ", port)
})