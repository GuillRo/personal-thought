const thought = (sequelize, DataTypes) => {

  // Schema
  const Thought = sequelize.define('thought', {
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    }
  })

  // Associations
  Thought.associate = models => { Thought.belongsTo(models.User) }

  // Static methods

}

export default thought