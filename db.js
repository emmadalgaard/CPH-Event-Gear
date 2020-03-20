const MongoClient = require ("mongodb").MongoClient;
// Connection URL
/* mongodb:// er protokollen, vi bruger til at kommunikere med mongo severen
27017 fortælle hvillen port, vi skal forbinde til.
 */
const url = "mongodb://localhost:27017";
const dbName = "myproject";
const client = new MongoClient(url);

// med mongodb er vi nødt til at kalde connect(), før vi kan få en instans af db klassen
function getDb() {
    return client.connect().then(() => {
        return client.db(dbName);
    });
}
// hver gang vi har brug for en db instans skal vi kalde funktionen getDb
module.exports = getDb;
