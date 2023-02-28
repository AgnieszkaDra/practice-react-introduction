import React from'react';
import { createRoot } from'react-dom/client'
import MenuItem from './MenuItem';

const root = createRoot(document.querySelector('#root'));


const App = () => 
    <ul>
    <MenuItem text="kontakt" url="contact"></MenuItem>
    <MenuItem text="kontakt" url="contact"></MenuItem>
    <MenuItem text="kontakt" url="contact"></MenuItem>
    </ul>


root.render(<App />)