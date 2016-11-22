import React from 'react';
import StaticResQForm from './../StaticResQForm';
import * as Colors from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

var MatchDetails = React.createClass({
    handleAddScoutingEntry: function () {
        if (!this.props.signedIn) {
            this.props.sendMessage("Can not scout without signing in")
        }
        else {
            var newCurrentPartialMatch = this.props.matchSelected;
            newCurrentPartialMatch.user = this.props.user.email;
            newCurrentPartialMatch.totalScore = 1;
            newCurrentPartialMatch.partialScore1 = 0;
            newCurrentPartialMatch.partialScore2 = 0;
            newCurrentPartialMatch.scores = {
                autonButtonScore1: 0,
                autonClimbersScore1: 0,
                autonMountainScore1: 0,
                teleopClimbersScore1: 0,
                highBucketScore1: 0,
                midBucketScore1: 0,
                lowBucketScore1: 0,
                floorGoalScore1: 0,
                lowZiplineClimberScore1: 0,
                midZiplineClimberScore1: 0,
                highZiplineClimberScore1: 0,
                allClearScore1: 0,
                endgameMountainScore1: 0,
                autonButtonScore2: 0,
                autonClimbersScore2: 0,
                autonMountainScore2: 0,
                teleopClimbersScore2: 0,
                highBucketScore2: 0,
                midBucketScore2: 0,
                lowBucketScore2: 0,
                floorGoalScore2: 0,
                lowZiplineClimberScore2: 0,
                midZiplineClimberScore2: 0,
                highZiplineClimberScore2: 0,
                allClearScore2: 0,
                endgameMountainScore2: 0
            }
            this.props.handleCurrentPartialMatchUpdate(newCurrentPartialMatch);
            this.props.handleToScout();
        }
    },
    handleModifyScoutingEntry: function () {
        if (!this.props.signedIn) {
            this.props.sendMessage("Can not scout without signing in");
        }
        else {
            var newCurrentPartialMatch = this.props.matchSelected;
            newCurrentPartialMatch.user = this.props.user.email;
            this.props.handleCurrentPartialMatchUpdate(newCurrentPartialMatch);
            this.props.handleToScout();
        }
    },
    handleModifyOwnScoutingEntry: function () {
        if (!this.props.signedIn) {
            this.props.sendMessage("Can not scout without signing in")
        }
        else {
            const matchSelected = this.props.matchSelected
            var thisMatch = {
                matchNumber: matchSelected.matchNumber,
                red1: matchSelected.red1,
                red2: matchSelected.red2,
                blue1: matchSelected.blue1,
                blue2: matchSelected.blue2,
            }
            var thisPartialMatch = {
                time: this.props.getTime(),
                allianceColor: matchSelected.allianceColor,
                totalScore: matchSelected.totalScore,
                user: matchSelected.user,
                partialScore1: matchSelected.partialScore1,
                partialScore2: matchSelected.partialScore2,
                scores: matchSelected.scores
            }
            this.props.removePartialMatch(thisMatch, thisPartialMatch)
            this.props.handleCurrentPartialMatchUpdate(this.props.matchSelected);
            this.props.handleToScout()
        }
    },
    render() {
        if (this.props.user.email == this.props.matchSelected.user) {
            if (this.props.matchSelected.allianceColor == "Red") {
                return (
                    <div>
                        <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0, fontSize: 20, }}>
                            <span style={{ color: Colors.red700 }}> Red 1: {this.props.matchSelected.red1}</span>,
                            <span style={{ color: Colors.red700 }}> Red 2: {this.props.matchSelected.red2}</span>
                        </p><br/>
                        <StaticResQForm matchSelected={this.props.matchSelected}/><br/>
                        <div style={{ display: 'flex' }}>
                            <RaisedButton label="Modify your entry" secondary={true} disabled={false} onTouchTap={this.handleModifyOwnScoutingEntry}/>
                            <FlatButton label="Back" primary={true} onTouchTap={this.props.handleToMatches}/>
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
                        <div style={{ display: 'flex' }}>
                            <RaisedButton label="Modify your entry" secondary={true} disabled={false} onTouchTap={this.handleModifyOwnScoutingEntry}/>
                            <FlatButton label="Back" primary={true} onTouchTap={this.props.handleToMatches}/>
                        </div>
                        <br/><br/><br/>
                    </div>
                );
            }
        }
        else {
            if (this.props.matchSelected.allianceColor == "Red") {
                return (
                    <div>
                        <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0, fontSize: 20, }}>
                            <span style={{ color: Colors.red700 }}> Red 1: {this.props.matchSelected.red1}</span>,
                            <span style={{ color: Colors.red700 }}> Red 2: {this.props.matchSelected.red2}</span>
                        </p><br/>
                        <StaticResQForm matchSelected={this.props.matchSelected}/><br/>
                        <div style={{ display: 'flex' }}>
                            <RaisedButton label="Add an Entry" primary={true} disabled={false} onTouchTap={this.handleAddScoutingEntry} 
                                style={{ marginRight: 15 }}/>
                            <RaisedButton label="Modify Entry" secondary={true} disabled={false} onTouchTap={this.handleModifyScoutingEntry}/>
                        </div> <br/>
                        <FlatButton label="Back" primary={true} onTouchTap={this.props.handleToMatches}/>
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
                        <div style={{ display: 'flex' }}>
                            <RaisedButton label="Add an Entry" primary={true} disabled={false} onTouchTap={this.handleAddScoutingEntry} 
                                style={{ marginRight: 15 }}/>
                            <RaisedButton label="Modify Entry" secondary={true} disabled={false} onTouchTap={this.handleModifyScoutingEntry}/>
                        </div><br/>
                        <FlatButton label="Back" primary={true} onTouchTap={this.props.handleToMatches}/>
                        <br/><br/><br/>
                    </div>
                );
            }
        }

    }
});
export default MatchDetails;