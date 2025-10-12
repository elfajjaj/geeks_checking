import React, { Component } from "react";

class App extends Component {
  state = {
    data: "",
    post: "",
    response: "",
  };

  async componentDidMount() {
    const res = await fetch("http://localhost:5000/api/hello");
    const body = await res.json();
    this.setState({ data: body.message });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/world", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await res.json();
    this.setState({ response: body.message });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h3>{this.state.data}</h3>
        <form onSubmit={this.handleSubmit}>
          <h4>Post to Server:</h4>
          <input
            type="text"
            value={this.state.post}
            onChange={(e) => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;
