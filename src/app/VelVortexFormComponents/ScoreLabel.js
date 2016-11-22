import React from 'react';
import SubHeader from 'material-ui/SubHeader'
import MyHeader1 from './MyHeader1'
import MyHeader2 from './MyHeader2'
import MyHeader3 from './MyHeader3'
import Paper from 'material-ui/Paper'
import * as Colors from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';

var ScoreLabel = React.createClass({
    render() {
        return (
            <div>
                <Paper style={{ height:10, width:50, margin: 0, textAlign: 'center', display: 'inline-block', backgroundColor:Colors.amber500,}} zDepth={2}/><br/><br/>
                <MyHeader1> Scores </MyHeader1>
                <MyHeader2> Total: { this.props.totalScore }</MyHeader2>
                <MyHeader3> {this.props.team1}: { this.props.partialScore1 }</MyHeader3><br/>
                <MyHeader3> {this.props.team2}: { this.props.partialScore2 }</MyHeader3><br/>
            </div>
        );
    }
});

export default ScoreLabel;