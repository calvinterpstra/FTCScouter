import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import ScoreLabel from './ResQFormComponents/ScoreLabel';
import Autonomous from './ResQFormComponents/Autonomous';
import Teleop from './ResQFormComponents/Teleop';
import Endgame from './ResQFormComponents/Endgame';
import * as Colors from 'material-ui/styles/colors';

const headerStyle = {
    fontSize: 24,
    fontWeight: 400,
    margin: 0,
};

class ScoreCalculator {
    constructor(scores) {
        this.scores = scores;
    }
    getTotalAutonButtonScore(){
        var score = this.scores.autonButtonScore1 + this.scores.autonButtonScore2
        return score;
    }
    getZiplineClimbersScore1(){
        var ziplineClimbersScore = this.scores.lowZiplineClimberScore1 + this.scores.midZiplineClimberScore1
         + this.scores.highZiplineClimberScore1;
        return ziplineClimbersScore;
    }
    getZiplineClimbersScore2(){
        var ziplineClimbersScore = this.scores.lowZiplineClimberScore2 + this.scores.midZiplineClimberScore2
         + this.scores.highZiplineClimberScore2;
        return ziplineClimbersScore;
    }
    getTotalZiplineClimbersScore(){
        var high = 0;
        var mid = 0;
        var low = 0;
        if(this.scores.highZiplineClimberScore1 == 20 || this.scores.highZiplineClimberScore2 == 20){
            high = 20
        }
        if(this.scores.midZiplineClimberScore1 == 20 || this.scores.midZiplineClimberScore2 == 20){
            mid = 20
        }
        if(this.scores.lowZiplineClimberScore1 == 20 || this.scores.lowZiplineClimberScore2 == 20){
            low = 20
        }
        return high + mid + low;
    }
    getDebrisScore1() {
        var debrisScore = this.scores.highBucketScore1 + this.scores.midBucketScore1 + this.scores.lowBucketScore1
            + this.scores.floorGoalScore1;
        return debrisScore;
    }
    getDebrisScore2() {
        var debrisScore = this.scores.highBucketScore2 + this.scores.midBucketScore2 + this.scores.lowBucketScore2
            + this.scores.floorGoalScore2;
        return debrisScore;
    }
    getTotalDebrisScore() {
        var debrisScore = this.getDebrisScore1() + this.getDebrisScore2();
        return debrisScore;
    }
    getClimbersScore1() {
        var climbersScore = 0;
        switch(this.scores.autonClimbersScore1){
            case 0:
                climbersScore = this.scores.teleopClimbersScore1
                break;
            case 20:
                if(this.scores.teleopClimbersScore1 == 0){
                    climbersScore = 20;
                }
                else {
                    climbersScore = 30;
                }
                break;
            case 40:
                climbersScore = 40;
                break;
            default:
                break;
        }
        return climbersScore;
    }
    getClimbersScore2() {
        var climbersScore = 0;
        switch(this.scores.autonClimbersScore2){
            case 0:
                climbersScore = this.scores.teleopClimbersScore2
                break;
            case 20:
                if(this.scores.teleopClimbersScore2 == 0){
                    climbersScore = 20;
                }
                else {
                    climbersScore = 30;
                }
                break;
            case 40:
                climbersScore = 40;
                break;
            default:
                break;
        }
        return climbersScore;
    }
    getTotalClimbersScore() {
        var score = this.getClimbersScore1() + this.getClimbersScore2();
        return score;
    }
    getTotalAutonMountainScore(){
        var score = this.scores.autonMountainScore1 + this.scores.autonMountainScore2;
        return score;
    }
    getTotalAllClearScore(){
        var score = this.scores.allClearScore1 + this.scores.allClearScore2;
        return score;
    }
    getTotalEndgameMountainScore(){
        var score = this.scores.endgameMountainScore1 + this.scores.endgameMountainScore2;
        return score;
    }
    getPartialScore1() {
        var totalScore = this.scores.autonButtonScore1 + this.getClimbersScore1() + this.scores.autonMountainScore1 + this.getDebrisScore1()
         + this.getZiplineClimbersScore1() + this.scores.allClearScore1 + this.scores.endgameMountainScore1;
        return totalScore;
    }
    getPartialScore2() {
        var totalScore = this.scores.autonButtonScore2 + this.getClimbersScore2() + this.scores.autonMountainScore2 + this.getDebrisScore2()
         + this.getZiplineClimbersScore2() + this.scores.allClearScore2 + this.scores.endgameMountainScore2;
        return totalScore;
    }
    getTotalScore(){
        var totalScore = this.getTotalAutonButtonScore() + this.getTotalClimbersScore() + this.getTotalAutonMountainScore() + this.getTotalDebrisScore()
         + this.getTotalZiplineClimbersScore() + this.getTotalAllClearScore() + this.getTotalEndgameMountainScore();
        return totalScore;
    }
}

