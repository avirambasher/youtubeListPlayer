import mongoose from 'mongoose';

const playListSchema = mongoose.Schema({
    url : String,
});

const PlayListStructure = mongoose.model('playListStructure', playListSchema);

export default PlayListStructure;