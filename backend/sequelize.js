// import Sequelize from 'sequelize'
const Sequelize = require('sequelize')
const UserModel = require('./models/user')
const ThoughtModel = require('./models/thought')

const sequelize = new Sequelize(
  // Mandatory stuff to initialize sequelize instance (database name, database superuser's username, superuser's password)
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres'
  }
)

const User = UserModel(sequelize, Sequelize)
const Thought = ThoughtModel(sequelize, Sequelize)
Thought.belongsTo(User)

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!')
  })


module.exports = { User, Thought }
