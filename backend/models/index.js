import Sequelize from 'sequelize'

const sequelize = new Sequelize(
  // Mandatory stuff to initialize sequelize instance (database name, database superuser's username, superuser's password)
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres'
  }
)

const models = {
  User: sequelize.import('./user'),
  Thought: sequelize.import('./thought')
}

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

export {Sequelize}
export default models