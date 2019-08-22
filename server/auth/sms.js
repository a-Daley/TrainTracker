const router = require('express').Router()
module.exports = router

const {twilioSID, twilioToken, twilioNum } = require('../../secrets')

const client = require('twilio')(twilioSID, twilioToken)

router.post('/', (req, res, next) => {
   client.messages.create({
        from: twilioNum,
        to: req.body.number,
        body: req.body.message,
        }).then((message) => {
            res.send(message.id)
        }) 
})  


router.get('/', (req, res, next) => {
    res.send('hello')
})