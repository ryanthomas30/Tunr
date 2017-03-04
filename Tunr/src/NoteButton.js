import React, { Component } from 'react';
import Sound from 'react-sound';
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
				<button className="Button" onClick={changeNote.bind(null, note)}>
					{noteTitle}
					<div className={buttonLight(note)}/>
				</button>
		)
	}
}

export default NoteButton;
