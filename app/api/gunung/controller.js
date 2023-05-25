const { Gunung } = require('../../db/models');
const { Op } = require('sequelize');

module.exports = {
  getAllGunung: async (req, res, next) => {
    try {
      const gunung = await Gunung.findAll();

      res.status(200).json({
        message: 'Success Data gunung',
        data: gunung,
      });
    } catch (error) {
      next(error);
    }
  },
  getGunungById: async (req, res, next) => {
    try {
      const { id } = req.params;

      const gunung = await Gunung.findOne({ where: { id } });

      res.status(200).json({
        message: 'Success get data',
        data: gunung,
      });
    } catch (error) {
      next(error);
    }
  },
  addDataGunung: async (req, res) => {
    try {
      const { daerah, nama, ketinggian, lokasi, trek, jalur, simaksi } = req.body;

      const gunung = await Gunung.create({ daerah, nama, ketinggian, lokasi, trek, jalur, simaksi });

      res.status(201).json({
        message: 'Berhasil tambah data Gunung',
        data: gunung,
      });
    } catch (error) {
      console.log(error);
    }
  },
  searchGunung: async (req, res) => {
    try {
      const { keyword = '', nama = '' } = req.query;
      //   console.log(keyword);

      let condition = {};

      // untuk mencari buku berdasarkan keyword
      if (nama !== '') {
        condition = { ...condition, nama: { [Op.like]: `%${nama}%` } };
      }

      // if (category !== '') {
      //   condition = { ...condition, category: category };
      // }

      const gunung = await Gunung.findAll({
        where: condition,
      });

      res.status(200).json({
        message: 'Succes get by keyword',
        data: gunung,
      });
    } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan pada server' });
    }
  },
};
