const express = require('express');
const multer = require('multer');
const MulterGoogleCloudStorage = require('multer-google-storage');
const key = require('./service-account-key/capstone-project-387109-5e2aadb14f5e.json');

const app = express();

const uploadHandler = multer({
    storage: MulterGoogleCloudStorage.storageEngine({
        autoRetry: true,
        bucket: 'adventour-storage',
        projectId: 'capstone-project',
        keyFilename: `${key}`,
        filename: (req, file, cb) => {
            cb(null, `adventour-storage/img-story/${Date.now()}_${file.originalname}`);
        }
    })
})

// app.get('/upload', (req, res) => {
//     res.render('upload')
// })

// app.post('/upload', uploadHandler.single(), (req, res) => {
//     console.log(req.files);
//     res.json(req.files);
// });

// app.listen(3000, (err) => {
//     err? console.log('Server start failed') : console.log('server started')
// });

// const uploadSingle = multer({ storage: cloudStorage }).single('photoUrl');

// const uploadMultiple = multer({ storage: cloudStorage }).single('photoUrl');

// module.exports = { uploadSingle, uploadMultiple };
module.exports = uploadHandler;