const { Router } = require("express");
const { getArtistProfile } = require("../../controllers/artistProfileController");

const router = Router()

router.get('/:id', getArtistProfile)


module.exports = router
