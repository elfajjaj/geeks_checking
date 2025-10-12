import React, { Component } from "react";
import { countries } from "./countries";
import "./AutoCompletedText.css";

class AutoCompletedText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: "",
    };
  }

  // لما المستخدم يكتب شي حرف
  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = countries.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  // لما المستخدم يضغط على اسم الدولة
  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }

  // كيعرض الاقتراحات
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => (
          <li key={item} onClick={() => this.suggestionSelected(item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { text, suggestions } = this.state;
    return (
      <div className="AutoCompletedText">
        <h2>Auto Completed</h2>
        <input
          value={text}
          onChange={this.onTextChanged}
          type="text"
          placeholder="Type a country..."
        />
        {this.renderSuggestions()}
        <div className="footer">Suggestions: {suggestions.length}</div>
      </div>
    );
  }
}

export default AutoCompletedText;
