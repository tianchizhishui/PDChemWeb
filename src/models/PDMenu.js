import React, { Component } from 'react';

class PDMenu extends Component {
    render() {
        let linksMarkup = this.props.links.map((link, index) => {
            return (
                <li className="menu__list-item"><a className="menu__link" href={link.link}>{link.label}</a></li>
            )
        });


        return (
            <nav className="menu">
                <div className="menu__right">
                    <ul className="menu__list">
                        {linksMarkup}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default PDMenu;