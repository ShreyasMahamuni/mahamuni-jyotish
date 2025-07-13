const sequelize = require("../confitg/db");
const { DataTypes } = require("sequelize");

const rashis = sequelize.define(
  "rashis",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name_english: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_marathi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_hindi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_sanskrit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tablename: "rashis",
    timestamps: true,
    createAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = rashis;
