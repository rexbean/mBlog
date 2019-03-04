import React, { Component} from 'react'
import PropTypes from 'prop-types';
import {InputGroup, FormControl} from 'react-bootstrap'

export default class Input extends Component {

    constructor(props){
        super(props)
        this.state = {
            title: this.props.title,
            content:''
        }
    }

    handleChange(event){
        this.setState({
            content:event.target.value
        })
    }

    handleBlur(event){
        if(this.props.onBlur){
            this.props.onBlur(event.target.value)
        }
    }
    render(){
        return (
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">{this.state.title}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    value = {this.state.content}
                    placeholder=""
                    aria-label=""
                    aria-describedby="basic-addon1"
                    onChange = {this.handleChange.bind(this)}
                    onBlur = {this.handleBlur.bind(this)}
                />
            </InputGroup>
        )
    }

}