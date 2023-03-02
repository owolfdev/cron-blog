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
  title: "How to Create a Successful Business Plan",
  content:
    "In this post, we discuss the key elements of a successful business plan and provide tips for creating one that will impress investors and stakeholders.",
  author: "Emily",
  date: new Date("2023-03-02T20:30:00.000Z"),
  tags: ["business", "entrepreneurship", "startup"],
};

insertPost(post);
