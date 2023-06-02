const multerCloudStorage = require('multer-cloud-storage');
const multer = require('multer');

const cloudStorage = multerCloudStorage({
  cloudStorage: {
    // Konfigurasi penyimpanan awan Anda (misal: Google Cloud Storage)
    projectId: process.env.PROJECTID,
    keyFilename: '/path/to/service-account-key.json',
    bucket: process.env.BUCKET_NAME,
  },
  destination: 'adventour-storage/img-story',
  filename: (req, file, cb) => {
    // Callback untuk menentukan nama file yang akan disimpan
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const uploadSingle = multer({ storage: cloudStorage }).single('photoUrl');

const uploadMultiple = multer({ storage: cloudStorage }).single('photoUrl');

module.exports = { uploadSingle, uploadMultiple };
