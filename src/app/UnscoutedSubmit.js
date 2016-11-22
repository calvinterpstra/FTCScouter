import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const headerStyle1 = {
    fontSize: 24,
    fontWeight: 400,
    margin: 0,
};

var UnscoutedSubmit = React.createClass({
    render() {
        return (
            <div>
                <RaisedButton label="Submit" primary={true} onTouchTap={this.props.handleSubmission}/>
                <FlatButton label="Cancel" primary={true} onTouchTap={this.props.handleCancelUnscouted}/>
            </div>
        );
    }
});

export default UnscoutedSubmit;