const router = require('express').Router()
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const { db } = require('../../utils/db');

const age = 24 * 60 * 60 * 3;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.Secrete_key, {
    expiresIn: age,
  });
};
router.post('/login', (req, res) => {

    const {email,password}=req.body;
    try{
        let q="select * from users where email="+email+" and password="+password;
        let token;
        db.query(q,(err,result)=>{
            if(err)
            {
                console.log(err)
            }
            if(result.length==0){
                res.json({"Success":false});
            }
         token=createToken(password);
        // token=
        })
        res.cookie("jwt", token, { maxAge: age * 1000 ,httpOnly:false,samesite:false});
        res.json({ "Success": true });

    }catch(err)
    {
        res.json({"Success":false,"message":err});
    }



})
router.get('/signup', (req, res) => {

})
module.exports = router