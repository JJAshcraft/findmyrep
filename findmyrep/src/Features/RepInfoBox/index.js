import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Subheader from "../../Components/Subheader";
import H1 from "../../Components/H1";

const StyledGrid = styled(Grid)`
  position: relative;
  height: auto;
`;

const ListH1 = styled(H1)`
  color: #616470;
  display: inline;
`;

const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  border: none;
  color: grey;
  background-color: #f8f8f9;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  height: 40px;
  padding: 0 5px 0 5px;
  &::placeholder {
    color: #b7b6b5;
  }
`;

const RepInfoBox = props => {
  let names, firstName, lastName;
  if (props.memberInfo.name) {
    names = props.memberInfo.name;
    let name = names.split(" ");

    firstName = name[0];
    lastName = name[1];
  }

  return (
    <Grid container spacing={24}>
      <StyledGrid item xs={12}>
        <Subheader title={props.title}>
          <ListH1>Info </ListH1>
        </Subheader>
        <Grid
          container
          alignItems="stretch"
          direction="column"
          justify="space-evenly"
        >
          <StyledGrid item xs={12}>
            <StyledInput
              readOnly
              value={firstName || "First Name"}
              placeholder="First Name"
            />
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledInput
              readOnly
              value={lastName || "Last Name"}
              placeholder="Last Name"
            />
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledInput
              readOnly
              value={props.memberInfo.district}
              placeholder="District"
            />
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledInput
              readOnly
              value={props.memberInfo.phone}
              placeholder="Phone"
            />
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledInput
              readOnly
              value={props.memberInfo.office}
              placeholder="Office"
            />
          </StyledGrid>
        </Grid>
      </StyledGrid>
    </Grid>
  );
};

export default RepInfoBox;

RepInfoBox.defaultProps = {
  memberInfo: {
    phone: "Phone",
    office: "Office",
    district: "District",
    name: "First Last"
  }
};
