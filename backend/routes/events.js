const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.post('/create', (req, res) => {
  const newEvent = new Event(req.body);
  newEvent.save()
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;