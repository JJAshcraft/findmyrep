import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import getUSStates from "../../utilities/utilities";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 260
  },
  selectEmpty: {
    marginTop: 0
  }
});

class StateDropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      USState: "",

      labelWidth: 0
    };
  }

  handleChange = e => {
    const name = e.target.name;
    this.props.changeState(e.target.value);
    this.setState({ [name]: e.target.value });
  };
  render() {
    const { classes } = this.props;
    const states = getUSStates();
    return (
      <Fragment>
        <FormControl className={classes.formControl}>
          <NativeSelect
            disabled={this.props.disabled}
            value={this.state.age}
            name="USState"
            onChange={this.handleChange}
            className={classes.selectEmpty}
          >
            <option value="" />
            {states.map(state => {
              return (
                <option key={state} value={state}>
                  {state}
                </option>
              );
            })}
          </NativeSelect>
        </FormControl>
      </Fragment>
    );
  }
}

export default withStyles(styles)(StateDropDown);
