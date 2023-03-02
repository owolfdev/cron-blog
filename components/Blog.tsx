import React from "react";

function Blog({ posts }: any) {
  return (
    <div>
      <div>
        {posts.map((post: any) => {
          return (
            <div className="mb-2" key={post._id}>
              <h3 className="text-2xl font-bold">{post.title}</h3>
              <p>{post.content}</p>
              <p className="mt-1 text-sm text-gray-400">{post.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
