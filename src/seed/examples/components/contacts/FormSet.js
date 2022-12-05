/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { CONTACT, SET_CONTACT } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/contacts/Form.view";

function ContactFormSet({ contactId, onCompleted = () => null, onError = () => null  }) {

  const qContact = useDetail(CONTACT, contactId);
  const qUsers = useQuery(`{ users { } }`);
  const [callSet, qSet] = useSet(SET_CONTACT, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qContact.loading) return <Loading />;

  const { contact = {} } = qContact.data;
  const { users = [] } = qUsers.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = contactId;
    callSet(values);
  };

  return <View
    contact={contact}
    users={users}
    error={error}
    onSubmit={onSubmit}
  />;
}

ContactFormSet.propTypes = {
  contactId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default ContactFormSet;