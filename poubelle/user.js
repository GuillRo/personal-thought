module.exports = (sequelize, type) => {
  return sequelize.define('user', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: type.STRING
  })
}



















// const user = (sequelize, DataTypes) => {

//   // Schema
//   const User = sequelize.define('user', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     username: {
//       type: DataTypes.STRING,
//       unique: true
//     }
//   })

  // Associations
  // User.associate = models => { User.hasMany(models.Thought), { onDelete: 'CASCADE' } }

  // Static methods (class methods in ruby)
  // User.findByLogin = async login => {
  //   let user = await User.findOne({
  //     where: { username: login }
  //   })
  //   if (!user) {
  //     user = await User.findOne({
  //       where: { email: login }
  //     })
  //   }
  // }

  // return User
// }

// export default user
// module.exports = { user }