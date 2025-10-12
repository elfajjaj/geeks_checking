import React from "react";
import posts from "./data.json"; 

function PostList() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Hi This is a Title</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ margin: "20px 0" }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
