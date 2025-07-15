"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("nakshatras", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      nakshatra_uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      nakshatra_sanskrit: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nakshatra_english: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nakshatra_marathi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("nakshatras");
  },
};
