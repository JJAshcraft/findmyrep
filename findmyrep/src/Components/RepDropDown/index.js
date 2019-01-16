import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 240
  },
  selectEmpty: {
    marginTop: 0
  }
});

class RepDropDown extends Component {
  state = {
    title: "",
    labelWidth: 0
  };

  handleChange = e => {
    const name = e.target.name;
    this.props.disableForm(e.target.value);
    this.setState({ [name]: e.target.value });
  };

  render(props) {
    const { classes } = this.props;
    return (
      <Fragment>
        <FormControl className={classes.formControl}>
          <NativeSelect
            value={this.state.age}
            name="title"
            onChange={this.handleChange}
            className={classes.selectEmpty}
          >
            <option value="" />
            <option value={"Representatives"}>Representatives</option>
            <option value={"Senators"}>Senators</option>
          </NativeSelect>
        </FormControl>
      </Fragment>
    );
  }
}

export default withStyles(styles)(RepDropDown);
