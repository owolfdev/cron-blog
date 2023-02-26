const { MongoClient } = require("mongodb");
require("dotenv").config();

// Replace the connection string and database name with your own values
const uri = process.env.MONGODB_URI;

console.log(uri);

const client = new MongoClient(uri);

async function insertPost(post) {
  try {
    await client.connect();
    const database = client.db("blog_test");
    const collection = database.collection("posts");
    const result = await collection.insertOne(post);
    console.log(`Inserted post with _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

// Example usage: insert a new post into the database
const post = {
  title: "This blog post should publish at 7:50am",
  content: "Lorem ipsum dolor sit amet...",
  author: "John Doe",
  date: new Date("2023-02-26T00:50:00.000Z"),
  tags: ["blogging", "mongodb", "node.js"],
};

insertPost(post);
