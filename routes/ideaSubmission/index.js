const router = require('express').Router()
const { getALlResponses } = require('../../controllers/ideaSubmissionController')

router.use('/submit', (req, res) => {
    // res.send(req);
    console.log(req.body)
    res.send("<h1>neha</h1>")    
})

router.get('/responses', getALlResponses)
module.exports = router