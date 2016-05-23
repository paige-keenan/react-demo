// Navigation Component
// =============================

import React from 'react';

export default class Nav extends React.Component {

  // Render Links
  render_nav_list_item(links) {
    return links.map(function(link_item, i){
      return (
        <li key={i}>
          <a href={link_item.url}>
            {link_item.title}
          </a>
        </li> 
      );     
    });
  }  

  // Navigation Renderer
  render() {
    return (
      <nav
        data-menu-state={this.props.currentState ? 'isOpen' : 'isClosed'}>
        <ul>
          {this.render_nav_list_item(this.props.data.links)}
        </ul>
      </nav> 
    );
  }
}
