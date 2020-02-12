import React, { Component } from 'react';

class PDMenu extends Component {
    render() {
        return (
            <nav className="menu">
                <div className="menu__right">
                    <ul className="menu__list">
                        <li className="menu__list-item"><a className="menu__link" href="#">OUR PURPOSE</a></li>
                        <li className="menu__list-item"><a className="menu__link" href="#">ABOUT</a></li>
                        <li className="menu__list-item"><a className="menu__link" href="#">LASTESTNEWS</a></li>
                        <li className="menu__list-item"><a className="menu__link" href="#">SERVICE PROVIDED</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default PDMenu;