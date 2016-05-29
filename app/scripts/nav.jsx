// Nav Component
// =============================

import React from 'react';

export default class Link_Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active,
      className: true
    });
  }

  // Nav List Item Renderer
  render() {
    const link = this.props.details;
    const active_state = this.state.active ? true : false;
    var sub_links = '';
    var Sub_Nav = undefined;

    // Conditional to check if `hasSubMenu` is TRUE in data
    if (link.hasSubMenu) {
      sub_links = link.subNavLinks.map(function(sub_nav_link, i) {
        return(
          <li 
            key={i}>
            <a href={sub_nav_link.subNavUrl}>
              {sub_nav_link.subNavTitle}
            </a>
          </li>
        );  
      });
      // Append the `sub_links` into this `<ul>` and then append to return below
      Sub_Nav = <ul>{sub_links}</ul>
    }

    return(  
      <li
        data-is-active={active_state}>
        <a
          onClick={this.toggle} 
          href={link.url}>
          {link.title}
        </a>
        {Sub_Nav}
      </li>
    );  
  }
}

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkInfo: this.props.data
    }
    this.render_link_info = this.render_link_info.bind(this);
  }

  render_link_info(key) {
    return( 
      <Link_Item 
        key={key} 
        details={this.state.linkInfo[key]}/>
    );  
  }

  // Nav Renderer
  render() {
    return(
      <nav 
        data-menu-state={this.props.currentState ? 'isOpen' : 'isClosed'}>
        <ul>
          {Object.keys(this.state.linkInfo).map(this.render_link_info)} 
        </ul>
      </nav>
    );  
  }
} 

