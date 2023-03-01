import React from "react";
import Menu from "./Menu";

class Nav extends React.Component {
  render(){
    const arr = [
            {text: 'strona główna', url: '/'}, 
            {text: 'www', url: '/www'}
        ]
      return <nav>
          <Menu class="nav" items = {arr} />
      </nav>
  }
}

export default Nav