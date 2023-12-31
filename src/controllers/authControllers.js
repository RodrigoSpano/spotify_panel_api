const axios = require("axios");

const authorization_redirect = async (req, res) => {
  try {
    const scope = 'user-read-private user-read-email user-top-read';
    res.redirect(`https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_ID}&client_secret=${process.env.SPOTIFY_SECRET}&response_type=code&redirect_uri=${process.env.SPOTIFY_CB}&scope=${scope}&state=njasd7jsd9sda`)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const auth_callback = async (req, res) => {
  const { code } = req.query
  const { data } = await axios.post('https://accounts.spotify.com/api/token', { grant_type: 'authorization_code', code, redirect_uri: process.env.SPOTIFY_CB, client_id: process.env.SPOTIFY_ID, client_secret: process.env.SPOTIFY_SECRET },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  ) //? retorna user access token y refresh token
  return res.status(200).redirect(`${process.env.CLIENT_URI}/auth?token=${data.access_token}`)

}

const get_user_token = async (req, res) => { //! no esta en uso pero sirve para uso personal
  try {
    const { code } = req.query
    const { data } = await axios.post('https://accounts.spotify.com/api/token', { grant_type: 'authorization_code', code, redirect_uri: process.env.SPOTIFY_CB, client_id: process.env.SPOTIFY_ID, client_secret: process.env.SPOTIFY_SECRET },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = { authorization_redirect, auth_callback, get_user_token }