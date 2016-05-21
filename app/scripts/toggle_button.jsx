// Basic toggle button component
// =============================

import React from 'react';
import ReactDOM from 'react-dom';

class Toggle_Button extends React.Component {

  // Set Inital State and Properties here
  constructor(props) {
    super(props);
    this.state = {show_menu: false};
  }  

  // Toggle Menu Function
  toggle_menu(event) {
    event.preventDefault();
    this.setState({show_menu: !this.state.show_menu});
  }

  // Menu Button Renderer
  render() {
    return (
      <button 
        className={this.state.show_menu ? 'isOpen' : ''}     
        onClick={this.toggle_menu.bind(this)}>
        Menu
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle_Button/>, 
  document.getElementById('menuButton')
);