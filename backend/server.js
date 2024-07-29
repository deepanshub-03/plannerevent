const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/eventplanner360', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());

// Import routes
const eventRoutes = require('./routes/events');

// Use routes
app.use('/events', eventRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});