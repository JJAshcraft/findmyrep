import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Header from "./index.js";

test("Header component renders with proper styling", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
