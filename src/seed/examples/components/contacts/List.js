/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/contacts/List.view";

function ContactList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqContacts = usePagination(`
  {
    contactPagination {
      totalPages
      contacts {
        business
        comment
        lastname
        name
        position
        email
        createdAt
        user { }
      }
    }
  }`, pageNum, pageSize);

  if (reqContacts.loading) return <Loading />;
  if (reqContacts.error) return "Error";
  const { contacts = [], totalPages = 0 } = reqContacts.data.contactPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    contacts={contacts}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

ContactList.propTypes = {};

export default ContactList;