import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import HR from "./index.js";

test("HR component renders with proper styling", () => {
  const tree = renderer.create(<HR />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("border", "1px solid #eee");
});
