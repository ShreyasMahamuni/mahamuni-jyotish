"use strict";

const { v4: uuidv4 } = require("uuid");
module.exports = {
  async up(queryInterface, Sequelize) {
    const rashis = [
      {
        rashi_name_english: "Aries",
        rashi_name_marathi: "मेष",
        rashi_name_sanskrit: "मेष:",
      },
      {
        rashi_name_english: "Taurus",
        rashi_name_marathi: "वृषभ",
        rashi_name_sanskrit: "वृषभ:",
      },
      {
        rashi_name_english: "Gemini",
        rashi_name_marathi: "मिथुन",
        rashi_name_sanskrit: "मिथुन:",
      },
      {
        rashi_name_english: "Cancer",
        rashi_name_marathi: "कर्क",
        rashi_name_sanskrit: "कर्क:",
      },
      {
        rashi_name_english: "Leo",
        rashi_name_marathi: "सिंह",
        rashi_name_sanskrit: "सिंह:",
      },
      {
        rashi_name_english: "Virgo",
        rashi_name_marathi: "कन्या",
        rashi_name_sanskrit: "कन्या:",
      },
      {
        rashi_name_english: "Libra",
        rashi_name_marathi: "तूळ",
        rashi_name_sanskrit: "तुला",
      },
      {
        rashi_name_english: "Scorpio",
        rashi_name_marathi: "वृश्चिक",
        rashi_name_sanskrit: "वृश्चिक:",
      },
      {
        rashi_name_english: "Sagittarius",
        rashi_name_marathi: "धनु",
        rashi_name_sanskrit: "धनुः",
      },
      {
        rashi_name_english: "Capricorn",
        rashi_name_marathi: "मकर",
        rashi_name_sanskrit: "मकर:",
      },
      {
        rashi_name_english: "Aquarius",
        rashi_name_marathi: "कुंभ",
        rashi_name_sanskrit: "कुंभ:",
      },
      {
        rashi_name_english: "Pisces",
        rashi_name_marathi: "मीन",
        rashi_name_sanskrit: "मीन:",
      },
    ];

    const timestamp = new Date();

    await queryInterface.bulkInsert(
      "rashis",
      rashis.map((rashi) => ({
        rashi_uuid: uuidv4(),
        rashi_name_english: rashi.rashi_name_english,
        rashi_name_marathi: rashi.rashi_name_marathi,
        rashi_name_sanskrit: rashi.rashi_name_sanskrit,
        createdAt: timestamp,
        updatedAt: timestamp,
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rashis", null, {});
  },
};
