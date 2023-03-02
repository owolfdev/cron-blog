const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabase = createClient(
  process.env.SUPABASE_URI,
  process.env.SUPABASE_ANON_KEY
);

async function insertPost(post) {
  try {
    console.log(post);
    let { data } = await supabase.from("posts").insert(post);
    console.log(data);
  } finally {
  }
}

// Example usage: insert a new post into the database
const post = {
  title: "How to Build Strong Relationships with Your Customers",
  content:
    "Building strong relationships with your customers is key to the success of any business. In this post, we share tips for connecting with your customers and creating a loyal following.",
  author: "Amy",
  date: new Date("2023-03-02T23:00:00.000Z"),
  tags: ["customer service", "customer relationships", "business strategy"],
};

insertPost(post);
