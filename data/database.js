const { MongoClient } = require('mongodb');

let database;

async function connectToDatabase() {
  const dbUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017';
  const dbName = 'online-shop';  // Specify the database name here

  try {
    const client = await MongoClient.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    database = client.db(dbName); // Select the database
    console.log('Connected to the database successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    throw new Error('Could not connect to the database!');
  }
}

function getDb() {
  if (!database) {
    throw new Error('Database connection has not been established yet!');
  }
  return database;
}

module.exports = { connectToDatabase, getDb };
