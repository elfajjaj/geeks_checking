// Exercise 1

import Car from "./Components/Car";

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div>
      <Car model={carinfo.model} />
    </div>
  );
}

export default App;

// Exercise 2

import Events from "./Components/Events";

function App() {
  return (
    <div>
      <Events />
    </div>
  );
}

export default App;

// Exercise 3

import Phone from "./Components/Phone";

function App() {
  return (
    <div>
      <Phone />
    </div>
  );
}
export default App;

// Exercise 4

import Color from "./Components/Color";

function App() {
  return (
    <div>
      <Color />
    </div>
  );
}
export default App;
