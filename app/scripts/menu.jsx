// Menu Component
// =============================

import React         from 'react';
import ReactDOM      from 'react-dom';
import Nav           from './nav';
import Toggle_Button from './toggle_button';
import Content       from './content';

const nav_data = { 
  link1: {title: "Neque porro",   url: "#one",   hasSubMenu: true,  subNavLinks: [{subNavTitle: 'Neque porro', subNavUrl: '#subNav1.1', subNavSubText: 'Lorem ipsum dees corno as ifta'}, {subNavTitle: 'Neque porro', subNavUrl: '#subNav1.2'}, {subNavTitle: 'Neque porro', subNavUrl: '#subNav1.3', subNavSubText: 'Lorem ipsum dees corno as ifta'}, {subNavTitle: 'Neque porro', subNavUrl: '#subNav1.4', subNavSubText: 'Lorem ipsum dees corno as ifta'}, {subNavTitle: 'Neque porro', subNavUrl: '#subNav1.5', subNavSubText: 'Lorem ipsum dees corno as ifta'}], hasImage: true, imageSrc: 'https://images.unsplash.com/photo-1463595373836-6e0b0a8ee322?format=auto&auto=compress&dpr=2&crop=entropy&fit=crop&w=1199&h=799&q=80', imageAlt: 'Lorem ipsum alt tag'},
  link2: {title: "Dolor sit",   url: "#two",   hasSubMenu: false, subNavLinks: []},
  link3: {title: "Neque porro", url: "#three", hasSubMenu: true,  subNavLinks: [{subNavTitle: 'Neque porro', subNavUrl: '#subNav3.1'}, {subNavTitle: 'Neque porro', subNavUrl: '#subNav3.2'}, {subNavTitle: 'Neque porro', subNavUrl: '#subNav3.3'}, {subNavTitle: 'Neque porro', subNavUrl: '#subNav3.4'}, {subNavTitle: 'Neque porro', subNavUrl: '#subNav3.5'}, {subNavTitle: 'Neque porro', subNavUrl: '#subNav3.6'}]},
  link4: {title: "Adipisci velit",  url: "#four",  hasSubMenu: true,  subNavLinks: [{subNavTitle: 'Adipisci velit', subNavUrl: '#subNav4.1', subNavSubText: 'Lorem ipsum dees corno as ifta'}, {subNavTitle: 'Adipisci velit', subNavUrl: '#subNav4.2'}], hasSummary: true, summaryTitle: 'Neque porro quisquam', summaryParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", linkText: 'See More'},
  link5: {title: "Dolorem ipsum",  url: "#five",  hasSubMenu: false, subNavLinks: []}
} 

export default class Menu extends React.Component {

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

  // Menu Renderer
  render() {
    return (
      <header>
        <Toggle_Button 
          clickEvent={this.handle_click.bind(this)}
          currentState={this.state.show_menu} />
        <Nav 
          data={nav_data}
          currentState={this.state.show_menu}/>        
        <Content />  
      </header>
    );
  }
}


ReactDOM.render(
  <Menu />, 
  document.getElementById('app')
);
