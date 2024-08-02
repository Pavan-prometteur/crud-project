const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  photo: {
    type: String,
    default: 'default.jpg',
  },
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
