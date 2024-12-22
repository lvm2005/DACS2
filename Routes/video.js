const express = require('express');
const router = express.Router();
const videoController = require('../Controllers/video');
const auth = require('../middleware/authentication');
router.post('/video', auth, videoController.uploadVideo);
router.get('/allVideo', videoController.getAllVideo);
router.get('/getVideoById/:id', videoController.getVideoById);
router.get('/:userId/channel', videoController.getAllVideoByUserID);
router.put('/video/toggleLikeDislike/:id', auth, videoController.toggleLikeDislike);
router.delete('/deleteVideo/:id', auth, videoController.deleteVideo);
router.post('/editVideo/:id', auth, videoController.editVideo);
router.put('/incrementViews/:id', videoController.incrementViews);
router.get('/getLikedVideos/:userId', auth, videoController.getLikedVideos);
module.exports = router;