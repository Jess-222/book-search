const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://jessmjerez:<password>@cluster0.aaxg42c.mongodb.net/');

module.exports = mongoose.connection;
