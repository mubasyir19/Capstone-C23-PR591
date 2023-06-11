'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Gunungs',
      [
        {
          id: 101,
          daerah: 'Jawa barat',
          nama: 'Gunung Cermai',
          ketinggian: 3078,
          lokasi: 'Kuningan, Majalengka, dan Cirebon.',
          trek: 'Tanah Kering',
          jalur: 'Jalur Apuy, Linggarjati dan Jalur Palutungan',
          simaksi: 30000,
          level: 1,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/ciremai.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 102,
          daerah: 'Jawa barat',
          nama: 'Gunung Puntang',
          ketinggian: 2223,
          lokasi: 'Kab. Bandung',
          trek: 'Tanah kering',
          jalur: '-',
          simaksi: 40000,
          level: 1,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/puntang.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 103,
          daerah: 'Jawa barat',
          nama: 'Gunung Papandayan',
          ketinggian: 2666,
          lokasi: 'Kab. Garut.',
          trek: 'bebatuan',
          jalur: '-',
          simaksi: 60000,
          level: 1,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/papandayan.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 104,
          daerah: 'Jawa barat',
          nama: 'Gunung Gede Pangrango',
          ketinggian: 2958,
          lokasi: 'Bogor',
          trek: 'Tangga Buatan',
          jalur: 'Jalur Cibodas dan Jalur Putri',
          simaksi: 75000,
          level: 1,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/gede.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 105,
          daerah: 'Jawa barat',
          nama: 'Gunung Pangrango',
          ketinggian: 3019,
          lokasi: 'Cibodas',
          trek: 'Akar Pohon',
          jalur: 'Jalur Cibodas',
          simaksi: 75000,
          level: 2,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/pangrango.jfif',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 106,
          daerah: 'Jawa barat',
          nama: 'Gunung Cikuray',
          ketinggian: 2821,
          lokasi: 'Kabupaten Garut,',
          trek: 'bebatuan',
          jalur: 'jalur Bayongbong, Cikajang dan Jalur Pemancar.',
          simaksi: 60000,
          level: 1,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/cikuray.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 107,
          daerah: 'Jawa Tengah',
          nama: 'Gunung Prau',
          ketinggian: 2565,
          lokasi: 'wonosobo',
          trek: 'Akar Pohon',
          jalur: 'Patak Banteng \nDieng',
          simaksi: 30000,
          level: 1,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/prau.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 108,
          daerah: 'Jawa Tengah',
          nama: 'Gunung Merbabu',
          ketinggian: 3142,
          lokasi: 'kabupaten Magelang',
          trek: 'tanah basah',
          jalur: 'Selo,Suwanting dan wekas',
          simaksi: 30000,
          level: 2,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/merbabu.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 109,
          daerah: 'Jawa Tengah',
          nama: 'Gunung Sindoro',
          ketinggian: 3136,
          lokasi: 'kabupaten Wonosobo.',
          trek: 'bebatuan',
          jalur: 'Keledung dan Sikatok/Sigedang-Tambi',
          simaksi: 45000,
          level: 2,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/sindoro.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 110,
          daerah: 'Jawa Tengah',
          nama: 'Gunung Slamet',
          ketinggian: 3428,
          lokasi: 'Kabupaten Brebes,',
          trek: 'tanah basah',
          jalur: 'Baturaden\nBambangan\nKaliwades',
          simaksi: 45000,
          level: 2,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/slamet.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 111,
          daerah: 'Jawa Tengah',
          nama: 'Gunung Sumbing',
          ketinggian: 3371,
          lokasi: 'kabupaten Magelang,',
          trek: 'bebatuan',
          jalur: 'Bogowongso dan Garung',
          simaksi: 30000,
          level: 3,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/sumbing.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 112,
          daerah: 'Jawa Timur',
          nama: 'Gunung Arjuno',
          ketinggian: 3339,
          lokasi: 'Malang',
          trek: 'Tanah Basah',
          jalur: 'Jalur Lawang dan Jalur Tretes',
          simaksi: 30000,
          level: 3,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/arjuno.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 113,
          daerah: 'Jawa Timur',
          nama: 'Gunung Argupuro',
          ketinggian: 3088,
          lokasi: 'Kabupaten Situbondo dan  Kabupaten Probolinggo Jember',
          trek: 'Tanah Kering',
          jalur: 'Jalur Baderan dan Jalur Bermi',
          simaksi: 35000,
          level: 3,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/argopuro.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 114,
          daerah: 'Jawa Timur',
          nama: 'Gunung Lawu',
          ketinggian: 3265,
          lokasi: 'kabupaten Karanganyar dan kabupaten Magetan',
          trek: 'bebatuan',
          jalur: 'Cemoro Sewu, Cemoro Kandang, Candi Ceto',
          simaksi: 30000,
          level: 2,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/lawu.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 115,
          daerah: 'Jawa Timur',
          nama: 'Gunung Semeru',
          ketinggian: 3676,
          lokasi: 'Malang',
          trek: 'tanah kering',
          jalur: 'Ranu Pani',
          simaksi: 25000,
          level: 3,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/semeru.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 116,
          daerah: 'Jawa Timur',
          nama: 'Gunung Raung',
          ketinggian: 3344,
          lokasi: 'Banyuwangi, Jember dan Bondowoso',
          trek: 'bebatuan',
          jalur: 'Waringin dan Kalibaru',
          simaksi: 45000,
          level: 3,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/raung.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 117,
          daerah: 'Jawa Timur',
          nama: 'Gunung Panderman',
          ketinggian: 2045,
          lokasi: 'Malang',
          trek: 'Tanah kering',
          jalur: 'Toyomerto',
          simaksi: 25000,
          level: 2,
          imageUrl: 'https://storage.googleapis.com/adventour-storage/img-gunung/panderman.jfif',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
