// Navigation Component
// =============================

import React from 'react';
import ReactDOM from 'react-dom';


const nav_data = { 
  links: [
    {title: "Link One", url: "#one"},
    {title: "Link Two", url: "#two"},
    {title: "Link Three", url: "#three"},
    {title: "Link Four", url: "#four"},
    {title: "Link Five", url: "#five"}
  ]
}

class Nav extends React.Component {

  // Render Links
  render_nav_list_item(links) {
    return links.map(function(link_item, i){
      return (
        <li key={i}>
          <a href={link_item.url}>
            {link_item.title}
          </a>
        </li> 
      )     
    })
  }  

  // Navigation Renderer
  render() {
    return (
      <nav>
        <ul>
          {this.render_nav_list_item(this.props.data.links)}
        </ul>
      </nav> 
    );
  }
}

ReactDOM.render(
  <Nav data={nav_data}/>, 
  document.getElementById('nav')
);