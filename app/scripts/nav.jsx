// Navigation Component
// =============================

import React from 'react';

export default class Nav extends React.Component {

  // Render Links
  render_nav_list_item(links) {
    return links.map(function(link_item, i) {
      var Sub_Nav = undefined;
      var sub_links = undefined;
      // Conditional to check if `hasSubMenu` is TRUE in data    
      if (link_item.hasSubMenu) {
        sub_links = link_item.subNavLinks.map(function(sub_nav_link, i) {
          return  <li key={i}>
                    <a href={sub_nav_link.subNavUrl}>
                      {sub_nav_link.subNavTitle}
                    </a>
                  </li>
        });
        // Append the `sub_links` into this `<ul>` and then append to return below
        Sub_Nav = <ul>{sub_links}</ul>
      }

      return (
        <li 
          key={i}
          data-has-sub-nav={link_item.hasSubMenu ? true : false}>
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
