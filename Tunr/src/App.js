import React, { Component } from 'react';
import Sound from 'react-sound';
import ReactHowler from 'react-howler';
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
		const noteURL = `./audio-files/${note}.mp3`;
		const playStatus = note === '' ? false : true;

		return (
			<div className="App">
				<ReactHowler src={noteURL} playStatus={playStatus} loop={true} />
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
