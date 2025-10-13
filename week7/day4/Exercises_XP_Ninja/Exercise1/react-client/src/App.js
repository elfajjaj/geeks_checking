import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  async componentDidMount() {
    const res = await fetch("/users");
    const data = await res.json();
    this.setState({ users: data });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>
          <b>Users</b>
        </h1>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
