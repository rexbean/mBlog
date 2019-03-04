import React, { Component} from 'react'
import PropTypes from 'prop-types';
import {Dropdown, DropdownButton} from 'react-bootstrap'

export default class DropDown extends Component {

    constructor(props){
        super(props)
        this.state = {
            title: '',
            options: this.props.options
        }
    }
    
    componentWillMount(){
        this.state.title = this.props.options[0].text
    }

    handleSelect(eventKey){
        if(this.props.onSelect){
            this.props.onSelect(eventKey)
        }

        this.setState({title: eventKey})
    }
    render(){
        return (
            <DropdownButton id = "dropdown-basic-button" title = {this.state.title}
            >
                {this.state.options.map((option, i) => 
                    <Dropdown.Item key = {i} href = {option.link} 
                                eventKey = {option.text}
                                onSelect = {this.handleSelect.bind(this)}
                    >{option.text}</Dropdown.Item> 
                )}  
            </DropdownButton>
        )
    }

}