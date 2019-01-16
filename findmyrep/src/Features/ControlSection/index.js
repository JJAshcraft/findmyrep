import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import RepDropDown from "../../Components/RepDropDown";
import StateDropDown from "../../Components/StateDropDown";
import FieldSet from "../../Components/FieldSet";
import SubmitButton from "../../Components/SubmitButton";
import propTypes from "prop-types";

class ControlSection extends Component {
  constructor() {
    super();
    this.state = {
      USState: null,
      stateDisabled: true
    };
  }
  static propTypes = {
    changeTitle: PropTypes.func,
    changeState: PropTypes.func,
    handleSubmit: PropTypes.func,
    disabled: PropTypes.bool
  };

  disableForm = title => {
    if (title !== "") {
      this.props.changeTitle(title);
      this.setState({ stateDisabled: false });
    } else {
      this.props.changeTitle(title);
      this.setState({ stateDisabled: true });
    }
  };

  render() {
    return (
      <Fragment>
        <Grid justify="flex-start" container spacing={16}>
          <Grid item xs={12} sm={12} md={6}>
            <FieldSet>
              <legend>First, select a title</legend>
              <RepDropDown disableForm={this.disableForm} />
            </FieldSet>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <FieldSet>
              <legend>Next, select a state</legend>
              <StateDropDown
                changeState={this.props.changeState}
                disabled={this.state.stateDisabled ? true : false}
              />
            </FieldSet>
          </Grid>
          <Grid item xs={12}>
            <SubmitButton
              onClick={this.props.handleSubmit}
              disabled={this.props.disabled}
            >
              Submit
            </SubmitButton>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default ControlSection;

ControlSection.propTypes = {
  changeTitle: propTypes.func,
  changeState: propTypes.func,
  disabled: propTypes.bool
};
