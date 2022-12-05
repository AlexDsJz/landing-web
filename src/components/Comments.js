import React, {useState} from "react";
import { Loading } from "seed/helpers";
import View from "components/Comments.view";
import { usePagination } from "seed/gql";


function ContactDetails() {

    const pageSize = 3;
    const [pageNum, setPageNum] = useState(1);

    const reqContact = usePagination(`
    {
        contactPagination{
            totalPages
            contacts {
                business
                comment
                lastname
                name
                position
                email
              }   
        }
    }`, pageNum, pageSize);

    if (reqContact.loading) return <Loading />;
    if (reqContact.error) return "Error";

    const { contacts = {}, totalPages = 0 } = reqContact.data.contactPagination;
    const onClickPage = (pageNum) => setPageNum(pageNum);

    return <View
                contacts={contacts}
                pageNum={pageNum}
                totalPages={totalPages}
                onClickPage={onClickPage}
            />;
}

ContactDetails.propTypes = {};
  
export default ContactDetails;