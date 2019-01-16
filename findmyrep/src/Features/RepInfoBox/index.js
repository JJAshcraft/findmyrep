import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Subheader from "../../Components/Subheader";
import H1 from "../../Components/H1";
import propTypes from "prop-types";

const StyledGrid = styled(Grid)`
  position: relative;
  height: auto;
`;

const ListH1 = styled(H1)`
  color: #616470;
  display: inline;
`;

const StyledInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: none;
  color: grey;
  background-color: #f8f8f9;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  height: 45px;
  padding: 0 5px 0 5px;
  overflow-x: auto;
  overflow-y: hidden;
  p {
    white-space: nowrap;
    vertical-align: middle;
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
        <Subheader>
          <ListH1>Info </ListH1>
        </Subheader>
        <Grid
          container
          alignItems="stretch"
          direction="column"
          justify="space-evenly"
        >
          <StyledGrid item xs={12}>
            <StyledInput>
              <p>{firstName || "First Name"}</p>
            </StyledInput>
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledInput>
              <p>{lastName || "Last Name"}</p>
            </StyledInput>
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledInput>
              <p>{props.memberInfo.district || "District"}</p>
            </StyledInput>
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledInput>
              <p>{props.memberInfo.phone || "Phone"}</p>
            </StyledInput>
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledInput>
              <p>{props.memberInfo.office || "Office"}</p>
            </StyledInput>
          </StyledGrid>
        </Grid>
      </StyledGrid>
    </Grid>
  );
};

export default RepInfoBox;

RepInfoBox.propTypes = {
  memberInfo: propTypes.object
};
