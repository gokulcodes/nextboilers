import mongoose, { connection } from "mongoose";
const connections = {};

async function connectDB() {
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log("DB Connected");
}

export default connectDB;
