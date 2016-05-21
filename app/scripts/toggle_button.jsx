// Basic toggle button component
// =============================

import React from 'react';
import ReactDOM from 'react-dom';

export default class Toggle_Button extends React.Component {

  // Set Inital State and Properties here
  constructor(props) {
    super(props);
    this.state = {show_menu: false};
  }  

  // Toggle Menu Function
  toggle_menu(event) {
    this.setState({show_menu: !this.state.show_menu});
  }

  // All Click Functions Declared Here
  handle_click(event) {
    this.toggle_menu(this);
  }

  // Menu Button Renderer
  render() {
    return (
      <button 
        ref='toggle_button'
        className={this.state.show_menu ? 'isOpen' : ''}     
        onClick={this.handle_click.bind(this)}>
        Menu
      </button>
    );
  }
}

module.exports = Toggle_Button;