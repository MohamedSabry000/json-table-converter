import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JsonToHTMLTable from '../components/json-to-html-table/JsonToHTMLTable';

const json = {
  "name": "hello",
  "age": "20",
  "address": {
    "street": "123 main st",
    "city": "new york",
    "state": "ny",
    "zip": "10001"
  }
}

test('check data', () => {
  render(<JsonToHTMLTable json={json} />);

  const tableElement = screen.getByTestId("json-to-html-table")

  expect(tableElement).toHaveTextContent("hello");
  expect(tableElement).toHaveTextContent("123 main st");
  expect(tableElement).toHaveTextContent("10001");

  expect(tableElement).toContainHTML("<td><span>hello</span></td>");
  expect(tableElement).toContainHTML("<td><span>123 main st</span></td>");
  expect(tableElement).toContainHTML("<td><span>10001</span></td>");

});