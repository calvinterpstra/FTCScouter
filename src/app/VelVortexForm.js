import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import ScoreLabel from './VelVortexFormComponents/ScoreLabel';
import Autonomous from './VelVortexFormComponents/Autonomous';
import Teleop from './VelVortexFormComponents/Teleop';
import Endgame from './VelVortexFormComponents/Endgame';
import ScoreCalculator from './ScoreCalculator'
import * as Colors from 'material-ui/styles/colors';

const headerStyle = {
    fontSize: 24,
    fontWeight: 400,
    margin: 0,
};

var VelVortexForm = React.createClass({
    handleScoreChange: function (score, scoreType) {
        switch (scoreType) {
            case "autonButtonsScore1":
                var s = this.props.currentPartialMatch.scores;
                s.autonButtonsScore1 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "autonParkingScore1":
                var s = this.props.currentPartialMatch.scores;
                s.autonParkingScore1 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "autonCenterVortexScore1":
                var s = this.props.currentPartialMatch.scores;
                s.autonCenterVortexScore1 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "autonCornerVortexScore1":
                var s = this.props.currentPartialMatch.scores;
                s.autonCornerVortexScore1 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "autonCapBallScore1":
                var s = this.props.currentPartialMatch.scores;
                s.autonCapBallScore1 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "centerVortexScore1":
                var s = this.props.currentPartialMatch.scores;
                s.centerVortexScore1 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "cornerVortexScore1":
                var s = this.props.currentPartialMatch.scores;
                s.cornerVortexScore1 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "capBallScore1":
                var s = this.props.currentPartialMatch.scores;
                s.capBallScore1 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "teleopButtonAllianceNearScore1":
                var s = this.props.currentPartialMatch.scores;
                s.teleopButtonAllianceNearScore1 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "teleopButtonAllianceFarScore1":
                var s = this.props.currentPartialMatch.scores;
                s.teleopButtonAllianceFarScore1 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "teleopButtonOpponentNearScore1":
                var s = this.props.currentPartialMatch.scores;
                s.teleopButtonOpponentNearScore1 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "teleopButtonOpponentFarScore1":
                var s = this.props.currentPartialMatch.scores;
                s.teleopButtonOpponentFarScore1 = parseInt(score);
                this.updateCurrentScore(s);
                break;

            case "autonButtonsScore2":
                var s = this.props.currentPartialMatch.scores;
                s.autonButtonsScore2 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "autonParkingScore2":
                var s = this.props.currentPartialMatch.scores;
                s.autonParkingScore2 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "autonCenterVortexScore2":
                var s = this.props.currentPartialMatch.scores;
                s.autonCenterVortexScore2 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "autonCornerVortexScore2":
                var s = this.props.currentPartialMatch.scores;
                s.autonCornerVortexScore2 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "autonCapBallScore2":
                var s = this.props.currentPartialMatch.scores;
                s.autonCapBallScore2 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "centerVortexScore2":
                var s = this.props.currentPartialMatch.scores;
                s.centerVortexScore2 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "cornerVortexScore2":
                var s = this.props.currentPartialMatch.scores;
                s.cornerVortexScore2 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "capBallScore2":
                var s = this.props.currentPartialMatch.scores;
                s.capBallScore2 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "teleopButtonAllianceNearScore2":
                var s = this.props.currentPartialMatch.scores;
                s.teleopButtonAllianceNearScore2 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "teleopButtonAllianceFarScore2":
                var s = this.props.currentPartialMatch.scores;
                s.teleopButtonAllianceFarScore2 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "teleopButtonOpponentNearScore2":
                var s = this.props.currentPartialMatch.scores;
                s.teleopButtonOpponentNearScore2 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "teleopButtonOpponentFarScore2":
                var s = this.props.currentPartialMatch.scores;
                s.teleopButtonOpponentFarScore2 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            default:
                break;
        }
    },
    updateCurrentScore: function (scores) {
        var newState = this.props.currentPartialMatch;
        newState.scores = scores;
        var scoreCalculator = new ScoreCalculator(scores);
        newState.totalScore = scoreCalculator.getTotalScore();
        newState.partialScore1 = scoreCalculator.getPartialScore1();
        newState.partialScore2 = scoreCalculator.getPartialScore2();
        this.props.handleCurrentPartialMatchUpdate(newState)
    },
    render() {
        var team1;
        var team2;
        var allianceText;
        var color;
        if(this.props.currentPartialMatch.allianceColor == "Red"){
            team1 = this.props.currentPartialMatch.red1;
            team2 = this.props.currentPartialMatch.red2;
            allianceText = "Red Alliance"
            color = Colors.red500;
        }
        else {
            team1 = this.props.currentPartialMatch.blue1;
            team2 = this.props.currentPartialMatch.blue2;
            allianceText = "Blue Alliance"
            color = Colors.blue500;
        }
        return (
            <div>
                <Paper style={{ height:10, width:200, margin: 0, textAlign: 'center', display: 'inline-block', 
                        backgroundColor: color,}} zDepth={2}/><br/><br/>
                <h2 style={headerStyle}> {allianceText} </h2><br/>
                <Autonomous scores = {this.props.currentPartialMatch.scores} handleScoreChange = {this.handleScoreChange} 
                    team1={team1} team2={team2}/>
                <Divider/><br/>
                <Teleop scores = {this.props.currentPartialMatch.scores} handleScoreChange = {this.handleScoreChange}
                    team1={team1} team2={team2}/>
                <Divider/><br/>
                <Endgame scores = {this.props.currentPartialMatch.scores} handleScoreChange = {this.handleScoreChange}
                    team1={team1} team2={team2}/>
                <Divider/><br/>
                <ScoreLabel totalScore = {this.props.currentPartialMatch.totalScore} partialScore1={this.props.currentPartialMatch.partialScore1} 
                    partialScore2={this.props.currentPartialMatch.partialScore2} team1={team1} team2={team2}/>
            </div>
        );
    }
});

export default VelVortexForm; 