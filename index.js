const express = require('express')
const app = express();
const port = 5000;

const { db, connect } = require('./utils/db')
// cors
const cors = require('cors');
app.use(cors());
// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect
connect();

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

app.listen(port || 5000, () => {
    console.log("Server listning on ", port)
})