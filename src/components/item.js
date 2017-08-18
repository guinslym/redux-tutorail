import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// This component displays an item and allows us to delete it. The connect()
// function takes the React component in its dumb state 
//

class Item extends Component {
  handleClick() {
    this.props.deleteItem(this.props.id);
  }

  render() {
    return (
      <li className="list-group-item">
        {this.props.item}
        <button
          onClick={this.handleClick.bind(this)}
          className="btn btn-danger right">
          Delete
        </button>
      </li>
    );
  }
}

export default connect(null, actions)(Item);
