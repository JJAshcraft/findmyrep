import React, { Fragment } from "react";
import RepTable from "../RepTable";
import RepInfoBox from "../RepInfoBox";
import Grid from "@material-ui/core/Grid";
import propTypes from "prop-types";

const MainSection = props => {
  return (
    <Fragment>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <RepTable
            data={props.data}
            title={props.title}
            updateInfoBox={props.updateInfoBox}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RepInfoBox memberInfo={props.memberInfo} />
        </Grid>
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
