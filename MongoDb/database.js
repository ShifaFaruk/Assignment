const {MongoClient} = require('mongodb')
const uri = 'mongodb://localhost:27017'

const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        // Create or select a database
        const database = client.db("myDatabase"); // Replace "myDatabase" with your database name

        // Create or select a collection
        const collection = database.collection("users");

        // Insert sample data
        const result = await collection.insertOne({ name: "John Doe", age: 25 });
        console.log("Inserted document:", result.insertedId);

        // Close the connection
        await client.close();
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

// Run the function
connectDB();