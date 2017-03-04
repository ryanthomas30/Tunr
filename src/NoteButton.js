import React, { Component } from 'react';
import PaperRipple from 'react-paper-ripple';
import './NoteButton.css';

class NoteButton extends Component {
	static propTypes = {
		note: React.PropTypes.string,
		noteTitle: React.PropTypes.string,
		changeNote: React.PropTypes.func
	}

	constructor(props) {
		super(props);
	}
	render() {
		const { changeNote, note, noteTitle, buttonLight  } = this.props;
		return(
				<PaperRipple color="#dde2e2" className="Button" onClick={changeNote.bind(null, note)}>
					{noteTitle}
					<div className={buttonLight(note)}/>
				</PaperRipple>
		)
	}
}

export default NoteButton;
