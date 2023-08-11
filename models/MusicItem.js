import mongoose from 'mongoose';

const MusicItemSchema = new mongoose.Schema({
  text: { type: String, required: true },
  done: { type: Boolean, default: false },
});

export default mongoose.models.MusicItem || mongoose.model("MusicItem", MusicItemSchema);