import BlogInput from '../components/BlogInput'
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {initBlogs, addBlog} from '../reducer/Blog'


class BlogInputContainer extends Component {
    _submitToGithub(blog){
        //using gh-pages to submit
    }

    _submitToLocal(blogs){
        // localStorage.clear()
        localStorage.setItem('blogs',JSON.stringify(blogs))

    }

    handleSubmit(blog) {
        if (!blog) return
        if (!blog.title) return alert('Please Input the title')
        if (!blog.content) return alert('Please Input the contetn')
        console.log(blog.title +" " + blog.author + " "+ blog.content +" " +blog.date)
        const { blogs } = this.props
        const newBlogs = [...blogs, blog]
        // this._submitToGithub(blog)
        console.log("new blogs" + newBlogs)
        this._submitToLocal(newBlogs)
        this.props.addBlog(blog)

    }

    render() {
        return ( 
        <BlogInput onSubmit = {this.handleSubmit.bind(this)}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      blogs: state.blogs
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      initBlogs: (blogs) => {
        dispatch(initBlogs(blogs))
      },
      addBlog: (blog) => {
          console.log("blog"+blog)
          dispatch(addBlog(blog))
      }
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogInputContainer)