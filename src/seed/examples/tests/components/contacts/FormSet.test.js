/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data';
import FormSet from 'seed/examples/components/contacts/FormSet';

test('examples/components/contacts/FormSet', () => {
  mockGql.useDetail({"contact": data.GQL_CONTACT});
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useSet({"setContact": data.GQL_CONTACT});
  render(<FormSet />);
  expect(screen).toBeDefined();
});