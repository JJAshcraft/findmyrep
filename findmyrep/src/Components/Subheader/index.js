import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
  padding: 10px 0 10px 0;
`;

const Subheader = props => {
  return (
    <StyledGrid container spacing={32}>
      <Grid item xs={12}>
        {props.children}
      </Grid>
    </StyledGrid>
  );
};

export default Subheader;
