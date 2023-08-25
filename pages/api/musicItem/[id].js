import MusicItem from "../../../models/MusicItem";
import dbConnect from "../../../lib/dbConnect";

export default async (req,res) => {
  const { method } = req;
  const { id } = req.query;

  // Connect to database
  await dbConnect();

  // Update music item by id
  if (method === "PUT") {
    try {
      const result = await MusicItem.findByIdAndUpdate(id, { $set: req.body }, { new: true });
      // {new: true} permet de renvoyer le nouvel MusicItem
      res.status(200).json({ data: result, message: "MusicItem Updated Successfully" })
    } catch (error) {
      res.status(500).json({ message: "Internal Servor Error" });
      console.log(error);
    }
  }

  // Delete music items by id
  if (method === "DELETE") {
    try {
      await MusicItem.findByIdAndDelete(id);
      res.status(200).json({ message: "MusicItem Deleted Successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal Servor Error" });
      console.log(error);
    }
  }
};