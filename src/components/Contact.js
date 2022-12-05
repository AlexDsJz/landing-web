import React from "react";
import PropTypes from "prop-types";
import View from "components/Contact.view";

function Contact(contact){
    return <View
            contact = {contact}
            />;
}

Contact.propTypes = {
    contact: PropTypes.object
}

export default Contact;