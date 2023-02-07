const router = require('express').Router()
const { getALlResponses } = require('../../controllers/ideaSubmissionController')

router.post('/submit', (req, res) => {
    //   const {}  
})

router.get('/responses', getALlResponses)
module.exports = router