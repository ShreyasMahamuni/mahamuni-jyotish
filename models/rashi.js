"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rashi extends Model {
    static associate(models) {}
  }
  rashi.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      rashi_uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      rashi_name_sanskrit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rashi_name_english: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rashi_name_marathi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "rashis",
      tableName: "rashis",
    }
  );
  return rashi;
};
