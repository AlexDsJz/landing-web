import React from 'react'
import { useQuery } from "seed/gql";
import { usePost } from "seed/api";
import { Loading } from "seed/helpers";
import PropTypes from "prop-types";
import View from "components/FormPost.view";

function ProcessFormPost({ onCompleted = () => null, onError = () => null }) {
    const reqUsers = useQuery(`{ 
          users { 
          } 
      }`);
    const [callResults, reqResults] = usePost("/contacts/request_demo", {
        onCompleted: () => 
          window.location.href = "/landing"
    });
  
    if (reqUsers.loading) return <Loading />;
    if (reqUsers.error) return "ERROR";
  
    const { users = [] } = reqUsers.data;
    const error = reqResults.error ? "Error al llenar el formulario" : null;
  
    const onSubmit = (values) => {
      callResults(values);
    };
  
    return <View 
            users={users} error={error}     
            onSubmit={onSubmit} 
          />;
  }
  
  ProcessFormPost.propTypes = {
    onCompleted: PropTypes.func,
    onError: PropTypes.func,
  };
  
  export default ProcessFormPost;