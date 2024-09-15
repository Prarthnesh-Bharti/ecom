const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  let dburl = 'mongodb://0.0.0.0:27017';
  if(process.env.MONGODB_URL){
    dburl = process.env.MONGODB_URL ;
  }
    
  const client = await MongoClient.connect(dburl);
  database = client.db('online-shop');
}

function getDb() {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};
