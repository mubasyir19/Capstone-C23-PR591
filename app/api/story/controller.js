const { Gunung, Story } = require('../../db/models');

module.exports = {
  getAllStory: async (req, res, next) => {
    try {
      const story = await Story.findAll({
        where: {
          user: req.user.id,
        },
      });

      res.status(200).json({
        message: 'Success get All My Story',
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
        message: 'Success get this story',
        data: story,
      });
    } catch (error) {
      next(error);
    }
  },
  addDataStory: async (req, res) => {
    try {
      const { caption, gunungId } = req.body;

      const story = await Story.create({
        user: req.user.id,
        caption,
        photoUrl: `images/${req.file.filename}`,
        gunungId,
      });

      const gunung = await Gunung.findByPk(gunungId);

      res.status(201).json({
        message: 'Berhasil menambahkan Story',
        data: story,
        lokasi: gunung.lokasi,
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
