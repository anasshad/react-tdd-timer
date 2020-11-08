import React from "react";

//import componenets
import TimerButton from "../TimerButton/TimerButton";

//import styling
import "./Timer.css";

interface TimerState {
  minutes: number;
  seconds: number;
  milliseconds: number;
  isOn: boolean;
  intervalId: any;
}

class Timer extends React.Component<{}, TimerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      isOn: false,
      intervalId: null,
    };
  }

  incrementTimer = () => {
    this.setState({ milliseconds: this.state.milliseconds + 1 }, () => {
      if (this.state.milliseconds > 59)
        this.setState(
          { seconds: this.state.seconds + 1, milliseconds: 0 },
          () => {
            if (this.state.seconds > 59)
              this.setState({ minutes: this.state.minutes + 1, seconds: 0 });
          }
        );
    });
  };

  addLeadingZero = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  startTimer = () => {
    this.setState({ intervalId: setInterval(this.incrementTimer, 10) });
    this.setState({ isOn: true });
  };

  stopTimer = () => {
    clearInterval(this.state.intervalId);
    this.setState({ isOn: false });
  };

  resetTimer = () => {
    this.setState({ isOn: false, minutes: 0, seconds: 0, milliseconds: 0 });
  };

  render() {
    const { minutes, seconds, milliseconds } = this.state;

    return (
      <div className="timer-container">
        <div className="timer-display-area">{`${this.addLeadingZero(
          minutes
        )}:${this.addLeadingZero(seconds)}:${this.addLeadingZero(
          milliseconds
        )}`}</div>
        <div className="timer-button-area">
          <TimerButton
            className="start-timer"
            buttonAction={this.startTimer}
            buttonValue="Start"
          />
          <TimerButton
            className="stop-timer"
            buttonAction={this.stopTimer}
            buttonValue="Stop"
          />
          <TimerButton
            className="reset-timer"
            buttonAction={this.resetTimer}
            buttonValue="Reset"
          />
        </div>
      </div>
    );
  }
}

export default Timer;
