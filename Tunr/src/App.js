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
		this.buttonLight = this.buttonLight.bind(this);
	}

	changeNote(note) {
		this.setState({
			note: this.state.note === note ? '' : note
		});
	}

	buttonLight(note) {
		return this.state.note === note ? "ButtonOn" : "ButtonOff";
	}

	render() {
		const { note } = this.state;
		const noteURL = `./audio-files/${note}.mp3`;
		const playStatus = note === '' ? false : true;
		const logo = `./Tunr Logo Full.png`;

		return (
			<div className="App">
				<ReactHowler src={noteURL} playStatus={playStatus} loop={true} />
				<div className="App-header">
					<img className="Logo" src= {logo} />
				</div>
				<div className="Buttons">
					<NoteButton changeNote={this.changeNote} note='B0' noteTitle='B' buttonLight={this.buttonLight} />
					<NoteButton changeNote={this.changeNote} note='E1' noteTitle='E' buttonLight={this.buttonLight} />
					<NoteButton changeNote={this.changeNote} note='A1' noteTitle='A' buttonLight={this.buttonLight} />
					<NoteButton changeNote={this.changeNote} note='D2' noteTitle='D' buttonLight={this.buttonLight} />
					<NoteButton changeNote={this.changeNote} note='G2' noteTitle='G' buttonLight={this.buttonLight} />
					<NoteButton changeNote={this.changeNote} note='B2' noteTitle='B' buttonLight={this.buttonLight} />
					<NoteButton changeNote={this.changeNote} note='E3' noteTitle='E' buttonLight={this.buttonLight} />
				</div>
			</div>
		);
	}
}

export default App;
