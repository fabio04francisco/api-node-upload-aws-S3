const mongoose = require('mongoose');

class DataBase {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    })
      .then((data) => {
        console.log('Connected to MongoDB');
        // console.log(data.connections[0]._connectionString);
        return data;
      })
      .catch((err) => {
        console.log('teste', err);
        // throw new Error('database failed to connect');
      });
  }
}

module.exports = new DataBase();
