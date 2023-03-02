const mysql =  require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'iie_cell'
});

// Connect

const connect = () =>{
db.connect((err) => {
    // console.log(process.env.password)
    if (err) {
       return  console.log('Error connecting to database ',err);
        // throw err;
    }
    console.log('Connected to database');

});
}

module.exports= {
    db,
    connect
}