import React, { Component} from 'react'
import PropTypes from 'prop-types';
import {Button, Container, Col, Row} from 'react-bootstrap'
import Input from './Controls/Input'
import TextArea from './Controls/TextArea'
import DropDown from './Controls/DropDown'
import ReactMarkdown from 'react-markdown'
require('../css/BlogInput.css');

export default class BlogInput extends Component {
    static propTypes = {
        blogTitle: PropTypes.string,
        blogContent: PropTypes.string,
    }
    
    constructor(props){
        super(props)
        this.state = {
            title: '',
            author: '',
            date: '',
            content: '',
            type:'',
            options:[]
        }
    }

    componentWillMount () {
        // set date
        var d = new Date();
        this.setState({date : d.toUTCString()})
        // set dropdown options
        this.state.options = [{link:'',text :'project'}, 
        {link:'', text:'note'},
        {link:'', text:'add New...'}]
    }

    handleSubmit() {
        if(this.state.type === ''){
            this.state.type = this.state.options[0].text
        }
        if (this.props.onSubmit) {
            this.props.onSubmit({
                title: this.state.title,
                author: this.state.author,
                type: this.state.type,
                date: this.state.date,
                content: this.state.content
            })
        }
    }

    handleDropDownSelect(type){
        this.setState({
            // TODO judge whehter have this type or not
            type: type
        })
    }

    handleContentChange (contentValue) {
        this.setState({
          content: contentValue
       })
    }

    handleTitleBlur(title){
        this.setState({
            title: title
        })
    }
    handleAuthorBlur(author){
        this.setState({
            author: author
        })
    }

    render() {
        return ( 
        <div className = 'BlogInput' >
            <div className = 'BlogInput' >
            <Container >
                <Row className = "BlogInput">
                    <Col md={8}>
                        <Input title = 'Title'
                            onBlur = {this.handleTitleBlur.bind(this)}
                        />
                    </Col>
                </Row>
                <Row className = 'BlogInput'>
                    <Col md = {4}>
                        <Input title = 'Author'
                            onBlur = {this.handleAuthorBlur.bind(this)}
                            />
                    </Col>
                    <Col md = {4}>   
                        <DropDown options = {this.state.options}
                            onSelect ={this.handleDropDownSelect.bind(this)}
                        />
                    </Col> 
                </Row>
                <Row className = 'BlogInput'>
                    <Col md={8}>
                        <TextArea onChange = {this.handleContentChange.bind(this)}/>
                    </Col>
                </Row>
                <Row className = "BlogInput">
                    <Col md = {4}></Col>
                    <Col md = {4}>
                        <p id = "DateInput" type = "text">{this.state.date}</p>
                    </Col>
                </Row>
                <Row className = 'BlogInput'>
                    <Col md={1}></Col>
                    <Col md={3}>
                        <Button variant = "primary" className = "button" onClick = {this.handleSubmit.bind(this)}> Save </Button>
                    </Col>
                    <Col md={3}>
                        <Button variant = "danger" className = "button" > Cancel </Button>
                    </Col>
                </Row>
                <Row className = 'BlogInput'>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <ReactMarkdown className = 'result' source = {this.state.content}/>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
            </div>
        </div>
        )
    }
}