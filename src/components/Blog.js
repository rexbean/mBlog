import React, {
    Component
} from 'react'
import ReactMarkdown from 'react-markdown'


export default class BlogComponent extends Component {
    render(){
        return(
            <div className ="blog">
                <h1>{this.props.title}</h1> 
                <ReactMarkdown source = {this.props.content}/>
            </div>          
        )
    }
}