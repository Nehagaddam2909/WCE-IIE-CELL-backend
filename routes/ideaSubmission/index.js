const router = require('express').Router()
const express=require("express")
const { getALlResponses } = require('../../controllers/ideaSubmissionController')

router.post('/submit',express.raw({type: "*/*"}), (req, res) => {
    //   const {}  
    console.log(req.body)
    res.send("<h1>Hello to the world</h1>")
})

router.get('/responses', getALlResponses)
module.exports = router