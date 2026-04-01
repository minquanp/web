'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: '123456', // This is a hashed password for 'password'
        firstName: 'Quan',
        lastName: 'Pham',
        address: 'HCM',
        gender: true,
        Typerole: 'ROLE',
        keyRole: 'R1',
        phoneNumber: '0123456789',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
