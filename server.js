const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbname = 'test';
const url = "mongodb+srv://bangs:pass@test.wsqcy.mongodb.net/test?retryWrites=true&w=majority";
// const url = "mongodb://bangs:redonly3@ds029901.mlab.com:29901/heroku_8q8sfxbw";
const MongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const state = {
    db: null
};

// connect to mongo db
const cnct = (cb) => {
    if (state.db)
        cb();
    else {
        MongoClient.connect(url, MongoOptions, (err, client) => {
            if (err) cb(err);
            else {
                state.db = client.db(dbname);
                cb();
            }
        });
    }
}

const getPrimaryKey = (_id) => {
    return ObjectID(_id);
};

const getDB = () => {
    console.log(state.db);
    return state.db;
}

const Dark = () => {
    console.log('exports works');
 }

module.exports = {getDB, cnct, getPrimaryKey};