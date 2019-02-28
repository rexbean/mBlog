import React, { Component } from 'react';
import './App.css';
import './components/Blog'
import BlogInput from './components/BlogInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Blogs /> */}
        <BlogInput />
        {/* <BlogInput /> */}
      </div>
    );
  }
}

export default App;
