import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import {Container} from 'react-bootstrap'
import { connect } from 'react-redux';
import {initBlogs} from '../reducer/Blog'
require('../css/Blog.css');

class BlogComponent extends Component {

    _loadBlogs(){
        let blogs = localStorage.getItem('blogs')
        blogs = blogs ? JSON.parse(blogs) : []
        this.props.initBlogs(blogs)
    }



    componentWillMount(){
        const {blogs} = this.props
        if(blogs.length === 0){
            console.log("is empty")
            this._loadBlogs()
        } else {
            this.setState({
                blog: this.props.blogs[this.props.match.params.blogId]
            })
        }
    }

    componentWillReceiveProps(nextProp){
        this.setState({
            blog: nextProp.blogs[this.props.match.params.blogId]
        })
    }
    

    constructor(){
        super()
        this.state = {
            blog: {
                title :'',
                content :'',
                date:'',
                type :'',
                author:''
            }
        }
    }

    render(){
        return(
            <Container className ="blog">
                <h1>{this.state.blog.title}</h1> 
                <ReactMarkdown source = {this.state.blog.content}/>
            </Container>          
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
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogComponent)


