import React from 'react';
import TextField from 'material-ui/TextField';

var TeamNumberInputField = React.createClass({
  getInitialState() {
    return {
      errorText: '',
    }
  },
  checkForErrors: function (event) {
    if (event.target.value == parseInt(event.target.value)) {
      if (event.target.value > 0) {
        this.setState({ errorText: '' })
        this.props.handleReady();
        this.props.updateTeamNumber(parseInt(event.target.value))
      }
      else {
        this.setState({ errorText: 'Team number must be greater than 0' })
        this.props.handleError();
      }
    }
    else {
      this.setState({ errorText: 'Team number must be an integer' })
      this.props.handleError();
    }
  },
  render() {
    return (
      <TextField hintText="Team Number"
        floatingLabelText={this.props.name}
        defaultValue={this.props.text}
        name={this.props.name}
        errorText= {this.state.errorText}
        onChange={this.checkForErrors}
        type="number"
        style={{ width: 110, marginRight: 30 }}
        />
    )
  }
});

export default TeamNumberInputField;