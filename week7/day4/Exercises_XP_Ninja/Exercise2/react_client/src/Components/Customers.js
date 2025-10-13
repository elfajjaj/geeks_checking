import React from "react";

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { customers: [] };
  }

  async componentDidMount() {
    const res = await fetch("/api/customers");
    const data = await res.json();
    this.setState({ customers: data });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Customers</h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {this.state.customers.map((c) => (
            <li
              key={c.id}
              style={{ borderBottom: "1px dotted #ccc", margin: "10px" }}
            >
              {c.firstName} {c.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
