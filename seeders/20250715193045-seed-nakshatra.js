"use strict";

const { v4: uuidv4 } = require("uuid");
module.exports = {
  async up(queryInterface, Sequelize) {
    const nakshatras = [
      { sanskrit: "अश्विनी", english: "Ashwini", marathi: "अश्विनी" },
      { sanskrit: "भरणी", english: "Bharani", marathi: "भरणी" },
      { sanskrit: "कृत्तिका", english: "Krittika", marathi: "कृत्तिका" },
      { sanskrit: "रोहिणी", english: "Rohini", marathi: "रोहिणी" },
      { sanskrit: "मृगशिरा:", english: "Mrigashira", marathi: "मृगशिरा" },
      { sanskrit: "आर्द्रा", english: "Ardra", marathi: "आर्द्रा" },
      { sanskrit: "पुनर्वसु:", english: "Punarvasu", marathi: "पुनर्वसु" },
      { sanskrit: "पुष्य:", english: "Pushya", marathi: "पुष्य" },
      { sanskrit: "आश्लेषा", english: "Ashlesha", marathi: "आश्लेषा" },
      { sanskrit: "मघा", english: "Magha", marathi: "मघा" },
      {
        sanskrit: "पूर्वा फाल्गुनी",
        english: "Purva Phalguni",
        marathi: "पूर्वा फाल्गुनी",
      },
      {
        sanskrit: "उत्तर फाल्गुनी",
        english: "Uttara Phalguni",
        marathi: "उत्तर फाल्गुनी",
      },
      { sanskrit: "हस्त", english: "Hasta", marathi: "हस्त" },
      { sanskrit: "चित्रा", english: "Chitra", marathi: "चित्रा" },
      { sanskrit: "स्वाती", english: "Swati", marathi: "स्वाती" },
      { sanskrit: "विशाखा", english: "Vishakha", marathi: "विशाखा" },
      { sanskrit: "अनुराधा", english: "Anuradha", marathi: "अनुराधा" },
      { sanskrit: "ज्येष्ठा", english: "Jyeshtha", marathi: "ज्येष्ठा" },
      { sanskrit: "मूळ", english: "Mula", marathi: "मूळ" },
      {
        sanskrit: "पूर्वाषाढा",
        english: "Purva Ashadha",
        marathi: "पूर्वाषाढा",
      },
      {
        sanskrit: "उत्तराषाढा",
        english: "Uttara Ashadha",
        marathi: "उत्तराषाढा",
      },
      { sanskrit: "श्रवण", english: "Shravana", marathi: "श्रवण" },
      { sanskrit: "धनिष्ठा", english: "Dhanishta", marathi: "धनिष्ठा" },
      { sanskrit: "शतभिषा", english: "Shatabhisha", marathi: "शतभिषा" },
      {
        sanskrit: "पूर्वा भाद्रपदा",
        english: "Purva Bhadrapada",
        marathi: "पूर्वा भाद्रपदा",
      },
      {
        sanskrit: "उत्तर भाद्रपदा",
        english: "Uttara Bhadrapada",
        marathi: "उत्तर भाद्रपदा",
      },
      { sanskrit: "रेवती", english: "Revati", marathi: "रेवती" },
    ];

    const timestamp = new Date();
    await queryInterface.bulkInsert(
      "nakshatras",
      nakshatras.map((nakshatra) => ({
        nakshatra_uuid: uuidv4(),
        nakshatra_sanskrit: nakshatra.sanskrit,
        nakshatra_english: nakshatra.english,
        nakshatra_marathi: nakshatra.marathi,
        createdAt: timestamp,
        updatedAt: timestamp,
      }))
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("nakshatras", null, {});
  },
};
