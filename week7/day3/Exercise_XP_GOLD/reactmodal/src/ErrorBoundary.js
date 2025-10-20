import React from "react";
import Modal from "./Modal";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorInfo: errorInfo.componentStack,
    });
  }

  occurError = () => {
    this.setState({
      hasError: true,
      errorInfo: "Error: Something went wrong!",
    });
  };

  closeModal = () => {
    this.setState({ hasError: false, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Modal
          title="Error: Something went wrong!"
          details={this.state.errorInfo}
          onClose={this.closeModal}
        />
      );
    }

    return (
      <div>
        <button onClick={this.occurError}>Occur an error</button>
      </div>
    );
  }
}

export default ErrorBoundary;
