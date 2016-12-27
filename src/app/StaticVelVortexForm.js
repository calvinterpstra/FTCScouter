import React from 'react';
import Divider from 'material-ui/Divider';
import LocalScoreLabel from './StaticVelVortexFormComponents/LocalScoreLabel';
import Autonomous from './StaticVelVortexFormComponents/Autonomous';
import Teleop from './StaticVelVortexFormComponents/Teleop';
import Endgame from './StaticVelVortexFormComponents/Endgame';
import {Tabs, Tab} from 'material-ui/Tabs';
import * as Colors from 'material-ui/styles/colors';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import ScoreCalculator from './ScoreCalculator';

var StaticResQForm = React.createClass({
    getInitialState: function () {
        return {
            slideIndex: 0,
        }
    },
    handleChangeIndex: function (value) {
        this.setState({ slideIndex: value, });
    },
    render() {
        var team1;
        var team2;
        var color;
        if (this.props.matchSelected.allianceColor == "Red") {
            team1 = this.props.matchSelected.red1;
            team2 = this.props.matchSelected.red2;
            color = Colors.red500;
        }
        else {
            team1 = this.props.matchSelected.blue1;
            team2 = this.props.matchSelected.blue2;
            color = Colors.blue500;
        }
        var width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        
        var scoreCalculator = new ScoreCalculator(this.props.matchSelected.scores);
        const totalScore = scoreCalculator.getTotalScore();
        return (
            <div>
                <div>
                    <Tabs onChange={this.handleChangeIndex} value={this.state.slideIndex}
                        style={{ marginRight: -20, marginLeft: -20, padding: 0, paddingTop: 58, position: 'fixed', width: width, zIndex: 1100 }}>
                        <Tab style={{ backgroundColor: color }} label="Autonomous" value={0} />
                        <Tab style={{ backgroundColor: color }} label="Teleop" value={1} />
                        <Tab style={{ backgroundColor: color }} label={"Score: " + totalScore} value={2} />
                    </Tabs>
                    <SwipeableViews
                        index={this.state.slideIndex}
                        onChangeIndex={this.handleChangeIndex}
                        >
                        <div style={{ padding: 0, margin: 0, paddingTop: 130 }}>
                            <Autonomous scores = {this.props.matchSelected.scores} team1={team1} team2={team2}/>
                        </div>
                        <div style={{ padding: 0, margin: 0, paddingTop: 130 }}>
                            <Teleop scores = {this.props.matchSelected.scores} team1={team1} team2={team2}/>
                            <Divider/><br/>
                            <Endgame scores = {this.props.matchSelected.scores} team1={team1} team2={team2}/>
                        </div>
                        <div style={{ padding: 0, margin: 0, paddingTop: 130 }}>
                            <LocalScoreLabel scores = {this.props.matchSelected.scores} team1={team1} team2={team2}/>
                        </div>
                    </SwipeableViews>
                </div>
            </div>
        );
    }
});

export default StaticResQForm;