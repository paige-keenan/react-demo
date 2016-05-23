// Basic toggle button component
// =============================

import React from 'react';
import ReactDOM from 'react-dom';

export default class Toggle_Button extends React.Component { 

  // Menu Button Renderer
  render() {
    return (
      <button 
        onClick={this.props.clickEvent}
        className={this.props.currentState ? 'isOpen' : ''}>
          Menu
      </button>
    );
  }
}
