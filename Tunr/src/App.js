import React, { Component } from 'react';
import Sound from 'react-sound';
import './App.css';
import Button from './Button.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			note : 1
		};
	}

	render() {
		return (
			<div className="App">
				<Sound
					url="E2.mp3"
					playStatus={this._PlayStatus} />
				<div className="App-header">
					<h1>{this.state.note}</h1>
				</div>
				<div className="Buttons">
					<Button
						changeSound={this._ChangeSound}
						newNote={1}
						noteTitle='E' />
					<Button
						changeSound={this._ChangeSound}
						newNote={2}
						noteTitle='A' />
				</div>
			</div>
		);
	}

	_ChangeSound(newNote) {
		switch (newNote) {
			case 1:
				if(this.state.note === newNote) {
					this.setState({note : null});
				} else {
					this.setState({note : 1});
				}
				break;
			case 2:
				if(this.state.note === newNote) {
					this.setState({note : null});
				} else {
					this.setState({note : 2});
				}
				break;
			default:
				break;
		}
		console.log(this.state.note);
	}

	_PlayStatus = () => {
		if(this.state.note === 0){
			return Sound.status.STOPPED;
		} else {
			return Sound.status.PLAYING;
		}
	}
}

export default App;
