const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabase = createClient(
  process.env.SUPABASE_URI,
  process.env.SUPABASE_ANON_KEY
);

async function getPosts() {
  try {
    let { data } = await supabase
      .from("posts")
      .select()
      .lt("date", new Date().toISOString());
    return data;
  } finally {
  }
}

//getPosts().then((data) => console.log(data));

module.exports = getPosts;
