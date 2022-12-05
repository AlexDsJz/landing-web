/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { MultiField, FileField } from "seed/helpers";

const ContactFormView = ({ contact= {}, users= [], onSubmit, error }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Contact</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik
          initialValues={contact}
          onSubmit={onSubmit}>
          {({ values, setFieldValue}) =>
          <Form>
            <div class="mb-3">
            {/* User */}
            <div class="form-group">
            <div>
            <label class="input-label">User</label>
            <Field as="select" name="user.id"
              class="form-control"  >
              <option value="">Select an option</option>
              {users.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
            </Field>
            </div>
            </div>
            {/* Business */}
            <div class="form-group">
            <label class="input-label">Business</label>
            <Field type="text" name="business"
              class="form-control" />
            </div>
            {/* Comment */}
            <div class="form-group">
            <label class="input-label">Comment</label>
            <Field type="text" name="comment"
              class="form-control" />
            </div>
            {/* Lastname */}
            <div class="form-group">
            <label class="input-label">Lastname</label>
            <Field type="text" name="lastname"
              class="form-control" />
            </div>
            {/* Name */}
            <div class="form-group">
            <label class="input-label">Name</label>
            <Field type="text" name="name"
              class="form-control" />
            </div>
            {/* Position */}
            <div class="form-group">
            <label class="input-label">Position</label>
            <Field type="text" name="position"
              class="form-control" />
            </div>
            {/* Email */}
            <div class="form-group">
            <label class="input-label">Email</label>
            <Field type="text" name="email"
              class="form-control" />
            </div>
            </div>
            {error ? <div class="alert alert-soft-danger">{error}</div> : null}
            <button type="submit" class="btn btn-block btn-primary">Send</button>
          </Form> }
          </Formik>
        </div>
      </div>
    </div>

  </div>;

ContactFormView.propTypes = {
  contact: PropTypes.object,
  users: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default ContactFormView;