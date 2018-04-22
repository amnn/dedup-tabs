import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Options.css';

class Options extends Component {
  render() {
    return (
      <div className="Options">
        Options!
      </div>
    );
  }
}

const mount = document.getElementById("root");
ReactDOM.render(<Options />, mount);
