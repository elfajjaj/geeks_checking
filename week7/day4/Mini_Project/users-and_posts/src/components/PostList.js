import React from "react";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      this.setState({ posts: data });
    } catch (error) {
      this.setState({ errorMsg: "Error while fetching posts" });
    }
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>List of posts</h1>
        {posts.length ? (
          posts.map((post) => (
            <div key={post.id}>
              <p>{post.title}</p>
            </div>
          ))
        ) : (
          <p>{errorMsg || "Loading..."}</p>
        )}
      </div>
    );
  }
}

export default PostList;
