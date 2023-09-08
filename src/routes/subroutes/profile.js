const { Router } = require("express");
const { getProfileInformation, getTopArtists, getTopTracks, getUserPlaylists } = require("../../controllers/profileControllers");
const { getPlaylistTracks } = require("../../controllers/playlistControllers");

const router = Router()

router.get('/', getProfileInformation)
router.get('/top/artists', getTopArtists)
router.get('/top/tracks', getTopTracks)
router.get('/playlists', getUserPlaylists)
router.get('/playlist/:id', getPlaylistTracks)

module.exports = router
