import React from 'react';
import SubHeader from 'material-ui/SubHeader'
import MyHeader1 from './MyHeader1'
import MyHeader2 from './MyHeader2'
import MyHeader3 from './MyHeader3'
import Paper from 'material-ui/Paper'
import * as Colors from 'material-ui/styles/colors';
import ScoreCalculator from './../ScoreCalculator'

var LocalScoreLabel = React.createClass({
    getTotalScore: function(){
        var scoreCalculator = new ScoreCalculator(this.props.scores);
        //console.log(scoreCalculator.getTotalScore())
        return scoreCalculator.getTotalScore()
    },
    getPartialScore1: function(){
        var scoreCalculator = new ScoreCalculator(this.props.scores);
        return scoreCalculator.getPartialScore1()
    },
    getPartialScore2: function(){
        var scoreCalculator = new ScoreCalculator(this.props.scores);
        return scoreCalculator.getPartialScore2()
    },
    render() {
        return (
            <div>
                <Paper style={{ height:10, width:50, margin: 0, textAlign: 'center', display: 'inline-block', backgroundColor:Colors.amber500,}} zDepth={2}/><br/><br/>
                <MyHeader1> Scores </MyHeader1>
                <MyHeader2> Total: { this.getTotalScore() }</MyHeader2>
                <MyHeader3> Partial Target 1: { this.getPartialScore1() }</MyHeader3><br/>
                <MyHeader3> Partial Target 2: { this.getPartialScore2() }</MyHeader3><br/>
            </div>
        );
    }
});

export default LocalScoreLabel;