/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import ContactDetails from "seed/examples/components/contacts/Details";
import ContactList from "seed/examples/components/contacts/List";
import ContactFormSave from "seed/examples/components/contacts/FormSave";
import ContactFormSet from "seed/examples/components/contacts/FormSet";
import { ModalRoute } from "seed/helpers";

const ContactsView = () =>
  <BrowserRouter basename="/examples/contacts">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Contacts</h1>
        </div>

        <div class="col-sm-auto">
          <div class="btn-group" role="group">
            <Link to="/create" className="btn btn-primary">
              <i class="tio-add mr-1"></i>Create
            </Link>
          </div>
        </div>

      </div>
    </div>

    {/* List */}
    <ContactList />

    {/* Modals */}
    <ModalRoute
        path="/:contactId(\d+)"
        component={ContactDetails} />
    <ModalRoute
      path="/create"
      component={ContactFormSave} />
    <ModalRoute
      path="/:contactId(\d+)/edit"
      component={ContactFormSet} />

    </div>
  </BrowserRouter>;

ContactsView.propTypes = {};

export default ContactsView;