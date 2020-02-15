import React, { Component } from 'react';

class ContactInfo extends Component {
    
    render() {
        let contact = "contact:";
        let email = "Email: pdchemitech.contact@gmail.com";
        let phone = "Phone: (949) 870-0573";

        return (
            <div className="contactInfo">
                <div className="contact-title">{ contact }</div>
                <div>{ email }</div>
                <div>{ phone }</div>
            </div>
        );
    }
}

export default ContactInfo;