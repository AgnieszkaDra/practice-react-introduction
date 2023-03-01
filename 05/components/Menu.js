import React from "react";
import PropTypes from 'prop-types';


class Menu extends React.Component{
 
    renderElements(){
        return (
            this.props.items.map((element, index) => 
                <li key={index}>
                    <a src={element.url}>{element.text}</a>
                </li>
            )
        )
    }
    render(){
        return (
            <ul className={this.props.class}>
                {this.renderElements()}
            </ul>
        )
    }
}

Menu.propTypes = {
    class: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}

export default Menu