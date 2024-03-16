import mongoose from 'mongoose';
import config from './config';

const run = async () => {
  await mongoose.connect(config.mongoose.db);
  const db = mongoose.connection;

  try {
    await db.dropCollection('');
    await db.dropCollection('');
    await db.dropCollection('');
    await db.dropCollection('');

  } catch (e) {
    console.log('Collections were not present, skipping drop');
  }


  await db.close();
};

run().catch(console.error);