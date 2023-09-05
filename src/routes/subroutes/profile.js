const { Router } = require("express");
const { getProfileInformation, getTopArtists } = require("../../controllers/profileControllers");

const router = Router()

router.get('/', getProfileInformation)
router.get('/top/artists', getTopArtists)

module.exports = router
