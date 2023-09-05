const { Router } = require("express");
const { auth_callback, authorization_redirect, get_user_token } = require('../../controllers/authControllers')

const router = Router()

router.get('/', authorization_redirect)
router.get('/callback', auth_callback)
router.get('/user_token', get_user_token)

module.exports = router
