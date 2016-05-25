// Menu Component
// =============================

import React         from 'react';
import ReactDOM      from 'react-dom';
import Nav           from './nav';
import Toggle_Button from './toggle_button';
import Content       from './content';

const nav_data = { 
  links: [
    {title: "Link One",   url: "#one",   hasSubMenu: true,  subNavLinks: [{subNavTitle: 'Subnav 1.1', subNavUrl: '#subNav1.1'}, {subNavTitle: 'Subnav 1.2', subNavUrl: '#subNav1.2'}]},
    {title: "Link Two",   url: "#two",   hasSubMenu: false, subNavLinks: []},
    {title: "Link Three", url: "#three", hasSubMenu: true,  subNavLinks: [{subNavTitle: 'Subnav 3.1', subNavUrl: '#subNav3.1'}, {subNavTitle: 'Subnav 3.2', subNavUrl: '#subNav3.2'}]},
    {title: "Link Four",  url: "#four",  hasSubMenu: true,  subNavLinks: [{subNavTitle: 'Subnav 4.1', subNavUrl: '#subNav4.1'}, {subNavTitle: 'Subnav 4.2', subNavUrl: '#subNav4.2'}]},
    {title: "Link Five",  url: "#five",  hasSubMenu: false, subNavLinks: []}
  ]
}

export default class Menu extends React.Component {

  // Set Inital State and Properties here
  constructor(props) {
    super(props);
    this.state = {show_menu: false, show_sub_menu: false};
  } 

  // Toggle Menu Function
  toggle_menu(event) {
    this.setState({show_menu: !this.state.show_menu});
  }

  // All Click Functions Declared Here
  handle_click(event) { 
    this.toggle_menu(this);
  }  

  sub_nav_click(event) {
    if(this.state.show_sub_menu) {
      console.log('hide');
      this.setState({show_sub_menu: false});
      event.target.className = 'hide'
    } else {
      console.log('show');
      this.setState({show_sub_menu: true}); 
      event.target.className = 'show'
    }
    // event.target.className = 'active';
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
          currentState={this.state.show_menu} 
          subMenuState={this.state.show_sub_menu}
          clickSubNav={this.sub_nav_click.bind(this)}/>        
        <Content />  
      </header>
    );
  }
}


ReactDOM.render(
  <Menu />, 
  document.getElementById('app')
);
