const express = require('express');
const imageController = require('./../controllers/imageController');

const router = express.Router();

router.post(
  '/userImage',
  imageController.uploadUserPhoto,
  imageController.uploadImage
);

module.exports = router;
