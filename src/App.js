import React, { Component } from "react";
import "./App.css";
import Sound from "react-sound";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class App extends Component {
  state = {
    mute: false,
    play: true,
    display: 0,
    value: 50
  };

  // handleMute = () => {
  //   console.log(this.state.mute);
  //   this.setState({ mute: !this.state.mute });
  // };
  // handlePlay = () => {
  //   console.log(this.state.play);
  //   this.setState({ play: !this.state.play });
  // };
  handlesound = x => {
    this.setState({ value: x });
    console.log(x);
  };

  handleChange = (event, newValue) => {
    console.log(this.state.value);
    this.setState({ value: newValue });
  };
  render() {
    return (
      <React.Fragment>
        {/* <ReactAudioPlayer src="./beats/stolenbeat.mp3"  autoPlay /> */}
        <Sound
          url="./beats/stolenbeat.mp3"
          volume={this.state.value}
          playStatus={
            this.state.display === 0
              ? Sound.status.PLAYING
              : this.state.display === 1
              ? Sound.status.PAUSED
              : Sound.status.STOPPED
          }
        />

        <Typography id="continuous-slider" gutterBottom>
          Volumem
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider
              value={this.state.value}
              onChange={this.handleChange}
              aria-labelledby="continuous-slider"
            />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
        {/* <Slider
          disabled
          defaultValue={30}
          aria-labelledby="continuous-slider"
        />

        <Slider
          disabled
          defaultValue={30}
          aria-labelledby="continuous-slider"
        /> */}
        <button onClick={() => this.handlesound(0)}>play</button>
        <button onClick={() => this.handlesound(1)}>pause</button>
        <button onClick={() => this.handlesound(2)}>stop</button>
      </React.Fragment>
    );
  }
}

export default App;
