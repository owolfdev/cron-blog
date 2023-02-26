import React from "react";

function Blog({ posts }: any) {
  return (
    <div>
      <div>
        {posts.map((post: any) => {
          return (
            <div key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>{post.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
