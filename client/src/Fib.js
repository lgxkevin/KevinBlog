import React, { Component } from 'react';
import axios from 'axios';
import TestingMd from './TestingMd';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: ''
  };
  ApiUrl = process.env.REACT_APP_API_URL;

  componentDidMount() {
    // this.fetchValues();
    this.fetchIndexes();
  }

  // async fetchValues() {
  //     const values = await axios.get('/api/values/current');
  //     this.setState({ values: values.data});
  // }

  async fetchIndexes() {
    // const seenIndexes = await axios.get('/api/values/all');
    const seenIndexes = await axios.get(this.ApiUrl+ 'values/all');
    console.log(seenIndexes);
    this.setState({ seenIndexes: seenIndexes.data })
  }

  handleSubmit = async (event) => {
    console.log('button clicked');
    event.preventDefault();

    // await axios.post('/api/values', {
    await axios.post(this.ApiUrl + 'values', {
      index: this.state.index
    });
    this.setState({ index: '' });
  }

  renderSeenIndexes() {
    return this.state.seenIndexes.map((item) => item.name).join(', ');
  }

  renderValues() {
    const entries = [];
    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      )
    }
    return entries;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter index: </label>
          <input
            value={this.state.index}
            onChange={event => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
        </form>

        <h3>Indexes I have seen:</h3>
        {this.renderSeenIndexes()}

        <h3>Calculated Values:</h3>
        {this.renderValues()}
        
        <TestingMd/>
      </div>
    )
  }
}
export default Fib;