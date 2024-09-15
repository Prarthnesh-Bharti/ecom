const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const dburl = process.env.MONGODB_URL || 'mongodb://localhost:27017';
  try {
    const client = await MongoClient.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });
    database = client.db('online-shop');
    console.log('Connected to the database successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    throw new Error('Could not connect to database!');
  }
}

function getDb() {
  if (!database) {
    throw new Error('You must connect to the database first!');
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};
