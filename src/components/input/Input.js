import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  BoxSearch = (event) => {
    this.setState({ term: event.target.value });
  };

  Search = (event) => {
    event.preventDefault();
    const { callback } = this.props;
    callback(this.state.term);
  };

  render() {
    const { label } = this.props;

    return (
      <div>
        <form onSubmit={this.Search}>
          <label>{label}</label>
          <input
            type="text"
            className="input"
            value={this.state.term}
            onChange={this.BoxSearch}
          ></input>
          <input type="submit" className="button" value="🔍" />
        </form>
      </div>
    );
  }
}

export default Input;
