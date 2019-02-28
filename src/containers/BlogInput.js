import BlogInput from '../components/BlogInput'
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class BlogInputContainer extends Component {
    _submitToGithub(blog){
        //using gh-pages to submit
    }

    _submitToLocal(blogs){
        localStorage.setItem('blogs',blogs)
    }

    handleSubmit(blog) {
        if (!blog) return
        if (!blog.title) return alert('Please Input the title')
        if (!blog.content) return alert('Please Input the contetn')
        const { blogs } = this.props
        const newBlogs = [...blogs, blog.title]
        // this._submitToGithub(blog)
        this._submitToLocal(blogs)
    }

    render() {
        return ( 
        <BlogInput onSubmit = {this.handleSubmit.bind(this)}/>
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogInputContainer)