import React from "react";
import "./App.css";

class Modal extends React.Component {
  render() {
    return (
      <div className="modal-background">
        <div className="modal-body">
          <h3>{this.props.title}</h3>
          <details>
            <summary>Details</summary>
            <p>{this.props.details}</p>
          </details>
          <p>Please try it again</p>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default Modal;
