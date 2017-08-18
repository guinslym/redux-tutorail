import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Item from './item';

// This is a smart component (or container) that calls fetchItems()
// action creator once the component is loaded.
class App extends Component {
  state = { item: '' };

  componentWillMount() {
    this.props.fetchItems();
  }

  handleInputChange(event) {
    this.setState({ item: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.props.createItem(this.state.item, Math.floor(Math.random() * 20))
  }

  renderItems() {
    return _.map(this.props.items, (item, key) => {
      return <Item key={key} item={item} id={key} />
    });
  }

  render() {
    return (
      <div>
        <h4>Add Item</h4>
        <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Add Item"
              value={this.state.item}
              onChange={this.handleInputChange.bind(this)} />
            <button action="submit" className="btn btn-primary">Add</button>
          </div>
        </form>
        <ul className="list-group">
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.items };
}

/*
We’ve also used the connect function to link the application state in Redux to our React component.
This is achieved using the function mapStateToProps which takes in the Redux 
state tree object as an input parameter and maps a piece of it (items) to props of the React component.
*/
export default connect(mapStateToProps, actions)(App)
