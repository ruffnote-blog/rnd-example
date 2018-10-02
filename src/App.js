import React, { Component } from 'react';
import { Rnd } from 'react-rnd';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 30,
      hour: 0,
    };
  }

  onResize = (e, direction, ref, delta, position) => {
    const minutes = Math.floor(parseInt(ref.style.width, 10) / 20) * 30;
    const hour = Math.floor(parseInt(position.x, 10) / 40);
    this.setState({ minutes, hour });
  }

  onDrag = (e, d) => {
    const hour = Math.floor(parseInt(d.x, 10) / 40);
    if (hour > -1) {
      this.setState({ hour });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {Array.from(Array(24).keys()).map(i =>
            <div className="item" key={i}>
            </div>
          )}
          <Rnd
            className="rnd"
            default={{
              x: 0,
              y: 0,
              width: 20,
              height: '100%',
            }}
            dragAxis="x"
            enableResizing={{
              top: false, right: true, bottom: false, left: true,
              topRight: false, bottomRight: false, bottomLeft: false, topLeft: false
            }}
            bounds="parent"
            resizeGrid={[20, 0]}
            dragGrid={[20, 0]}
            minWidth="20"
            onResize={this.onResize}
            onDrag={this.onDrag}
          />
        </div>
        {this.state.hour}時<br />
        {this.state.minutes}分
      </div>
    );
  }
}

export default App;
