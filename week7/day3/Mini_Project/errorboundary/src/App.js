import React from "react";
import ColumnLeft from "./columns/ColumnLeft";
import ColumnRight from "./columns/ColumnRight";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="container-fluid">
      <h4 className="bg-dark text-white p-3">Error boundaries in React</h4>
      <div className="row">
        <div className="col-md-6 p-4 bg-light">
          <ColumnLeft />
        </div>
        <div className="col-md-6 p-4">
          {/* 👇 نحط ErrorBoundary هنا باش غير العمود اليميني يطيح */}
          <ErrorBoundary>
            <ColumnRight />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;
