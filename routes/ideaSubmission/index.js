const router = require('express').Router()
const multer = require("multer");
const path = require('path');

const { getALlResponses, insertIntoTable } = require('../../controllers/ideaSubmissionController')

// storage engine 

const storage = multer.diskStorage({
    destination: './public/upload/reports',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    storage: storage,
    // limits: {
    //     fileSize: 10
    // }
})
router.post('/submit', upload.single('report'), insertIntoTable)

router.get('/responses', getALlResponses)
module.exports = router