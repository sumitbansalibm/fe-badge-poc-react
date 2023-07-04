import React from "react";
import { within } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

const data = [
  { id: 1, title: "React POC", body: "It's a react poc for badge" },
  { id: 2, title: "React JS POC", body: "It's a react JS poc for badge" },
];

test("renders table headers", () => {
  render(<Table data={data} />);
  const headers = ["ID", "Title", "Body"];
  headers.forEach((header) =>
    expect(screen.getByText(header)).toBeInTheDocument()
  );
});

test("renders correct numbers of columns", () => {
  render(<Table data={data} />);
  const columns = screen.getAllByRole("columnheader");
  expect(columns.length).toBe(3);
});

test("renders correct numbers of rows", () => {
  render(<Table data={data} />);
  const rows = screen.getAllByRole("row");
  //   1 row for header + 2 rows for data
  expect(rows.length).toBe(3);
});
