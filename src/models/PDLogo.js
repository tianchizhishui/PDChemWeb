import React, { Component } from 'react';
import logo from '../images/logo.png';

class PDLogo extends Component {
    render() {
        return (
            <div className="logo">
                <p><img src={logo} /></p>
            </div>
        );
    }
}

export default PDLogo;