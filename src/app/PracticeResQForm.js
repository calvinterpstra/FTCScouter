import React from 'react';
import Divider from 'material-ui/Divider';
import LocalScoreLabel from './ResQFormComponents/LocalScoreLabel';
import Autonomous from './ResQFormComponents/Autonomous';
import Teleop from './ResQFormComponents/Teleop';
import Endgame from './ResQFormComponents/Endgame';

var PracticeResQForm = React.createClass({
  getInitialState: function () {
        return {
            scores: {
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
            },
        };
    },

    handleScoreChange: function (score, scoreType) {
        console.log("updating current score, " + scoreType + ", " + score)
        const s = this.state.scores;
        switch (scoreType) {
            case "autonButtonScore1":
                s.autonButtonScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonClimbersScore1":
                
                s.autonClimbersScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonMountainScore1":
                
                s.autonMountainScore1 = parseInt(score);
                 this.setState({ scores: s });
                break;
            case "teleopClimbersScore1":
                
                s.teleopClimbersScore1 = parseInt(score);
                 this.setState({ scores: s });
                break;
            case "highBucketScore1":
                
                s.highBucketScore1 = parseInt(score);
                 this.setState({ scores: s });
                break;
            case "midBucketScore1":
                
                s.midBucketScore1 = parseInt(score);
                 this.setState({ scores: s });
                break;
            case "lowBucketScore1":
                
                s.lowBucketScore1 = parseInt(score);
                 this.setState({ scores: s });
                break;
            case "floorGoalScore1":
                
                s.floorGoalScore1 = parseInt(score);
                 this.setState({ scores: s });
                break;
            case "lowZiplineClimberScore1":
                
                s.lowZiplineClimberScore1 = parseInt(score);
                 this.setState({ scores: s });
                break;
            case "midZiplineClimberScore1":
                
                s.midZiplineClimberScore1 = parseInt(score);
                 this.setState({ scores: s });
                break;
            case "highZiplineClimberScore1":
                
                s.highZiplineClimberScore1 = parseInt(score);
                 this.setState({ scores: s });
                break;
            case "allClearScore1":
                
                s.allClearScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "endgameMountainScore1":
                
                s.endgameMountainScore1 = parseInt(score);
                this.setState({ scores: s });
                break;

            case "autonButtonScore2":
                
                s.autonButtonScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonClimbersScore2":
                
                s.autonClimbersScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonMountainScore2":
                
                s.autonMountainScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "teleopClimbersScore2":
                
                s.teleopClimbersScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "highBucketScore2":
                
                s.highBucketScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "midBucketScore2":
                
                s.midBucketScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "lowBucketScore2":
                
                s.lowBucketScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "floorGoalScore2":
                
                s.floorGoalScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "lowZiplineClimberScore2":
                
                s.lowZiplineClimberScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "midZiplineClimberScore2":
                
                s.midZiplineClimberScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "highZiplineClimberScore2":
                
                s.highZiplineClimberScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "allClearScore2":
                
                s.allClearScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "endgameMountainScore2":
                
                s.endgameMountainScore2 = parseInt(score);
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
        </div>
    );
  }
});

export default PracticeResQForm;