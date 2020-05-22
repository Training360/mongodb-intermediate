const MongoClient = require('mongodb').MongoClient;

// Connection URL.
const url = 'mongodb://localhost:27017';

// Database Name.
const dbName = 'nisz';

// Use connect method to connect to the server.
MongoClient.connect(url, {useUnifiedTopology: true}, async (err, client) => {
    if (err) {
        throw err;
    }

    console.log("Connected successfully to the server.");

    // Use the db.
    const db = client.db(dbName);

    // Insert some documents.
    await insertMany(db, 'users', [
        { name: "Bob", email: "bob@gmail.com" },
        { name: "Jack", email: "jack@gmail.com" },
        { name: "Mary", email: "mary@gmail.com" },
    ]);

    client.close();
});

// Insert some documents.
const insertMany = (db, collectionName, data) => {
    return new Promise((resolve, reject) => {
        // Get the documents collection.
        const collection = db.collection(collectionName);

        // Insert some documents
        collection.insertMany(data, (err, result) => {
            if (err) {
                return reject(err);
            }

            console.log(
                `Inserted ${data.length} documents into the ${collectionName}.`
            );
            resolve(result);
        });
    });
}
