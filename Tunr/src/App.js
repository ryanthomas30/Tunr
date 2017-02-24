import React, { Component } from 'react';
import Sound from 'react-sound';
import './App.css';
import Button from './Button.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			note : null
		};
	}

	render() {
		return (
			<div className="App">
				<Sound
					url="E2.mp3"
					playStatus={this._PlayStatus} />
				<div className="App-header">
					<h1>Tunr</h1>
				</div>
				<div className="Buttons">
					<Button
						changeSound={this._ChangeSound}
						newNote='E2'
						noteTitle='E' />
					<Button
						changeSound={this._ChangeSound}
						newNote='A3'
						noteTitle='A' />
				</div>
			</div>
		);
	}

	_ChangeSound(newNote) {
		switch (newNote) {
			case 'E2':
				if(this.state.note === newNote) {
					this.setState({note : null});
				} else {
					this.setState({note : 'E2'});
				}
				break;
			case 'A2':
				if(this.state.note === newNote) {
					this.setState({note : null});
				} else {
					this.setState({note : 'A2'});
				}
				break;
			default:
				break;
		}
		console.log(this.state);
	}

	_PlayStatus = () => {
		if(this.state.note === null){
			return Sound.status.STOPPED;
		} else {
			return Sound.status.PLAYING;
		}
	}
}

export default App;
