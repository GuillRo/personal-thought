module.exports = (sequelize, type) => {
  return sequelize.define('thought', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: type.STRING,
      content: type.STRING
  })
}