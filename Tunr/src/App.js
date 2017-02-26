import React, { Component } from 'react';
import Sound from 'react-sound';
import NoteButton from './NoteButton.js';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			note : ''
		};
		this.changeNote = this.changeNote.bind(this);
	}

	changeNote(note) {
		this.setState({
			note: this.state.note === note ? '' : note
		});
	}

	render() {
		const { note } = this.state;
		let noteURL = `${note}.mp3`;
		const playStatus = note === '' ? Sound.status.STOPPED : Sound.status.PLAYING;

		return (
			<div className="App">
				<Sound url={noteURL} playStatus={playStatus} />
				<div className="App-header">
					<h1>{this.state.note}</h1>
				</div>
				<div className="Buttons">
					<NoteButton changeNote={this.changeNote} note='B'/>
					<NoteButton changeNote={this.changeNote} note='E'/>
					<NoteButton changeNote={this.changeNote} note='A'/>
					<NoteButton changeNote={this.changeNote} note='D'/>
					<NoteButton changeNote={this.changeNote} note='G'/>
					<NoteButton changeNote={this.changeNote} note='B'/>
					<NoteButton changeNote={this.changeNote} note='E'/>
				</div>
			</div>
		);
	}
}

export default App;
