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
    name: "hai",
    labelWidth: 0
  };

  handleChange = name => event => {
    this.props.disableForm(event.target.value);
    this.setState({ [name]: event.target.value });
  };

  render(props) {
    const { classes } = this.props;
    return (
      <Fragment>
        <FormControl className={classes.formControl}>
          <NativeSelect
            value={this.state.age}
            onChange={this.handleChange("title")}
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
