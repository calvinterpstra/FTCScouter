import React from 'react';
import Divider from 'material-ui/Divider';
import LocalScoreLabel from './StaticResQFormComponents/LocalScoreLabel';
import Autonomous from './StaticResQFormComponents/Autonomous';
import Teleop from './StaticResQFormComponents/Teleop';
import Endgame from './StaticResQFormComponents/Endgame';

var StaticResQForm = React.createClass({
    render() {
        var team1;
        var team2;
        if(this.props.matchSelected.allianceColor == "Red"){
            team1 = this.props.matchSelected.red1;
            team2 = this.props.matchSelected.red2;
        }
        else {
            team1 = this.props.matchSelected.blue1;
            team2 = this.props.matchSelected.blue2;
        }
        return (
            <div>
                <Divider/><br/>
                <Autonomous scores = {this.props.matchSelected.scores} team1={team1} team2={team2}/>
                <Divider/><br/>
                <Teleop scores = {this.props.matchSelected.scores} team1={team1} team2={team2}/>
                <Divider/><br/>
                <Endgame scores = {this.props.matchSelected.scores} team1={team1} team2={team2}/>
                <Divider/><br/>
                <LocalScoreLabel scores = {this.props.matchSelected.scores} team1={team1} team2={team2}/>
            </div>
        );
    }
});

export default StaticResQForm;