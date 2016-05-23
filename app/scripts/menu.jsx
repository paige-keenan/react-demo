// Menu Component
// =============================

import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Toggle_Button from './toggle_button';

const nav_data = { 
  links: [
    {title: "Link One", url: "#one"},
    {title: "Link Two", url: "#two"},
    {title: "Link Three", url: "#three"},
    {title: "Link Four", url: "#four"},
    {title: "Link Five", url: "#five"}
  ]
}

export default class Menu extends React.Component {

  // Set Inital State and Properties here
  constructor(props) {
    super(props);
    this.state = {show_menu: false};
    this.handle_click = this.handle_click.bind(this);
  } 

  // Toggle Menu Function
  toggle_menu(event) {
    this.setState({show_menu: !this.state.show_menu});
  }

  // All Click Functions Declared Here
  handle_click(event) { 
    this.toggle_menu(this);
  }  

  // Menu Renderer
  render() {
    return (
      <header>
        <Toggle_Button 
          clickEvent={this.handle_click.bind(this)}
          currentState={this.state.show_menu} />
        <Nav 
          data={nav_data}
          currentState={this.state.show_menu} />        
      </header>
    );
  }
}


ReactDOM.render(
  <Menu />, 
  document.getElementById('app')
);
