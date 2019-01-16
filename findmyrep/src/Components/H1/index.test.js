import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import H1 from "./index.js";

test("H1 component renders with proper styling", () => {
  const tree = renderer.create(<H1 />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("color", "#06a7ed");
  expect(tree).toHaveStyleRule("font-size", "20px");
  expect(tree).toHaveStyleRule("font-weight", "500");
});
