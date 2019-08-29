'use strict'
module.exports = (sequelize, DataTypes) => {
  const Thought = sequelize.define('Thought', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    // userid: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'User',
    //     key: 'id',
    //   },
    //   onDelete: 'CASCADE',
    // }
  }, {})
  Thought.associate = function (models) {
    // associations can be defined here
    Thought.belongsTo(models.User, {
      foreignKey: "UserId"
    })
  }
  return Thought
}