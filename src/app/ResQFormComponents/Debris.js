import React from 'react';
import Divider from 'material-ui/Divider';
import MyHeader2 from './MyHeader2';
import HighBucket from './HighBucket';
import MidBucket from './MidBucket';
import LowBucket from './LowBucket';
import FloorGoal from './FloorGoal';
    
var Debris = React.createClass({
    render() {
        return (
            <div>
                <MyHeader2> Debris </MyHeader2>
                <HighBucket scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}
                    team1={this.props.team1} team2={this.props.team2}/>
                <MidBucket scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}
                    team1={this.props.team1} team2={this.props.team2}/>
                <LowBucket scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}
                    team1={this.props.team1} team2={this.props.team2}/>
                <FloorGoal scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}
                    team1={this.props.team1} team2={this.props.team2}/>
            </div>
        );
    }
});
export default Debris;