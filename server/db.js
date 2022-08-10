import mongoose from "mongoose";
import "dotenv";

function connect() {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      "mongodb+srv://asma:1191315700@cluster0.5jcwqwy.mongodb.net/?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    console.log("Could not connect database!");
  }
}

export default connect;
