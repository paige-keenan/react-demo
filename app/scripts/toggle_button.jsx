// Basic toggle button component
// =============================

import React from 'react';

export default class Toggle_Button extends React.Component { 

  // Menu Button Renderer
  render() {
    return (
      <button 
        onClick={this.props.clickEvent}
        data-menu-state={this.props.currentState ? 'isOpen' : 'isClosed'}>
        {this.props.currentState ? 'Close Menu' : 'Open Menu'}
      </button>
    );
  }
}
