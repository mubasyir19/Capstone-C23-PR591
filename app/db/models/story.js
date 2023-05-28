const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  Story.init(
    {
      nama: DataTypes.STRING,
      deskripsi: DataTypes.STRING,
      photoUrl: DataTypes.STRING,
      CreatedAt: DataTypes.DATE,
      lokasi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Story",
    }
  );
  return Story;
};