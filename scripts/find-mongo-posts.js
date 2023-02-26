const { MongoClient } = require("mongodb");
require("dotenv").config();

// Replace the connection string and database name with your own values
const uri = process.env.MONGODB_URI;

console.log(uri);

const client = new MongoClient(uri);

async function findPosts() {
  try {
    await client.connect();
    const database = client.db("blog_test");
    const collection = database.collection("posts");
    const now = new Date();
    const result = await collection.find({ date: { $lte: now } }).toArray();
    const posts = result.map((post) => {
      return {
        ...post,
        _id: post._id.toString(),
        date: post.date.toISOString(),
      };
    });
    return posts;
  } finally {
    await client.close();
  }
}

module.exports = findPosts;
