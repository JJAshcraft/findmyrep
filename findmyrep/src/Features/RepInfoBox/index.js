import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Subheader from "../../Components/Subheader";
import H1 from "../../Components/H1";
import propTypes from "prop-types";
import StyledDiv from "../../Components/StyledDiv";
export const StyledGrid = styled(Grid)`
  position: relative;
  height: auto;
`;

const ListH1 = styled(H1)`
  color: #616470;
  display: inline;
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
            <StyledDiv>
              <p>{firstName || "First Name"}</p>
            </StyledDiv>
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledDiv>
              <p>{lastName || "Last Name"}</p>
            </StyledDiv>
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledDiv>
              <p>{props.memberInfo.district || "District"}</p>
            </StyledDiv>
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledDiv>
              <p>{props.memberInfo.phone || "Phone"}</p>
            </StyledDiv>
          </StyledGrid>

          <StyledGrid item xs={12}>
            <StyledDiv>
              <p>{props.memberInfo.office || "Office"}</p>
            </StyledDiv>
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
