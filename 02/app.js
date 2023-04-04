import React from'react';
import { createRoot } from'react-dom/client'

const root = createRoot(document.querySelector('#root'));
const myStyles = {
    border:'1px solid blue',
    backgroundColor:'yellow',
};

const HeaderFn = () => {
    return (
        <header style={myStyles}>
            'Moja pierwsza strona w React'
        </header>
    )
}

class HeaderCl extends React.Component {
    render() {
        return (
        <header>
            'Moja pierwsza strona w React'
        </header>
        )
    }
}

root.render(
    <><HeaderFn /><HeaderCl /></>
    );
