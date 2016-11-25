import React from 'react';
import Divider from 'material-ui/Divider';
import LocalScoreLabel from './VelVortexFormComponents/LocalScoreLabel';
import Autonomous from './VelVortexFormComponents/Autonomous';
import Teleop from './VelVortexFormComponents/Teleop';
import Endgame from './VelVortexFormComponents/Endgame';

var PracticeVelVortexForm = React.createClass({
  getInitialState: function () {
        return {
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

  render() {
    return (
        <div>
            <Divider/><br/>
            <Autonomous scores = {this.state.scores} handleScoreChange = {this.handleScoreChange} team1="Team 1" team2="Team 2"/>
            <Divider/><br/>
            <Teleop scores = {this.state.scores} handleScoreChange = {this.handleScoreChange} team1="Team 1" team2="Team 2"/>
            <Divider/><br/>
            <Endgame scores = {this.state.scores} handleScoreChange = {this.handleScoreChange} team1="Team 1" team2="Team 2"/>
            <Divider/><br/>
            <LocalScoreLabel scores = {this.state.scores}/>
            <br/><br/><br/><br/>
        </div>
    );
  }
});

export default PracticeVelVortexForm;

// <Divider/><br/>
//             <Teleop scores = {this.state.scores} handleScoreChange = {this.handleScoreChange} team1="Team 1" team2="Team 2"/>
//             <Divider/><br/>
//             <Endgame scores = {this.state.scores} handleScoreChange = {this.handleScoreChange} team1="Team 1" team2="Team 2"/>
//             <Divider/><br/>