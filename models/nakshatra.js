"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class nakshatra extends Model {
    static associate(models) {}
  }
  nakshatra.init(
    {
      nakshatra_uuid: DataTypes.UUID,
      nakshatra_sanskrit: DataTypes.STRING,
      nakshatra_english: DataTypes.STRING,
      nakshatra_marathi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "nakshatra",
    }
  );
  return nakshatra;
};
