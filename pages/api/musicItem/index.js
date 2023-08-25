import MusicItem from "../../../models/MusicItem";
import dbConnect from "../../../lib/dbConnect";

export default async (req,res) => {
  const { method } = req;

  // Connect to database
  await dbConnect();

  // Create music item
  if (method === "POST") {
    try {
      const newMusicItem = await new MusicItem(req.body).save();
      res.status(201).json({ data: newMusicItem, message: "MusicItem added successfully" });          
    } catch (error) {
      res.status(500).json({ message: "Internal Servor Error" });
      console.log(error);
    }
  }

  // Get all music items
  if (method === "GET") {
    try {
      const musicItems = await MusicItem.find();
      res.status(200).json({ data: musicItems });          
    } catch (error) {
      res.status(500).json({ message: "Internal Servor Error" });
      console.log(error);
    }
  }
};