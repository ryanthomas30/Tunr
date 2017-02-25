import React, { Component } from 'react';
import Sound from 'react-sound';
import './Button.css';

class Button extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<button className='Button' onClick={() => this.props.changeSound(this.props.newNote).bind(this)}>{this.props.noteTitle}</button>
		)
	}
}

export default Button;
