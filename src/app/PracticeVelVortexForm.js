import React from 'react';
import Divider from 'material-ui/Divider';
import LocalScoreLabel from './VelVortexFormComponents/LocalScoreLabel';
import Autonomous from './VelVortexFormComponents/Autonomous';
import Teleop from './VelVortexFormComponents/Teleop';
import Endgame from './VelVortexFormComponents/Endgame';
import { Tabs, Tab } from 'material-ui/Tabs';
import ScoreCalculator from './ScoreCalculator';
import RaisedButton from 'material-ui/RaisedButton';

var PracticeVelVortexForm = React.createClass({
    getInitialState: function () {
        return {
            slideIndex: 0,
            scores: {
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
        };
    },
    handleChangeIndex: function (value) {
        this.scrollWindow();
        this.setState({ slideIndex: value, });
    },
    handleScoreChange: function (score, scoreType) {
        const s = this.state.scores;
        switch (scoreType) {
            case "autonButtonsScore1":
                s.autonButtonsScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonParkingScore1":
                s.autonParkingScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonCenterVortexScore1":
                s.autonCenterVortexScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonCornerVortexScore1":
                s.autonCornerVortexScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "centerVortexScore1":
                s.centerVortexScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "cornerVortexScore1":
                s.cornerVortexScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "capBallScore1":
                s.capBallScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "teleopButtonAllianceNearScore1":
                s.teleopButtonAllianceNearScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "teleopButtonAllianceFarScore1":
                s.teleopButtonAllianceFarScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "teleopButtonOpponentNearScore1":
                s.teleopButtonOpponentNearScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "teleopButtonOpponentFarScore1":
                s.teleopButtonOpponentFarScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonCapBallScore1":
                s.autonCapBallScore1 = parseInt(score);
                this.setState({ scores: s });
                break;

            case "autonButtonsScore2":
                s.autonButtonsScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonParkingScore2":
                s.autonParkingScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonCenterVortexScore2":
                s.autonCenterVortexScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonCornerVortexScore2":
                s.autonCornerVortexScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "centerVortexScore2":
                s.centerVortexScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "cornerVortexScore2":
                s.cornerVortexScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "capBallScore2":
                s.capBallScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "teleopButtonAllianceNearScore2":
                s.teleopButtonAllianceNearScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "teleopButtonAllianceFarScore2":
                s.teleopButtonAllianceFarScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "teleopButtonOpponentNearScore2":
                s.teleopButtonOpponentNearScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "teleopButtonOpponentFarScore2":
                s.teleopButtonOpponentFarScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonCapBallScore2":
                s.autonCapBallScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            default:
                break;
        }
    },
    scrollWindow: function () {
        window.scrollTo(0, 0);
    },
    resetScores: function () {
        const newState = this.state;
        newState.scores = {
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
        }
        this.setState({ newState });
    },

    render() {
        var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        var scoreCalculator = new ScoreCalculator(this.state.scores);
        const totalScore = scoreCalculator.getTotalScore();

        if (this.state.slideIndex == 0) {
            return (
                <div>
                    <Tabs onChange={this.handleChangeIndex} value={this.state.slideIndex}
                        style={{ marginRight: -20, marginLeft: -20, padding: 0, paddingTop: 58, position: 'fixed', width: width, zIndex: 1100 }}>
                        <Tab label="Autonomous" value={0} />
                        <Tab label="Teleop" value={1} />
                        <Tab label={"Score: " + totalScore} value={2} />
                    </Tabs>
                    <div style={{ padding: 0, margin: 0 }}>
                        <h2 style={{ fontSize: 24, fontWeight: 400, paddingTop: 130, margin: 0 }}> Practice Form </h2> <br />
                        <Divider /><br />
                        <Autonomous scores={this.state.scores} handleScoreChange={this.handleScoreChange} team1="Team 1" team2="Team 2" />
                        <br /><br /><br /><br />
                    </div>
                </div>
            );
        }
        else if (this.state.slideIndex == 1) {
            return (
                <div>
                    <Tabs onChange={this.handleChangeIndex} value={this.state.slideIndex}
                        style={{ marginRight: -20, marginLeft: -20, padding: 0, paddingTop: 58, position: 'fixed', width: width, zIndex: 1100 }}>
                        <Tab label="Autonomous" value={0} />
                        <Tab label="Teleop" value={1} />
                        <Tab label={"Score: " + totalScore} value={2} />
                    </Tabs>
                    <div style={{ padding: 0, margin: 0 }}>
                        <h2 style={{ fontSize: 24, fontWeight: 400, paddingTop: 130, margin: 0 }}> Practice Form </h2> <br />
                        <Divider /><br />
                        <Teleop scores={this.state.scores} handleScoreChange={this.handleScoreChange} team1="Team 1" team2="Team 2" />
                        <Divider /><br />
                        <Endgame scores={this.state.scores} handleScoreChange={this.handleScoreChange} team1="Team 1" team2="Team 2" />
                        <br /><br /><br /><br />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Tabs onChange={this.handleChangeIndex} value={this.state.slideIndex}
                        style={{ marginRight: -20, marginLeft: -20, padding: 0, paddingTop: 58, position: 'fixed', width: width, zIndex: 1100 }}>
                        <Tab label="Autonomous" value={0} />
                        <Tab label="Teleop" value={1} />
                        <Tab label={"Score: " + totalScore} value={2} />
                    </Tabs>
                    <div style={{ padding: 0, margin: 0 }}>
                        <h2 style={{ fontSize: 24, fontWeight: 400, paddingTop: 130, margin: 0 }}> Practice Form </h2> <br />
                        <Divider /><br />
                        <LocalScoreLabel scores={this.state.scores} /><br />
                        <RaisedButton label="Reset" secondary={true} onTouchTap={this.resetScores} />
                        <br /><br /><br /><br />
                    </div>
                </div>
            );
        }
    }
});

export default PracticeVelVortexForm;

// <Divider/><br/>
//             <Teleop scores = {this.state.scores} handleScoreChange = {this.handleScoreChange} team1="Team 1" team2="Team 2"/>
//             <Divider/><br/>
//             <Endgame scores = {this.state.scores} handleScoreChange = {this.handleScoreChange} team1="Team 1" team2="Team 2"/>
//             <Divider/><br/>