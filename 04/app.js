import React from'react';
import { createRoot } from'react-dom/client'
import MenuItem from './MenuItem';

const root = createRoot(document.querySelector('#root'));

class Menu extends React.Component{
    render(){
        return (
            <ul>
                <MenuItem text="home" url="/"></MenuItem>
                <MenuItem text="kontakt" url="/"></MenuItem>
            </ul>
        );
    }
}

class Nav extends React.Component {
    render(){
        return <nav>
            <Menu></Menu>
        </nav>
    }
}

const App = () => 
   <Nav />


root.render(<App />)