import React from 'react';
import StaticResQForm from './../StaticResQForm';
import * as Colors from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

var TeamsMatchDetails = React.createClass({
    render() {
        if (this.props.matchSelected.allianceColor == "Red") {
            return (
                <div>
                    <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0, fontSize: 20, }}>
                        <span style={{ color: Colors.red700 }}> Red 1: {this.props.matchSelected.red1}</span>,
                        <span style={{ color: Colors.red700 }}> Red 2: {this.props.matchSelected.red2}</span>
                    </p><br/>
                    <StaticResQForm matchSelected={this.props.matchSelected}/><br/>
                    <div>
                        <FlatButton label="Back" primary={true} onTouchTap={this.props.handleToTeamsMatches}/>
                    </div>
                    <br/><br/><br/>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0, fontSize: 20, }}>
                        <span style={{ color: Colors.blue700 }}> Blue 1: {this.props.matchSelected.blue1}</span>,
                        <span style={{ color: Colors.blue700 }}> Blue 2: {this.props.matchSelected.blue2} </span>
                    </p><br/>
                    <StaticResQForm matchSelected={this.props.matchSelected}/><br/>
                    <div>
                        <FlatButton label="Back" primary={true} onTouchTap={this.props.handleToTeamsMatches}/>
                    </div>
                    <br/><br/><br/>
                </div>
            );
        }
    }
});
export default TeamsMatchDetails;