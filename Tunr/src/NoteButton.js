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
		const { changeNote, note, noteTitle } = this.props;
		return(
				<button className="Button" onClick={changeNote.bind(null, note)}>
					{noteTitle}
				</button>
		)
	}
}

export default NoteButton;
