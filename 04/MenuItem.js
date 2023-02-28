import React from "react"

const myStyle = {
    border:'1px solid blue',
    backgroundColor:'yellow',
}

class MenuItem extends React.Component {
    render() {
        const {text, url} = this.props
        return (
            <li><a src={url} style={myStyle}>{text}</a></li>
        )
    }
}

export default MenuItem