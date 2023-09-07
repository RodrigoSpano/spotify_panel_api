const express = require('express')
const { authorize, profile, artistProfile } = require('./subroutes')

const router = express.Router()

router.use('/auth', authorize)
router.use('/profile', profile)
router.use('/artist', artistProfile)

module.exports = router