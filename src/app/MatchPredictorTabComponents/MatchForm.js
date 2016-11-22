import React from 'react';

import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import * as Colors from 'material-ui/styles/colors';

import CompetitionInputField from './CompetitionInputField';
import TeamNumberInputField from './TeamNumberInputField';
import DataCalculator from './../DataCalculator';
import ScoreCalculator from './../ScoreCalculator';
import StaticResQForm from './../StaticResQForm';

const headerStyle = {
    fontSize: 18,
    fontWeight: 300,
    paddingTop: 0,
    margin: 0,
};

var MatchForm = React.createClass({
    getInitialState() {
        return {
            red1Competition: "All",
            red2Competition: "All",
            blue1Competition: "All",
            blue2Competition: "All",
            red1Error: true,
            red2Error: true,
            blue1Error: true,
            blue2Error: true,
            redScore: "n/a",
            blueScore: "n/a",
            red1: "n/a",
            red2: "n/a",
            blue1: "n/a",
            blue2: "n/a",

            matchDetailView: false,
            viewingScores: "n/a",
            viewingAlliance: "n/a",
        }
    },
    handleToMatchDetailViewRed: function () {
        var newState = this.state;
        newState.matchDetailView = true;
        newState.viewingScores = newState.redScore;
        newState.viewingAlliance = "Red";
        this.setState(newState);
    },
    handleToMatchDetailViewBlue: function () {
        var newState = this.state;
        newState.matchDetailView = true;
        newState.viewingScores = newState.blueScore;
        newState.viewingAlliance = "Blue";
        this.setState(newState);
    },
    handleFromMatchDetailView: function () {
        var newState = this.state;
        newState.matchDetailView = false;
        this.setState(newState);
    },
    handleRed1Ready: function () {
        var newState = this.state;
        newState.red1Error = false;
        this.setState(newState);
    },
    handleRed2Ready: function () {
        var newState = this.state;
        newState.red2Error = false;
        this.setState(newState);
    },
    handleBlue1Ready: function () {
        var newState = this.state;
        newState.blue1Error = false;
        this.setState(newState);
    },
    handleBlue2Ready: function () {
        var newState = this.state;
        newState.blue2Error = false;
        this.setState(newState);
    },
    handleRed1Error: function () {
        var newState = this.state;
        newState.red1Error = true;
        this.setState(newState);
    },
    handleRed2Error: function () {
        var newState = this.state;
        newState.red2Error = true;
        this.setState(newState);
    },
    handleBlue1Error: function () {
        var newState = this.state;
        newState.blue1Error = true;
        this.setState(newState);
    },
    handleBlue2Error: function () {
        var newState = this.state;
        newState.blue2Error = true;
        this.setState(newState);
    },
    updateRed1: function (teamNumber) {
        var newState = this.state;
        newState.red1 = teamNumber;
        this.setState(newState);
    },
    updateRed2: function (teamNumber) {
        var newState = this.state;
        newState.red2 = teamNumber;
        this.setState(newState);
    },
    updateBlue1: function (teamNumber) {
        var newState = this.state;
        newState.blue1 = teamNumber;
        this.setState(newState);
    },
    updateBlue2: function (teamNumber) {
        var newState = this.state;
        newState.blue2 = teamNumber;
        this.setState(newState);
    },
    updateRed1Competition: function (competitionName) {
        var newState = this.state;
        newState.red1Competition = competitionName;
        this.setState(newState);
    },
    updateRed2Competition: function (competitionName) {
        var newState = this.state;
        newState.red2Competition = competitionName;
        this.setState(newState);
    },
    updateBlue1Competition: function (competitionName) {
        var newState = this.state;
        newState.blue1Competition = competitionName;
        this.setState(newState);
    },
    updateBlue2Competition: function (competitionName) {
        var newState = this.state;
        newState.blue2Competition = competitionName;
        this.setState(newState);
    },
    calculateOutcome: function () {
        var winner = ""
        var red1Matches = {};
        var red2Matches = {};
        var blue1Matches = {};
        var blue2Matches = {};

        if (this.state.red1Competition == "All") {
            red1Matches = this.props.matches;
        }
        else {
            red1Matches = this.props.getMatchesbyCompetition(this.state.red1Competition);
        }
        if (this.state.red2Competition == "All") {
            red2Matches = this.props.matches;
        }
        else {
            red2Matches = this.props.getMatchesbyCompetition(this.state.red2Competition);
        }
        if (this.state.blue1Competition == "All") {
            blue1Matches = this.props.matches;
        }
        else {
            blue1Matches = this.props.getMatchesbyCompetition(this.state.blue1Competition);
        }
        if (this.state.blue2Competition == "All") {
            blue2Matches = this.props.matches;
        }
        else {
            blue2Matches = this.props.getMatchesbyCompetition(this.state.blue2Competition);
        }

        var red1DataCalculator = new DataCalculator(red1Matches);
        var red2DataCalculator = new DataCalculator(red2Matches);
        var blue1DataCalculator = new DataCalculator(blue1Matches);
        var blue2DataCalculator = new DataCalculator(blue2Matches);

        const red1Score = red1DataCalculator.getAverageSubPartialMatchForTeam(this.state.red1);
        const red2Score = red1DataCalculator.getAverageSubPartialMatchForTeam(this.state.red2);
        const blue1Score = blue1DataCalculator.getAverageSubPartialMatchForTeam(this.state.blue1);
        const blue2Score = blue1DataCalculator.getAverageSubPartialMatchForTeam(this.state.blue2);

        var newState = this.state;
        newState.redScore = red1DataCalculator.combineSubScores(red1Score, red2Score);
        newState.blueScore = red1DataCalculator.combineSubScores(blue1Score, blue2Score);;
        this.setState(newState);
    },
    render() {
        if (this.state.matchDetailView) {
            const matchSelected = {
                allianceColor: this.state.viewingAlliance,
                scores: this.state.viewingScores,
                red1: this.state.red1,
                red2: this.state.red2,
                blue1: this.state.blue1,
                blue2: this.state.blue2,
            };
            return (
                <div>
                    <StaticResQForm matchSelected={matchSelected}/><br/>
                    <RaisedButton label="Back" secondary={true} onTouchTap={this.handleFromMatchDetailView}/><br/><br/><br/>
                </div>
            );
        }
        else {
            var winner = ""
            var red1Score = "n/a"
            var red2Score = "n/a"
            var blue1Score = "n/a"
            var blue2Score = "n/a"
            var redTotal = "n/a"
            var blueTotal = "n/a"
            if (this.state.redScore == -1 || this.state.blueScore == -1) {
                winner = "Not enough data";
            }
            else if (this.state.redScore == "n/a" || this.state.blueScore == "n/a") {
                winner = "Calculate match first";
            }
            else {
                const redScoreCalculator = new ScoreCalculator(this.state.redScore);
                const blueScoreCalculator = new ScoreCalculator(this.state.blueScore);

                if (redScoreCalculator.getTotalScore() > blueScoreCalculator.getTotalScore()) {
                    winner = "Red Alliance Wins!";
                }
                else if (redScoreCalculator.getTotalScore() < blueScoreCalculator.getTotalScore()) {
                    winner = "Blue Alliance Wins!";
                }
                else {
                    winner = "Tie!";
                }

                red1Score = redScoreCalculator.getPartialScore1();
                red2Score = redScoreCalculator.getPartialScore2();
                blue1Score = blueScoreCalculator.getPartialScore1();
                blue2Score = blueScoreCalculator.getPartialScore2();
                redTotal = redScoreCalculator.getTotalScore();
                blueTotal = blueScoreCalculator.getTotalScore();
            }

            var red1 = this.state.red1
            if (this.state.red1 == "n/a") {
                red1 = ""
            }
            var red2 = this.state.red2
            if (this.state.red2 == "n/a") {
                red2 = ""
            }
            var blue1 = this.state.blue1
            if (this.state.blue1 == "n/a") {
                blue1 = ""
            }
            var blue2 = this.state.blue2
            if (this.state.blue2 == "n/a") {
                blue2 = ""
            }

            return (
                <div>
                    <div style={{ display: 'flex' }}>
                        <TeamNumberInputField name="Red 1" handleError={this.handleRed1Error} handleReady={this.handleRed1Ready}
                            updateTeamNumber={this.updateRed1} text={red1}/>
                        <CompetitionInputField competition={this.state.red1Competition} 
                            competitions={this.props.getCompetitionswithTeamNumber(this.state.red1)} 
                            updateCompetition={this.updateRed1Competition}/>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <TeamNumberInputField name="Red 2" handleError={this.handleRed2Error} handleReady={this.handleRed2Ready}
                            updateTeamNumber={this.updateRed2} text={red2}/>
                        <CompetitionInputField competition={this.state.red2Competition} 
                            competitions={this.props.getCompetitionswithTeamNumber(this.state.red2)} 
                            updateCompetition={this.updateRed2Competition}/>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <TeamNumberInputField name="Blue 1" handleError={this.handleBlue1Error} handleReady={this.handleBlue1Ready}
                            updateTeamNumber={this.updateBlue1} text={blue1}/>
                        <CompetitionInputField competition={this.state.blue1Competition} 
                            competitions={this.props.getCompetitionswithTeamNumber(this.state.blue1)} 
                            updateCompetition={this.updateBlue1Competition}/>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <TeamNumberInputField name="Blue 2" handleError={this.handleBlue2Error} handleReady={this.handleBlue2Ready}
                            updateTeamNumber={this.updateBlue2} text={blue2}/>
                        <CompetitionInputField competition={this.state.blue2Competition}
                            competitions={this.props.getCompetitionswithTeamNumber(this.state.blue2)} 
                            updateCompetition={this.updateBlue2Competition}/>
                    </div><br/><br/>
                    <RaisedButton label="Calculate match winner" secondary={true} disabled={this.state.red1Error || this.state.red2Error
                        || this.state.blue1Error || this.state.blue2Error} onTouchTap={this.calculateOutcome}/><br/><br/>
                    <Divider/>
                    <Subheader> Outcome: </Subheader>
                    <p>
                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> Winner: </span>
                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {winner} </span><br/><br/>

                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> Red Alliance's score: </span>
                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {redTotal} </span><br/>

                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> {this.state.red1}'s individual score: </span>
                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {red1Score} </span><br/>

                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> {this.state.red2}'s individual score: </span>
                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {red2Score} </span><br/><br/>

                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> Blue Alliance's score: </span>
                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {blueTotal} </span><br/>

                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> {this.state.blue1}'s individual score: </span>
                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {blue1Score} </span><br/>

                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> {this.state.blue2}'s individual score: </span>
                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {blue2Score} </span><br/><br/>

                    </p>
                    <RaisedButton label="See Red's detailed scores" backgroundColor={Colors.red500} labelColor={Colors.white}
                        disabled={this.state.redScore == "n/a" || this.state.blueScore == "n/a" || this.state.redScore == -1 || this.state.blueScore == -1} 
                        onTouchTap={this.handleToMatchDetailViewRed}/><br/><br/>
                    <RaisedButton label="See Blue's detailed scores" secondary={true} disabled={this.state.redScore == "n/a" || this.state.blueScore == "n/a"
                        || this.state.redScore == -1 || this.state.blueScore == -1} onTouchTap={this.handleToMatchDetailViewBlue}/><br/>
                    
                    
                    <br/><br/><br/><br/>
                </div>
            );
        }
    }
});
export default MatchForm;