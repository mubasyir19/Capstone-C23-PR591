const multerCloudStorage = require('multer-cloud-storage');
const multer = require('multer');

const cloudStorage = multerCloudStorage({
  cloudStorage: {
    // Konfigurasi penyimpanan awan Anda (misal: Google Cloud Storage)
    projectId: 'capstone-project',
    keyFilename: './service-account-key/capstone-project-387109-5e2aadb14f5e.json',
    bucket: 'adventour-storage',
  },
  filename: (req, file, cb) => {
    // Callback untuk menentukan nama file yang akan disimpan
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const uploadSingle = multer({ storage: cloudStorage }).single('photoUrl');

const uploadMultiple = multer({ storage: cloudStorage }).single('photoUrl');

module.exports = { uploadSingle, uploadMultiple };
