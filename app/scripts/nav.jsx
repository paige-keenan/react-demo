// Navigation Component
// =============================

import React from 'react';

export default class Nav extends React.Component {

  // Render Links
  render_nav_list_item(links) {
    return links.map(function(link_item, i) {
      // Conditional to check if `hasSubMenu` is TRUE in data    
      var Sub_Nav = undefined;

      if (link_item.hasSubMenu) {
        link_item.subNavLinks.map(function(sub_nav_link, i) {
          Sub_Nav = 
            <ul key={i}>
              <li key={i}>{sub_nav_link.subNavTitle}</li>
            </ul>  
        });
      }

      return (
        <li key={i}>
          <a href={link_item.url}>
            {link_item.title}
          </a>
          {Sub_Nav}
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
