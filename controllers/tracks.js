const express = require('express');
const Track = require('../models/track.js');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const track = await Track.create(req.body);
        res.status(201).json(track);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;