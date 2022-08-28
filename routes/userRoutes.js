const router = require('express').Router()
const User = require('../models/User')

// creating user
router.post('/signup', async (request, response) => {
  try {
    const { name, email, password, picture } = request.body
    const user = await User.create({ name, email, password, picture })
    response.status(201).json(user)
  } catch (e) {
    let msg
    if (e.code == 11000) {
      msg = 'User already exist'
    } else {
      msg = e.message
    }
    response.status(400).json(msg)
  }
})

// login user
router.post('/login', async (request, response) => {
  try {
    console.log('dd', request.body)
    const { email, password } = request.body
    const user = await User.findByCredentials(email, password)
    user.status = 'online'
    await user.save()
    response.status(200).json(user)
  } catch (error) {
    response.status(400).json(error.message)
  }
})

module.exports = router
