import React from "react";

function Blog({ posts }: any) {
  const formatDate = (date: any) => {
    const dateObj = new Date(date);
    const year = dateObj.getUTCFullYear();
    const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getUTCDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  return (
    <div>
      <div>
        {posts.map((post: any) => {
          return (
            <div className="p-3" key={post._id}>
              <h3 className="text-2xl font-bold">{post.title}</h3>
              <p>{post.content}</p>
              <p className="mt-1 text-sm text-gray-400">
                {formatDate(post.date)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
