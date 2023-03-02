import React from "react";

function Blog({ posts }: any) {
  const formatDate = (date: any) => {
    const dateObj = new Date(date);
    const options = { timeZone: "Asia/Bangkok" };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);
    const formattedTime = dateObj.toLocaleTimeString("en-US", options);
    const formattedDateTime = `${formattedDate} ${formattedTime}`;
    return formattedDateTime;
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
