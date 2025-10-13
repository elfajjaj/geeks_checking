// // Exercise 1

// import React from "react";
// import ErrorBoundary from "./Components/ErrorBoundary";

// class BuggyCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//   }

//   handleClick = () => {
//     this.setState(({ counter }) => ({ counter: counter + 1 }));
//   };

//   render() {
//     if (this.state.counter === 5) {
//       throw new Error("I crashed!");
//     }
//     return <h2 onClick={this.handleClick}>Counter: {this.state.counter}</h2>;
//   }
// }


// function App() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h1>React Error Boundary Demo</h1>

//       {/* Simulation 1:*/}
//       <h3>Simulation 1: One ErrorBoundary for both</h3>
//       <ErrorBoundary>
//         <BuggyCounter />
//         <BuggyCounter />
//       </ErrorBoundary>

//       <hr />

//       {/* Simulation 2:*/}
//       <h3>Simulation 2: Each one has its own ErrorBoundary</h3>
//       <ErrorBoundary>
//         <BuggyCounter />
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <BuggyCounter />
//       </ErrorBoundary>

//       <hr />

//       {/* Simulation 3:*/}
//       <h3>Simulation 3: No ErrorBoundary (will crash the app)</h3>
//       <BuggyCounter />
//     </div>
//   );
// }

// export default App;

// // Exercise 2 : Lifecycle

// import React from "react";

// class Color extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favoriteColor: "red" };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favoriteColor: "yellow" });
//     }, 2000);
//   }

//   // Part I:
//   shouldComponentUpdate() {
//     return true; 
//   }

//   // Part III: 
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("in getSnapshotBeforeUpdate");
//     return null;
//   }

//   // Part II: 
//   componentDidUpdate() {
//     console.log("after update");
//   }

//   changeColor = () => {
//     this.setState({ favoriteColor: "blue" });
//   };

//   render() {
//     return (
//       <div style={{ textAlign: "center", marginTop: "30px" }}>
//         <h1>My Favorite Color is {this.state.favoriteColor}</h1>
//         <button onClick={this.changeColor}>Change to blue</button>
//       </div>
//     );
//   }
// }

// export default Color;


// Exercise 3 : Lifecycle #2

import React from "react";

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted!");
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    let myChild;
    if (this.state.show) {
      myChild = <Child />;
    }

    return (
      <div style={{ textAlign: "center" }}>
        {myChild}
        <button onClick={this.deleteChild}>Delete Header</button>
      </div>
    );
  }
}

export default Parent;
