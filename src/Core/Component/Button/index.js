import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { className, children, ...others } = this.props;
        return (
            <span className={`button${className?' '+className:''}`} {...others}>{children}</span>
        );
    }
}

export const ButtonStyle = {
    primary: 'primary-button',
    secondary: 'secondary-button'
}

export default Button;