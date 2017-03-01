import React, { Component } from 'react';
import Sound from 'react-sound';
import NoteButton from './NoteButton.js';
import './App.css';
import './audio-files/A1.mp3';

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
		const noteURL = `${note}.mp3`;
		const playStatus = note === '' ? Sound.status.STOPPED : Sound.status.PLAYING;

		return (
			<div className="App">
				<Sound url={noteURL} playStatus={playStatus} />
				<div className="App-header">
					<h1>{this.state.note}</h1>
				</div>
				<div className="Buttons">
					<NoteButton changeNote={this.changeNote} note='B0' noteTitle='B' />
					<NoteButton changeNote={this.changeNote} note='E1' noteTitle='E' />
					<NoteButton changeNote={this.changeNote} note='A1' noteTitle='A' />
					<NoteButton changeNote={this.changeNote} note='D2' noteTitle='D' />
					<NoteButton changeNote={this.changeNote} note='G2' noteTitle='G' />
					<NoteButton changeNote={this.changeNote} note='B2' noteTitle='B' />
					<NoteButton changeNote={this.changeNote} note='E3' noteTitle='E' />
				</div>
			</div>
		);
	}
}

export default App;
