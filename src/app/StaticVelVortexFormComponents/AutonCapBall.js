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
    },
    root: {
        display: 'flex',
    },
};

var AutonCapBall = React.createClass({
    handleChange1: function (event) {
        var isPressed = (event.target.checked);
        var score = 0;
        if (isPressed) {
            score = 5;
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "autonCapBallScore1");
    },
    handleChange2: function (event) {
        var isPressed = (event.target.checked);
        var score = 0;
        if (isPressed) {
            score = 5;
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "autonCapBallScore2");
    },
    render() {
        return (
            <div>
                <MyHeader2> Cap Ball </MyHeader2>
                <div style={styles.root}>
                    <div style={{ textAlign: 'center', marginRight: 40, marginLeft: ((screen.width*0.5)-140)}}>
                        <MyHeader3> {this.props.team1}: </MyHeader3> <br/>
                        <Checkbox
                            label="Dislodged"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.autonCapBallScore1 == 5}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <MyHeader3> {this.props.team2}: </MyHeader3> <br/>
                        <Checkbox
                            label="Dislodged"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.autonCapBallScore2 == 5}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            />
                    </div>
                </div>
            </div>
        );
    }
});

export default AutonCapBall;
