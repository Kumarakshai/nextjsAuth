import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://akshai2537:fugpQclR77H68biw@cluster0.ujskt8y.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 50000,
        socketTimeoutMS: 45000,
        serverSelectionTimeoutMS: 50000,
        autoIndex: false,
        family: 4,
      }
    );
    console.log("MongoDB Connected:" + conn.connection.host);
  } catch (error) {
    console.error("Error connecting to MONGODB:" + error.message);
    process.exit(1);
  }
};
export default connectToDB;