var ResQForm = React.createClass({
    handleScoreChange: function (score, scoreType) {
        switch (scoreType) {
            case "autonButtonScore1":
                var s = this.props.currentPartialMatch.scores;
                s.autonButtonScore1 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "autonClimbersScore1":
                var s = this.props.currentPartialMatch.scores;
                s.autonClimbersScore1 = parseInt(score);
                this.updateCurrentScore(s);
                break;
            case "autonMountainScore1":
                var s = this.props.currentPartialMatch.scores;
                s.autonMountainScore1 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "teleopClimbersScore1":
                var s = this.props.currentPartialMatch.scores;
                s.teleopClimbersScore1 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "highBucketScore1":
                var s = this.props.currentPartialMatch.scores;
                s.highBucketScore1 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "midBucketScore1":
                var s = this.props.currentPartialMatch.scores;
                s.midBucketScore1 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "lowBucketScore1":
                var s = this.props.currentPartialMatch.scores;
                s.lowBucketScore1 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "floorGoalScore1":
                var s = this.props.currentPartialMatch.scores;
                s.floorGoalScore1 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "lowZiplineClimberScore1":
                var s = this.props.currentPartialMatch.scores;
                s.lowZiplineClimberScore1 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "midZiplineClimberScore1":
                var s = this.props.currentPartialMatch.scores;
                s.midZiplineClimberScore1 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "highZiplineClimberScore1":
                var s = this.props.currentPartialMatch.scores;
                s.highZiplineClimberScore1 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "allClearScore1":
                var s = this.props.currentPartialMatch.scores;
                s.allClearScore1 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "endgameMountainScore1":
                var s = this.props.currentPartialMatch.scores;
                s.endgameMountainScore1 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;

            case "autonButtonScore2":
                var s = this.props.currentPartialMatch.scores;
                s.autonButtonScore2 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "autonClimbersScore2":
                var s = this.props.currentPartialMatch.scores;
                s.autonClimbersScore2 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "autonMountainScore2":
                var s = this.props.currentPartialMatch.scores;
                s.autonMountainScore2 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "teleopClimbersScore2":
                var s = this.props.currentPartialMatch.scores;
                s.teleopClimbersScore2 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "highBucketScore2":
                var s = this.props.currentPartialMatch.scores;
                s.highBucketScore2 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "midBucketScore2":
                var s = this.props.currentPartialMatch.scores;
                s.midBucketScore2 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "lowBucketScore2":
                var s = this.props.currentPartialMatch.scores;
                s.lowBucketScore2 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "floorGoalScore2":
                var s = this.props.currentPartialMatch.scores;
                s.floorGoalScore2 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "lowZiplineClimberScore2":
                var s = this.props.currentPartialMatch.scores;
                s.lowZiplineClimberScore2 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "midZiplineClimberScore2":
                var s = this.props.currentPartialMatch.scores;
                s.midZiplineClimberScore2 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "highZiplineClimberScore2":
                var s = this.props.currentPartialMatch.scores;
                s.highZiplineClimberScore2 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "allClearScore2":
                var s = this.props.currentPartialMatch.scores;
                s.allClearScore2 = parseInt(score);
                
                this.updateCurrentScore(s);
                break;
            case "endgameMountainScore2":
                var s = this.props.currentPartialMatch.scores;
                s.endgameMountainScore2 = parseInt(score);
                
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

export default ResQForm; 