import React from "react";
import axios from "axios";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { userId, title, body } = this.state;

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userId,
        title,
        body,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="userId"
            placeholder="User ID"
            value={userId}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="body"
            placeholder="Body"
            value={body}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
