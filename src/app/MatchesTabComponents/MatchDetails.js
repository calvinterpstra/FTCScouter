import React from 'react';
import StaticVelVortexForm from './../StaticVelVortexForm';
import * as Colors from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

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
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,

                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
            },
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
                        <FloatingActionButton secondary={true} mini={true} style={{ margin: 0, top: 'auto', right: 20, bottom: 20, left: 'auto', position: 'fixed', zIndex: 1100 }}
                            onTouchTap={this.props.handleToMatches}>
                            <ArrowBack />
                        </FloatingActionButton>
                        <StaticVelVortexForm matchSelected={this.props.matchSelected}/><br/>
                        <div style={{ display: 'flex' }}>
                            <RaisedButton label="Modify your entry" secondary={true} disabled={false} onTouchTap={this.handleModifyOwnScoutingEntry}
                                style={{ marginLeft: ((screen.width * 0.5) - 100) }}/>
                        </div>
                        <br/><br/><br/><br/>
                    </div>
                );
            }
            else {
                return (
                    <div>
                        <FloatingActionButton secondary={true} mini={true} style={{ margin: 0, top: 'auto', right: 20, bottom: 20, left: 'auto', position: 'fixed', zIndex: 1100 }}
                            onTouchTap={this.props.handleToMatches}>
                            <ArrowBack />
                        </FloatingActionButton>
                        <StaticVelVortexForm matchSelected={this.props.matchSelected}/><br/>
                        <div style={{ display: 'flex' }}>
                            <RaisedButton label="Modify your entry" secondary={true} disabled={false} onTouchTap={this.handleModifyOwnScoutingEntry}
                                style={{ marginLeft: ((screen.width * 0.5) - 100) }}/>
                        </div>
                        <br/><br/><br/><br/>
                    </div>
                );
            }
        }
        else {
            if (this.props.matchSelected.allianceColor == "Red") {
                return (
                    <div>
                        <FloatingActionButton secondary={true} mini={true} style={{ margin: 0, top: 'auto', right: 20, bottom: 20, left: 'auto', position: 'fixed', zIndex: 1100 }}
                            onTouchTap={this.props.handleToMatches}>
                            <ArrowBack />
                        </FloatingActionButton>
                        <StaticVelVortexForm matchSelected={this.props.matchSelected}/><br/>
                        <div style={{ display: 'flex' }}>
                            <RaisedButton label="Add an Entry" primary={true} disabled={false} onTouchTap={this.handleAddScoutingEntry}
                                style={{ marginRight: 15, marginLeft: ((screen.width * 0.5) - 155) }}/>
                            <RaisedButton label="Modify Entry" secondary={true} disabled={false} onTouchTap={this.handleModifyScoutingEntry}/>
                        </div>
                        <br/><br/><br/><br/>
                    </div>
                );
            }
            else {
                return (
                    <div>
                        <FloatingActionButton secondary={true} mini={true} style={{ margin: 0, top: 'auto', right: 20, bottom: 20, left: 'auto', position: 'fixed', zIndex: 1100 }}
                            onTouchTap={this.props.handleToMatches}>
                            <ArrowBack />
                        </FloatingActionButton>
                        <StaticVelVortexForm matchSelected={this.props.matchSelected}/><br/>
                        <div style={{ display: 'flex' }}>
                            <RaisedButton label="Add an Entry" primary={true} disabled={false} onTouchTap={this.handleAddScoutingEntry}
                                style={{ marginRight: 15, marginLeft: ((screen.width * 0.5) - 155) }}/>
                            <RaisedButton label="Modify Entry" secondary={true} disabled={false} onTouchTap={this.handleModifyScoutingEntry}/>
                        </div>
                        <br/><br/><br/><br/>
                    </div>
                );
            }
        }

    }
});
export default MatchDetails;


                        // <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0, fontSize: 20, }}>
                        //     <span style={{ color: Colors.red700 }}> Red 1: {this.props.matchSelected.red1}</span>,
                        //     <span style={{ color: Colors.red700 }}> Red 2: {this.props.matchSelected.red2}</span>
                        // </p><br/>

                        // <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0, fontSize: 20, }}>
                        //     <span style={{ color: Colors.blue700 }}> Blue 1: {this.props.matchSelected.blue1}</span>,
                        //     <span style={{ color: Colors.blue700 }}> Blue 2: {this.props.matchSelected.blue2} </span>
                        // </p><br/>


                        // <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0, fontSize: 20, }}>
                        //     <span style={{ color: Colors.red700 }}> Red 1: {this.props.matchSelected.red1}</span>,
                        //     <span style={{ color: Colors.red700 }}> Red 2: {this.props.matchSelected.red2}</span>
                        // </p><br/>
                        
                        // <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0, fontSize: 20, }}>
                        //     <span style={{ color: Colors.blue700 }}> Blue 1: {this.props.matchSelected.blue1}</span>,
                        //     <span style={{ color: Colors.blue700 }}> Blue 2: {this.props.matchSelected.blue2} </span>
                        // </p><br/>