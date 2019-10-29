import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
// import TestMd from './assets/testing-md.md';


class TestingMd extends Component {
  constructor(props) {
    super();
    this.state = { markdown: ''};
  }

  componentWillMount(){
    fetch("https://lgxkevin-blog.s3.us-east-2.amazonaws.com/testing-md.md",{
      method: "GET",
      headers: {
        Accept: 'application/json'
      }})
    .then(res => {
      console.log('res',res);
      return res.text()
    })
    .then(text => {
      console.log('text, ', text);
      this.setState({ markdown: text });
    })
    .catch(err => {
      console.log('err', err);
    })
  }

  render(){
    return (
      <div className="container">
        <ReactMarkdown source={this.state.markdown} />
    </div>
    )
  }
  
}
export default TestingMd;
