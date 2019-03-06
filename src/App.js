import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import {Nav } from 'react-bootstrap'
import './App.css';
import './components/Blog'
import BlogInput from './containers/BlogInput'
import BlogList from './components/BlogList'
import Blog from './components/Blog'

import { Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="primary-header">
          <Nav >
            <Nav.Item>
              <Nav.Link href = "/mBlog">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href = "/mBlog/blogs">Blogs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href = "/mBlog/new">New Post</Nav.Link>
            </Nav.Item>
          </Nav>
            
        </header>
        <Route  exact path = {`/blogs`}  render={ (routerProps) => <BlogList routerProps={routerProps} />}/>
        <Route path = {`blogs/:blogId`} render={ (routerProps) => <Blog routerProps={routerProps} />}/>

        <Route path = {`/new`} render={ (routerProps) => <BlogInput routerProps={routerProps} />}/>

      </div>
    )} 
}

export default App;
