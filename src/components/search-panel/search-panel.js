import React from "react";

import "./search-panel.css";

export default class SearchPanel extends React.Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    const label = e.target.value;
    this.setState({
      label: label,
    });
    this.props.stateSearch(label);
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control search-input"
          placeholder="type to search"
          value={this.state.label}
          onChange={this.onLabelChange}
        />
      </form>
    );
  }
}
