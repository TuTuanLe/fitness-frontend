import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected.');
    return;
  }
  const URI = process.env.MONGODB_URL;
  console.log(URI);
  mongoose.connect(
    URI,
    {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log('Connected to MongoDB!!!');
    },
  );
};

export default connectDB;
