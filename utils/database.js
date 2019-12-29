const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://member1:member1@learningnode-5mhoq.mongodb.net/test?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('connected mongoDB🙏');
      callback(client);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;
