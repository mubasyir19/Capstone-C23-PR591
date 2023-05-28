const { Gunung } = require("../../db/models");

module.exports = {
  getAllStory: async (req, res, next) => {
    try {
      const story = await Story.findAll();

      res.status(200).json({
        message: "Success get All Story",
        data: story,
      });
    } catch (error) {
      next(error);
    }
  },
  getStoryById: async (req, res, next) => {
    try {
      const { id } = req.params;

      const story = await Story.findOne({ where: { id } });

      res.status(200).json({
        message: "Success get data",
        data: story,
      });
    } catch (error) {
      next(error);
    }
  },
  addDataStory: async (req, res) => {
    try {
      const { nama, deskripsi, photoUrl, CreatedAt, lokasi } = req.body;

      const story = await Story.create({ nama, deskripsi, photoUrl, CreatedAt, lokasi });

      res.status(201).json({
        message: 'Berhasil menambahkan Story',
        data: story,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getDataLocationGunung: async (req, res) => {
    try {
      const gunung = await Gunung.findAll({
        attributes: ['nama', 'lokasi'],
      });

      res.status(200).json({
        message: 'Success get Data Name and Location',
        data: gunung,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Terjadi kesalahan pada server' });
    }
  },
};
