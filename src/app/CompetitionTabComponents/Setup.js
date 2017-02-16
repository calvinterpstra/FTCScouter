import React from 'react';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TeamNumberInputField from './TeamNumberInputField'
import AllianceColorInputField from './AllianceColorInputField'
import MatchNumberInputField from './MatchNumberInputField'

var Setup = React.createClass({
    updateRed1: function (teamNumber) {
        var newState = this.props.currentMatchSetup;
        newState.red1 = teamNumber;
        this.props.handleCurrentMatchSetupUpdate(newState)
    },
    updateRed2: function (teamNumber) {
        var newState = this.props.currentMatchSetup;
        newState.red2 = teamNumber;
        this.props.handleCurrentMatchSetupUpdate(newState)
    },
    updateBlue1: function (teamNumber) {
        var newState = this.props.currentMatchSetup;
        newState.blue1 = teamNumber;
        this.props.handleCurrentMatchSetupUpdate(newState)
    },
    updateBlue2: function (teamNumber) {
        var newState = this.props.currentMatchSetup;
        newState.blue2 = teamNumber;
        this.props.handleCurrentMatchSetupUpdate(newState)
    },
    updateMatchNumber: function (matchNumber) {
        var newState = this.props.currentMatchSetup;
        newState.matchNumber = matchNumber;
        this.props.handleCurrentMatchSetupUpdate(newState)
    },
    render() {
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <MatchNumberInputField handleError={this.props.handleMatchNumberError} handleReady={this.props.handleMatchNumberReady}
                        updateMatchNumber={this.updateMatchNumber}/>
                </div>
                <div style={{ display: 'flex' }}>
                    <TeamNumberInputField name="Red 1" handleError={this.props.handleRed1Error} handleReady={this.props.handleRed1Ready}
                        updateTeamNumber={this.updateRed1}/>
                    <TeamNumberInputField name="Red 2" handleError={this.props.handleRed2Error} handleReady={this.props.handleRed2Ready}
                        updateTeamNumber={this.updateRed2}/>
                </div>
                <div style={{ display: 'flex' }}>
                    <TeamNumberInputField name="Blue 1" handleError={this.props.handleBlue1Error} handleReady={this.props.handleBlue1Ready}
                        updateTeamNumber={this.updateBlue1}/>
                    <TeamNumberInputField name="Blue 2" handleError={this.props.handleBlue2Error} handleReady={this.props.handleBlue2Ready}
                        updateTeamNumber={this.updateBlue2}/>
                </div>
            </div>
        );
    }
});
export default Setup;