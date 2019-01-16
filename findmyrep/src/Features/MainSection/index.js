import React, { Fragment } from "react";
import RepTable from "../RepTable";
import RepInfoBox from "../RepInfoBox";
import Grid from "@material-ui/core/Grid";
import propTypes from "prop-types";
import styled from "styled-components";

/* Grid items modified so order can be switched on mobile view */
const GridItemRepTable = styled(Grid)`
  order: 1;
  @media (min-width: 764px) {
    order: 0;
  }
`;

const GridItemRepInfoBox = styled(Grid)`
  order: 0;
  @media (min-width: 764px) {
    order: 1;
  }
`;

const MainSection = props => {
  return (
    <Fragment>
      <Grid container spacing={24}>
        <GridItemRepTable item xs={12} sm={6}>
          <RepTable
            data={props.data}
            title={props.title}
            updateInfoBox={props.updateInfoBox}
          />
        </GridItemRepTable>
        <GridItemRepInfoBox item xs={12} sm={6}>
          <RepInfoBox memberInfo={props.memberInfo} />
        </GridItemRepInfoBox>
      </Grid>
    </Fragment>
  );
};

export default MainSection;

MainSection.propTypes = {
  data: propTypes.array,
  title: propTypes.string,
  updateInfoBox: propTypes.func,
  memberInfo: propTypes.object
};
