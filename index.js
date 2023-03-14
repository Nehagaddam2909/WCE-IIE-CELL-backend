const express = require('express')
const app = express();
const mongoose =  require('mongoose')
const port = 5000;

// const { db, connect } = require('./utils/db')
// cors
const cors = require('cors');
app.use(cors());
// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect
const dbURI = "mongodb+srv://iie_cell:wce_iie_cell@cluster0.n9wzgw7.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbURI).then(()=>{
    console.log("Database connected to :",dbURI);
    app.listen(port || 5000, () => {
        console.log("Server listning on ", port)
    })
})


// tracker
app.use('*', (req, res, next) => {
    console.log("=>", req.method, req.url);
    next();
})

// public
app.use(express.static('public'))


app.use('/api', require('./routes'))

app.use('/', (req, res) => {
    res.send("<h1>This is default</h1>");
})

