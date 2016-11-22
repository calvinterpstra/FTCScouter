import React from 'react';
import TextField from 'material-ui/TextField';

var MatchNumberInputField = React.createClass({
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
        this.props.updateMatchNumber(parseInt(event.target.value))
      }
      else {
        this.setState({ errorText: 'Match number must be greater than 0' })
        this.props.handleError();
      }
    }
    else {
      this.setState({ errorText: 'Match number must be an integer' })
      this.props.handleError();
    }
  },
  render() {
    return (
      <TextField hintText="Match Number"
        floatingLabelText="Match Number"
        name="Match Number"
        errorText= {this.state.errorText}
        onChange={this.checkForErrors}
        type="number"
        style={{ width: 110 }}
        />
    )
  }
});

export default MatchNumberInputField;