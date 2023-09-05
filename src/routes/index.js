const express = require('express')
const { authorize, profile } = require('./subroutes')

const router = express.Router()

router.use('/auth', authorize)
router.use('/profile', profile)

module.exports = router