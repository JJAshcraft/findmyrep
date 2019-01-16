import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import MemberH1 from "./index.js";

test("MemberH1 component renders with proper styling", () => {
  const tree = renderer.create(<MemberH1 />).toJSON();
  expect(tree).toMatchSnapshot();
});
