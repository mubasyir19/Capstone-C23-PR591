const { gunung, story } = require('../../db/models');

module.exports = {
  getAllStory: async (req, res, next) => {
    try {
      const Story = await story.findAll({
        where: {
          user: req.user.id,
        },
      });

      res.status(200).json({
        message: 'Success get All My Story',
        data: Story,
      });
    } catch (error) {
      next(error);
    }
  },
  getStoryById: async (req, res, next) => {
    try {
      const { id } = req.params;

      const Story = await story.findOne({ where: { id } });

      res.status(200).json({
        message: 'Success get this story',
        data: Story,
      });
    } catch (error) {
      next(error);
    }
  },
  addDataStory: async (req, res) => {
    try {
      const { caption, gunungId } = req.body;

      // console.log('File => ', req.file);
      const Story = await story.create({
        // user: req.user.id,
        caption,
        // photoUrl: `images/${req.file.filename}`,
        photoUrl,
        gunungId,
      });

      // const gunung = await Gunung.findByPk(gunungId);

      res.status(201).json({
        message: 'Berhasil menambahkan Story',
        data: Story,
        // lokasi: gunung.lokasi,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send('Terjadi kesalahan saat menyimpan file');
    }
  },
  getDataLocationGunung: async (req, res) => {
    try {
      const Gunung = await gunung.findAll({
        attributes: ['nama', 'lokasi'],
      });

      res.status(200).json({
        message: 'Success get Data Name and Location',
        data: Gunung,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Terjadi kesalahan pada server' });
    }
  },
};
