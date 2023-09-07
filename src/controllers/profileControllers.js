const axios = require('axios')

const getProfileInformation = async (req, res) => {
  try {
    const { token } = req.query
    const { data } = await axios('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(data)
    return res.status(200).json(data)

  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getTopArtists = async (req, res) => {
  try {
    const { token } = req.query
    const { data } = await axios('https://api.spotify.com/v1/me/top/artists', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.status(200).json(data)

  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getTopTracks = async (req, res) => {
  try {
    const { token } = req.query
    const { data } = await axios('https://api.spotify.com/v1/me/top/tracks', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.status(200).json(data)

  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = { getProfileInformation, getTopArtists, getTopTracks }