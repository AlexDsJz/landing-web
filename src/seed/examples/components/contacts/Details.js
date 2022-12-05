/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_CONTACT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/contacts/Details.view";

function ContactDetails({ contactId, onCompleted = () => null, onError = () => null }) {

  const reqContact = useDetail(`
  {
    contact {
      business
      comment
      lastname
      name
      position
      email
      createdAt
      user { }
    }
  }`, contactId);
  
  const [callDelete] = useDelete(DELETE_CONTACT, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqContact.loading) return <Loading />;
  if (reqContact.error) return "Error";
  const { contact = {} } = reqContact.data;

  const onClickDelete = () =>
    callDelete({ id: contactId });

  return <View
    contact={contact}
    onClickDelete={onClickDelete}
   />;
}

ContactDetails.propTypes = {
  contactId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default ContactDetails;