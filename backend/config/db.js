import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://ZalmaiZazai:zazai123@cluster0.r7h2w.mongodb.net/food-del'
    )
    .then(() => {
      console.log('Database Connected');
    });
};
