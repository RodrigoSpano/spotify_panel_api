const axios = require('axios')

const getArtistProfile = async (req, res) => {
  try {
    const { token } = req.query
    const { id } = req.params
    const { data } = await axios(`https://api.spotify.com/v1/artists/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.status(202).json(data)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = getArtistProfile