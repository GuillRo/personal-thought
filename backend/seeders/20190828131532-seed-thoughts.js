'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const users = await queryInterface.sequelize.query(
      'SELECT id from public."Users";'
    )
    const users_ids = users [0]
    
    return await queryInterface.bulkInsert(
      'Thoughts',
      [
        {
          title: 'My secret love',
          content: 'I am secretly in love with Marie',
          UserId: users_ids[0].id,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          title: 'What I hate',
          content: 'I hate gingerheads',
          UserId: users_ids[0].id,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          title: 'My nemesis',
          content: 'I am so afraid of Snoopy',
          UserId: users_ids[0].id,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          title: 'What a jerk',
          content: 'Tom is such a jerk',
          UserId: users_ids[1].id,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          title: 'SOOO CUTE',
          content: 'Snoopy is so cute!!!',
          UserId: users_ids[1].id,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          title: 'People I love',
          content: 'I love Tom and Marie',
          UserId: users_ids[2].id,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          title: 'People I don\'t like',
          content: 'Well nobody I guess...',
          UserId: users_ids[2].id,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },

      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Thoughts', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
}
