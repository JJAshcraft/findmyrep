import React, { Fragment } from "react";
import styled from "styled-components";
import H1 from "../../Components/H1";
import HR from "../../Components/HR";
const HeaderH1 = styled(H1)`
  padding-bottom: 45px;
  font-weight: 700;
`;

const Header = props => {
  return (
    <Fragment>
      <HeaderH1>Who's My Representative?</HeaderH1>
      <HR />
    </Fragment>
  );
};

export default Header;
