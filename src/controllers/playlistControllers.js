const axios = require('axios')

const getPlaylistTracks = async (req, res) => {
  try {
    const { id: playlist_id } = req.params
    const { token } = req.query
    const { data } = await axios(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, { headers: { Authorization: `Bearer ${token}` } })
    return res.status(202).json(data)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = { getPlaylistTracks }