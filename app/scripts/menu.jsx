import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {

  toggle_menu() {
    open: !this.state.open
  }

  // Open Menu Function
  open_menu(event) {
    event.preventDefault();
    this.setState({show_menu: true});
    this.animate_menu();
  }

  // Close Menu Function
  close_menu() {
    this.setState({show_menu: false});
    this.animate_menu();
  }  

  // Controls Show/Hide of Menu based on `show_menu` state
  animate_menu() {
    
    this.isAnimating = true;

    if (this.state.show_menu) {
      console.log('hit');
      // Open Menu 
      this.className = "isOpen"
      this.isAnimating = false; 
    }
    // Close Menu
    else {
      console.log('hit');
    }
  }

  constructor(props) {
    super(props);
    this.state = {open: false}
  }

  // Menu Button Renderer
  render() {
    return (
      <header>
        <button      
          onClick={this.open_menu.bind(this)}>
          Menu
        </button>
      </header> 
    );
  }
 }


 export default Menu;

ReactDOM.render(
  <Menu/>, 
  document.getElementById('menu')
);