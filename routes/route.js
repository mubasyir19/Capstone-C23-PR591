const express = require('express');
const router = express.Router();
const { signup, signin } = require('../app/api/auth/controller');
const { getAllGunung, searchGunung, getGunungById, addDataGunung } = require('../app/api/gunung/controller');
const { userFeedback, getAllFeedBasedOnGunung } = require('../app/api/user/controller');
const { auth } = require('../middleware/auth');
const { getAllStory, getStoryById, addDataStory } = require('../app/api/story/controller');
const { uploadFile } = require('../middleware/cloudStorage');
// const { uploadSingle } = require('../middleware/multer');

// User
router.post('/auth/signup', signup);
router.post('/auth/signin', signin);

// Gunung
router.get('/gunung', getAllGunung);
router.get('/gunung/:id', getGunungById);
router.get('/gunung/search', searchGunung);
router.post('/gunung/add', addDataGunung);

// Rating
router.post('/feedback', auth, userFeedback);
router.get('/feedback/:gunungId', getAllFeedBasedOnGunung);

// Story
router.get('/story', auth, getAllStory);
router.get('/story/:id', getStoryById);
router.post('/story/add', uploadFile, addDataStory);

module.exports = router;
