import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";
import Contact from "components/Contact"
import { PaginationFooter } from "seed/helpers";

const ContactDetailsView = ({
    contacts, 
    pageNum = 1, 
    totalPages = 0, 
    onClickPage = () => {},
}) => (
    <BrowserRouter basename="/comments">
        <div>
            {contacts.map((contact) => Contact(contact))}

            <div class="col m-0 row justify-content-center">
                <PaginationFooter
                    totalPages={totalPages}
                    onClickPage={onClickPage}
                    pageNum={pageNum}
                />
            </div>
        </div>
    </BrowserRouter>
);
  

ContactDetailsView.propTypes = {
  contacts: PropTypes.array,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number,
  onClickPage: PropTypes.func
};

export default ContactDetailsView;