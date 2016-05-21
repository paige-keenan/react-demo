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

  // Menu Renderer
  render() {
    return (
      <header>
        <Toggle_Button />
        <Nav data={nav_data}/>
      </header>
    );
  }
}

ReactDOM.render(
  <Menu />, 
  document.body
);