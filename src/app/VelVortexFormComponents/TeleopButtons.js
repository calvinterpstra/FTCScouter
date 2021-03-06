import React from 'react';
import MyHeader2 from './MyHeader2';
import MyHeader3 from './MyHeader3';
import Checkbox from 'material-ui/Checkbox';
import * as Colors from 'material-ui/styles/colors';

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
        minWidth: 150,
    },
    root: {
        display: 'flex',
    },
};

var TeleopButtons = React.createClass({
    handleChangeA11: function (event) {
        var isPressed = (event.target.checked);
        var score = 0;
        if (isPressed) {
            score = 10;
            this.props.handleScoreChange(0, "teleopButtonAllianceNearScore2");
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "teleopButtonAllianceNearScore1");
    },
    handleChangeA21: function (event) {
        var isPressed = (event.target.checked);
        var score = 0;
        if (isPressed) {
            score = 10;
            this.props.handleScoreChange(0, "teleopButtonAllianceFarScore2");
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "teleopButtonAllianceFarScore1");
    },
    handleChangeO11: function (event) {
        var isPressed = (event.target.checked);
        var score = 0;
        if (isPressed) {
            score = 10;
            this.props.handleScoreChange(0, "teleopButtonOpponentNearScore2");
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "teleopButtonOpponentNearScore1");
    },
    handleChangeO21: function (event) {
        var isPressed = (event.target.checked);
        var score = 0;
        if (isPressed) {
            score = 10;
            this.props.handleScoreChange(0, "teleopButtonOpponentFarScore2");
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "teleopButtonOpponentFarScore1");
    },
    handleChangeA12: function (event) {
        var isPressed = (event.target.checked);
        var score = 0;
        if (isPressed) {
            score = 10;
            this.props.handleScoreChange(0, "teleopButtonAllianceNearScore1");
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "teleopButtonAllianceNearScore2");
    },
    handleChangeA22: function (event) {
        var isPressed = (event.target.checked);
        var score = 0;
        if (isPressed) {
            score = 10;
            this.props.handleScoreChange(0, "teleopButtonAllianceFarScore1");
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "teleopButtonAllianceFarScore2");
    },
    handleChangeO12: function (event) {
        var isPressed = (event.target.checked);
        var score = 0;
        if (isPressed) {
            score = 10;
            this.props.handleScoreChange(0, "teleopButtonOpponentNearScore1");
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "teleopButtonOpponentNearScore2");
    },
    handleChangeO22: function (event) {
        var isPressed = (event.target.checked);
        var score = 0;
        if (isPressed) {
            score = 10;
            this.props.handleScoreChange(0, "teleopButtonOpponentFarScore1");
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "teleopButtonOpponentFarScore2");
    },
    render() {
        var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        return (
            <div>
                <h2 style={{ fontSize: 18, fontWeight: 400, paddingTop: 10, paddingBottom: 10, margin: 0 }}> Beacons </h2>
                <h2 style={{ fontSize: 12, fontWeight: 300, paddingTop: 0, paddingBottom: 10, margin: 0 }}> (beacons still claimed by the end of the match) </h2>
                <div style={styles.root}>
                    <div style={{ textAlign: 'center', marginRight: 0, marginLeft: ((width * 0.5) - 170) }}>
                        <h2 style={{ fontSize: 16, fontWeight: 300, paddingTop: 0, paddingBottom: 10, margin: 0 }}> {this.props.team1}: </h2>
                        <Checkbox
                            label="Alliance Near"
                            style={styles.checkbox}
                            onCheck={this.handleChangeA11}
                            checked={this.props.scores.teleopButtonAllianceNearScore1 == 10}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                        <Checkbox
                            label="Alliance Far"
                            style={styles.checkbox}
                            onCheck={this.handleChangeA21}
                            checked={this.props.scores.teleopButtonAllianceFarScore1 == 10}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                        <Checkbox
                            label="Opponent Near"
                            style={styles.checkbox}
                            onCheck={this.handleChangeO11}
                            checked={this.props.scores.teleopButtonOpponentNearScore1 == 10}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                        <Checkbox
                            label="Opponent Far"
                            style={styles.checkbox}
                            onCheck={this.handleChangeO21}
                            checked={this.props.scores.teleopButtonOpponentFarScore1 == 10}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: 16, fontWeight: 300, paddingTop: 0, paddingBottom: 10, margin: 0 }}> {this.props.team2}: </h2>
                        <Checkbox
                            label="Alliance Near"
                            style={styles.checkbox}
                            onCheck={this.handleChangeA12}
                            checked={this.props.scores.teleopButtonAllianceNearScore2 == 10}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                        <Checkbox
                            label="Alliance Far"
                            style={styles.checkbox}
                            onCheck={this.handleChangeA22}
                            checked={this.props.scores.teleopButtonAllianceFarScore2 == 10}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                        <Checkbox
                            label="Opponent Near"
                            style={styles.checkbox}
                            onCheck={this.handleChangeO12}
                            checked={this.props.scores.teleopButtonOpponentNearScore2 == 10}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                        <Checkbox
                            label="Opponent Far"
                            style={styles.checkbox}
                            onCheck={this.handleChangeO22}
                            checked={this.props.scores.teleopButtonOpponentFarScore2 == 10}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                    </div>
                </div>
            </div>
        );
    }
});

export default TeleopButtons;