import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {Table, Container } from 'react-bootstrap'
import { connect } from 'react-redux';
import Blog from '../components/Blog'
import {initBlogs} from '../reducer/Blog'
import {withRouter} from 'react-router'

class BlogListComponent extends Component {

    
    componentWillMount() {
        this._loadBlogs()
    }

    _loadBlogs(){
        let blogs = localStorage.getItem('blogs')
        blogs = blogs ? JSON.parse(blogs) : []
        this.props.initBlogs(blogs)
    }

    constructor(){
        super()
        this.state = {
            redirect : false,
            dest : ''
        }
    }

    handleClick(i, event){

        console.log(i)
        this.setState({
            redirect: true,
            dest : "/blogs/"+i
        })
    }


    render(){
        const {blogs} = this.props
        if(this.state.redirect){
            return  <Redirect to = {this.state.dest}/>
        }
        return(
            <div>
                <Table striped bordered hover >
                    <thead >
                        <tr >
                            <th> # </th> 
                            <th> Blog Title </th> 
                            <th> Type</th>
                            <th> Post date</th>
                        </tr> 
                    </thead> 
                    <tbody >
                        {
                            this.props.blogs.map((blog, i) =>
                            <tr key = {i}
                                onClick = {this.handleClick.bind(this, i)}>
                                <td>{i}</td>
                                <td>{blog.title}</td>
                                <td>{blog.type}</td>
                                <td>{blog.date}</td>
                            </tr>)
                        }
                    </tbody> 
                </Table>

            </div>

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
)(BlogListComponent)