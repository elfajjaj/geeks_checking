import React from "react";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false,
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState({ users: data, isLoaded: true });
  }

  render() {
    const { users, isLoaded } = this.state;

    if (!isLoaded) return <div>Loading...</div>;

    return (
      <div>
        <h1>List of users:</h1>
        {users.map((user) => (
          <div key={user.id} style={{ marginBottom: "20px" }}>
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>City:</strong> {user.address.city}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default UsersList;
