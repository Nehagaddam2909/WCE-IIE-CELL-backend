const router = require('express').Router();
router.use('/auth', require('./auth'))
router.use('/idea', require('./ideaSubmission'))

module.exports = router