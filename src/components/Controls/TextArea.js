import React, { Component} from 'react'
import PropTypes from 'prop-types';
import {InputGroup, FormControl} from 'react-bootstrap'
export default class TextArea extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            content:''
        }
    }

    handleChange(event){
        this.state.content = event.target.value
        if(this.props.onChange){
            this.props.onChange(event.target.value)
        }
    }

    handleKeydown(event){
        if(event.keyCode === 9){
            event.preventDefault()
            event.target.value = event.target.value + "    ";
            event.target.focus()
        }
    }


    render(){
        return(
            <textarea
                // ref={(textarea) => this.textarea = textarea}
                value = {this.state.content} 
                data-gramm = 'false'
                onKeyDown = {this.handleKeydown}
                onChange={this.handleChange.bind(this)} 
            />
        )
    }
}
