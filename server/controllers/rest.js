import express from 'express';
import mongoose from 'mongoose';
import PlayListStructure from '../models/playListStructure.js';

const router = express.Router();

export const getPlayList = async (req, res) => {
    try{
        const playList = await PlayListStructure.find();
        res.status(200).json(playList);
    } catch(error){
        res.status(404).json({message: error});
    }
    
}

export const addUrl = async (req, res) => {
    const { url } = req.body;

    const newPlayList = new PlayListStructure({ url })

    try {
        await newPlayList.save();

        res.status(201).json(newPlayList );
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const deleteUrl = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PlayListStructure.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' });
}

export default router;