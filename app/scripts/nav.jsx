// Navigation Component
// =============================

import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {

  // Menu Button Renderer
  render() {
    return (
      <nav>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </nav> 
    );
  }
}

ReactDOM.render(
  <Nav/>, 
  document.getElementById('nav')
);