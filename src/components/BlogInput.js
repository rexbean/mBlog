import React, { Component} from 'react'
import PropTypes from 'prop-types';
import {Button, Container, Col, Row, Dropdown, DropdownButton} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
require('../css/BlogInput.css');

export default class BlogInputComponent extends Component {
    static propTypes = {
        blogTitle: PropTypes.string,
        blogContent: PropTypes.string,
    }
    
    constructor(props){
        super(props)
        this.state = {
            title: '',
            content: ''
        }
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            this.props.onSubmit({
                title: this.state.title,
                content: this.state.content
            })
        }
    }

    handleContentChange (event) {
        this.setState({
          content: event.target.value
       })
    }

    onkeydown(event){
        if(event.keyCode === 9){
            event.preventDefault()
            event.target.value = event.target.value + "    "; // 跳几格由你自已决定
            event.target.focus()
        }

    }

    render() {
        return ( 
        <div className = 'BlogInput' >
            <div className = 'BlogInput'>
                <input className = 'BlogInput'type = "text" size = "70" />
            </div>
            <div className = 'BlogInput' >
            <Container >
                <Row >
                <Col></Col>
                <Col>Author
                    <input id = "AuthorInput" type = "text" size = "20" /> 
                </Col>
                <Col > Date 
                    <input id = "DateInput" type = "text" size = "20"/>
                </Col>
                <Col> Category
                    <DropdownButton id = "dropdown-basic-button" title = "Dropdown button" >
                        <Dropdown.Item href = "#/action-1" > Project</Dropdown.Item>  
                        <Dropdown.Item href = "#/action-2" > Note </Dropdown.Item>  
                        <Dropdown.Item href = "#/action-3" > Add New </Dropdown.Item>  
                    </DropdownButton>
                </Col> 
                <Col></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <textarea
                        ref={(textarea) => this.textarea = textarea}
                        value = {this.state.content} 

                        onKeyDown = {this.onkeydown}
                        onChange={this.handleContentChange.bind(this)} 
                        rows= "10" cols= "50" 
                        />
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={3}></Col>
                    <Col md={3}>
                        <Button variant = "primary" className = "button" onClick = {this.handleSubmit.bind(this)}> Save </Button>
                    </Col>
                    <Col md={3}>
                        <Button variant = "danger" className = "button" > Cancel </Button>
                    </Col>
                    <Col md={3}></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <ReactMarkdown className = 'result' source = {this.state.content}
                            
                        />
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
            </div>
        </div>
        )
    }
}