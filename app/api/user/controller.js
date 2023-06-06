const { user, gunung, feedback } = require('../../db/models');

module.exports = {
  userFeedback: async (req, res, next) => {
    try {
      const { gunungId, rating, review } = req.body;

      const Rate = await feedback.create({
        rating,
        review,
        gunungId,
        user: req.user.id,
      });
      // console.log(req.user.id);

      res.status(201).json({
        message: 'Feedback berhasil ditambahkan',
        data: Rate,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Terjadi kesalahan pada server' });
    }
  },
};
