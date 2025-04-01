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

router.get('/', async (req, res) => {
    try {
        const tracks = await Track.find();
        res.status(200).json(tracks);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const track = await Track.findById(req.params.id);
        res.status(200).json(track);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const track = await Track.findById(req.params.id);

        const updatedTrack = await Track.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        )
        res.status(200).json(track);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message});
    }
});

module.exports = router;