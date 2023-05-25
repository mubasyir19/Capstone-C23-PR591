const { User, Gunung, Rating } = require('../../db/models');

module.exports = {
  userRating: async (req, res, next) => {
    try {
      const { gunungId, rating } = req.body;

      const rate = await Rating.create({
        rating,
        gunungId,
        user: req.user.id,
      });
      // console.log(req.user.id);

      res.status(201).json({
        message: 'Rating berhasil ditambahkan',
        data: rate,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Terjadi kesalahan pada server' });
    }
  },
};
