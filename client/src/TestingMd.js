import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import TestMd from './assets/testing-md.md'


class TestingMd extends Component {
  constructor(props) {
    super();
    this.state = { markdown: ''};
  }

  componentWillMount(){
    fetch(TestMd)
    .then(res => {
      res.text()
    })
    .then(text => {
      this.setState({ markdown: text });
    })
  }

  render(){
    return (
    <div className="content">
      <ReactMarkdown source={this.state.markdown} />
    </div>
    )
  }
  
}
export default TestingMd;
