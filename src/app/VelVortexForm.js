import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import ScoreLabel from './VelVortexFormComponents/ScoreLabel';
import Autonomous from './VelVortexFormComponents/Autonomous';
import Teleop from './VelVortexFormComponents/Teleop';
import Endgame from './VelVortexFormComponents/Endgame';
import ScoreCalculator from './ScoreCalculator'
import * as Colors from 'material-ui/styles/colors';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

const headerStyle = {
    fontSize: 24,
    fontWeight: 400,
    margin: 0,
};

var VelVortexForm = React.createClass({
    getInitialState: function () {
        return {
            slideIndex: 0,
        }
    },
    handleChangeIndex: function (value) {
        this.scrollWindow();
        this.setState({ slideIndex: value, });
    },
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
    scrollWindow: function () {
        window.scrollTo(0, 0);
    },
    render() {
        var team1;
        var team2;
        var allianceText;
        var color;
        if (this.props.currentPartialMatch.allianceColor == "Red") {
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
        var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        var scoreCalculator = new ScoreCalculator(this.props.currentPartialMatch.scores);
        const totalScore = scoreCalculator.getTotalScore();

        if (this.state.slideIndex == 0) {
            return (
                <div>
                    <Tabs onChange={this.handleChangeIndex} value={this.state.slideIndex}
                        style={{ marginRight: -20, marginLeft: -20, padding: 0, paddingTop: 58, position: 'fixed', width: width, zIndex: 1100 }}>
                        <Tab label="Autonomous" value={0}/>
                        <Tab label="Teleop" value={1}/>
                        <Tab label={"Score: " + totalScore} value={2}/>
                    </Tabs>
                    <div style={{ padding: 0, margin: 0, paddingTop: 130 }}>
                        <Autonomous scores = {this.props.currentPartialMatch.scores} handleScoreChange = {this.handleScoreChange}
                            team1={team1} team2={team2}/>
                    </div>
                </div>
            );
        }
        else if (this.state.slideIndex == 1) {
            return (
                <div>
                    <Tabs onChange={this.handleChangeIndex} value={this.state.slideIndex}
                        style={{ marginRight: -20, marginLeft: -20, padding: 0, paddingTop: 58, position: 'fixed', width: width, zIndex: 1100 }}>
                        <Tab label="Autonomous" value={0}/>
                        <Tab label="Teleop" value={1}/>
                        <Tab label={"Score: " + totalScore} value={2}/>
                    </Tabs>
                    <div style={{ padding: 0, margin: 0, paddingTop: 130 }}>
                        <Teleop scores = {this.props.currentPartialMatch.scores} handleScoreChange = {this.handleScoreChange}
                            team1={team1} team2={team2}/>
                        <Divider/><br/>
                        <Endgame scores = {this.props.currentPartialMatch.scores} handleScoreChange = {this.handleScoreChange}
                            team1={team1} team2={team2}/>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Tabs onChange={this.handleChangeIndex} value={this.state.slideIndex}
                        style={{ marginRight: -20, marginLeft: -20, padding: 0, paddingTop: 58, position: 'fixed', width: width, zIndex: 1100 }}>
                        <Tab label="Autonomous" value={0}/>
                        <Tab label="Teleop" value={1}/>
                        <Tab label={"Score: " + totalScore} value={2}/>
                    </Tabs>
                    <div style={{ padding: 0, margin: 0, paddingTop: 130 }}>
                        <ScoreLabel totalScore = {this.props.currentPartialMatch.totalScore} partialScore1={this.props.currentPartialMatch.partialScore1}
                            partialScore2={this.props.currentPartialMatch.partialScore2} team1={team1} team2={team2}/>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <div>
                    <Tabs onChange={this.handleChangeIndex} value={this.state.slideIndex}
                        style={{ marginRight: -20, marginLeft: -20, padding: 0, paddingTop: 58, position: 'fixed', width: width, zIndex: 1100 }}>
                        <Tab style={{ backgroundColor: color }} label="Autonomous" value={0} />
                        <Tab style={{ backgroundColor: color }} label="Teleop" value={1} />
                        <Tab style={{ backgroundColor: color }} label={"Score: " + this.props.currentPartialMatch.totalScore} value={2} />
                    </Tabs>
                    <SwipeableViews
                        index={this.state.slideIndex}
                        onChangeIndex={this.handleChangeIndex}
                        >
                        <div style={{ padding: 0, margin: 0, paddingTop: 130 }}>
                            <Autonomous scores = {this.props.currentPartialMatch.scores} handleScoreChange = {this.handleScoreChange}
                                team1={team1} team2={team2}/>
                        </div>
                        <div style={{ padding: 0, margin: 0, paddingTop: 130 }}>
                            <Teleop scores = {this.props.currentPartialMatch.scores} handleScoreChange = {this.handleScoreChange}
                                team1={team1} team2={team2}/>
                            <Divider/><br/>
                            <Endgame scores = {this.props.currentPartialMatch.scores} handleScoreChange = {this.handleScoreChange}
                                team1={team1} team2={team2}/>
                        </div>
                        <div style={{ padding: 0, margin: 0, paddingTop: 130 }}>
                            <ScoreLabel totalScore = {this.props.currentPartialMatch.totalScore} partialScore1={this.props.currentPartialMatch.partialScore1}
                                partialScore2={this.props.currentPartialMatch.partialScore2} team1={team1} team2={team2}/>
                        </div>
                    </SwipeableViews>
                </div>
            </div>
        );
    }
});

export default VelVortexForm; 