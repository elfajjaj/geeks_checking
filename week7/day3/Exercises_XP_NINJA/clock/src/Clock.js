import React from "react";
import "./App.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().toLocaleString("en", { month: "short" }),
      day: new Date().getDate(),
      weekDay: new Date().toLocaleString("en", { weekday: "long" }),
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const now = new Date();
      this.setState({
        year: now.getFullYear(),
        month: now.toLocaleString("en", { month: "short" }),
        day: now.getDate(),
        weekDay: now.toLocaleString("en", { weekday: "long" }),
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="clock-container">
        <div className="year">
          {this.state.year} <span>/Year</span>
        </div>
        <div className="month">{this.state.month}</div>

        <div className="center-text">
          <p>
            {this.state.month} {this.state.day} {this.state.weekDay}
          </p>
          <h2>
            {this.state.hour} hr {this.state.minute} min {this.state.second} sec
          </h2>
        </div>

        <div className="rotating-circle">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="tick"
              style={{ transform: `rotate(${i * 6}deg)` }}
            >
              <span>{i} sec</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Clock;
