var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/nisz",{useNewUrlParser: true, useUnifiedTopology: true}, function (err, db) {
   
    if (err) throw err;
    console.log("Database created!");
    db.close();
});