const router = require('express').Router()
module.exports = router

router.use('/texts', require('./sms'))

router.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})