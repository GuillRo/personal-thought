const models = require('../models')

const getAllUsers = async (req, res) => {
  const users = await models.User.findAll({})
  res.send(users)
}

const getUser = async (req, res) => {
  const user = await models.User.findOne({
    where: { id: req.params.id },
  })
  res.send(user)
}

const login = async (req, res) => {
  const user = await models.User.findOne({
    where: { username: req.body.username }
  })
  if (user && user.password === req.body.password) {
    const token = 'abc'
    res.send({token, id: user.id})
  } else {
    res.send({token: 'nope', id: null})
  }
}

const getThoughtsFromUser = async (req,res) => {
  const thoughts = await models.Thought.findAll({
    // si on met juste include ca retourne tout l'objet User, y compris le password!!! c'est pas assez
    attributes: ['title', 'content'],
    include: [{
      model: models.User,
      attributes: [],
      nested: false,
      where: { id: req.params.id } //
    }]
  })
  res.send(thoughts)
}

// const createUser = (params) => {

// }

module.exports = { getAllUsers, getUser, login, getThoughtsFromUser }
