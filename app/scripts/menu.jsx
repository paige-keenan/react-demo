import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {

  toggle_menu() {
    open: !this.state.open 
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return <h1>Menu to go here</h1>
  }
 }

 export default Menu;



ReactDOM.render(
  <Menu/>, 
  document.getElementById('menu')
);