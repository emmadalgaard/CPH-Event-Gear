const MongoClient = require ("mongodb").MongoClient;

// Connection URL
/* mongodb:// er protokollen, vi bruger til at kommunikere med mongo severen
27017 fortælle hvillen port, vi skal forbinde til.
 */
const url = "mongodb://localhost:27017";
const dbName = "myproject";

const client = new MongoClient(url);

client.connect().then(() => {
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
});