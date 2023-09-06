const { Router } = require("express");
const { getProfileInformation, getTopArtists, getTopTracks } = require("../../controllers/profileControllers");

const router = Router()

router.get('/', getProfileInformation)
router.get('/top/artists', getTopArtists)
router.get('/top/tracks', getTopTracks)

module.exports = router
