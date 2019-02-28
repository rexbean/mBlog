import React, {
    Component
} from 'react'
import ReactMarkdown from 'react-markdown'





export default class BlogListComponent extends Component {


    componentWillMount() {
        this._loadBlogs()
    }

    _loadBlogs(){
        const blogs = localStorage.getItem('blogs')
        this.props.initBlogs(blogs)
    }


    render(){
        return(
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
                            <Comment comment = {
                                comment
                            }
                            key = {
                                i
                            }
                            index = {
                                i
                            }
                            onDeleteComment = {
                                this.handleDeleteComment.bind(this)
                            }
                            />
                        )
                    }
                    <tr >
                        <td > 1 </td> 
                        <td > Mark </td> 
                        <td > Otto </td> 
                        <td > @mdo </td> 
                    </tr> 
                </tbody> 
            </Table>
        )
    }

}