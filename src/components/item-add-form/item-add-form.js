import React from "react";

import "./item-add-form.css";

export default class ItemAddForm extends React.Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
	e.preventDefault();
	this.props.onItemAdded(this.state.label);
	this.setState({
		label: ''
	  });
  };

  render() {
    return (
      <form className="form item-add-form d-flex" 
	  		onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
		  value={this.state.label}
        />
        <button
          className="btn btn-outline-secondary"
        >
          Add item
        </button>
      </form>
    );
  }
}
