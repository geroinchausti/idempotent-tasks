const { MongoClient } = require("mongodb");

const URI = "mongodb+srv://admin:admin@cluster0.psy8f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const DATABASE_NAME = "task";


class DataBaseClient {
  constructor() {
    this.db = null;
    this.client = null;
  }

  async connect(done) {
    if (this.db) return done();

    await MongoClient.connect(URI, (err, client) => {
      if (err) return done(err);
      this.db = client.db(DATABASE_NAME);
      this.client = client;
      done();
    });
  }
}

exports.DataBaseClient = new DataBaseClient();
