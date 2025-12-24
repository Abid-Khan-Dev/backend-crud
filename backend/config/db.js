import mongoose from "mongoose";

async function connectDataBase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/ssiText");
    console.log("Mongodb is connected");
  } catch (error) {
    console.log(error.message);
  }
}
export default connectDataBase;
