const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const BlogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    subject: {type: String, required: true},
    article: {type: String, required: true}
});

module.exports = mongoose.model('blog', BlogSchema);
