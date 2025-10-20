import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="card my-5 p-4 text-center">
          <h3>error in this part</h3>
          <p>{this.state.error && this.state.error.toString()}</p>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.errorInfo?.componentStack}
          </details>
          <button
            className="btn btn-primary mt-3"
            onClick={() => window.location.reload()}
          >
            ⟳ page reload
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
