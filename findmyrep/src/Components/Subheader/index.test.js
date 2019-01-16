import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Subheader from "./index.js";

test("HR component renders with proper styling", () => {
  const tree = renderer.create(<Subheader />).toJSON();
  expect(tree).toMatchSnapshot();
});
