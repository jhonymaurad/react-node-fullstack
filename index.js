const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const authRoutes = require('./routes/authRoutes');

const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
