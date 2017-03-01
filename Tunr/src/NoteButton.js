import React, { Component } from 'react';
import Sound from 'react-sound';
import './NoteButton.css';

class NoteButton extends Component {
	static propTypes = {
		note: React.PropTypes.string,
		changeNote: React.PropTypes.func
	}

	constructor(props) {
		super(props);
	}
	render() {
		const { changeNote, note } = this.props;
		return(
			<button onClick={changeNote.bind(null, note)}>
				{note}
			</button>
		)
	}
}

export default NoteButton;
