import React from 'react';
import MyHeader2 from './MyHeader2';
import MyHeader3 from './MyHeader3';
import Checkbox from 'material-ui/Checkbox';
import * as Colors from 'material-ui/styles/colors';

const styles = {
    checkbox: {
        marginBottom: 16,
    },
    root: {
        display: 'flex',
        paddingLeft: '10%',
    },
};

var AutonButton = React.createClass({
    handleChange1: function (event) {
        var isPressed = (event.target.checked);
        var score = 0;
        if (isPressed) {
            score = 20;
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "autonButtonScore1");
    },
    handleChange2: function (event) {
        var isPressed = (event.target.checked);
        var score = 0;
        if (isPressed) {
            score = 20;
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "autonButtonScore2");
    },
    render() {
        return (
            <div>
                <MyHeader2>Button</MyHeader2>
                <div style={styles.root}>
                    <div>
                        <MyHeader3> {this.props.team1}: </MyHeader3> <br/>
                        <Checkbox
                            label="Pressed Button"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.autonButtonScore1 == 20}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            />
                    </div>
                    <div>
                        <MyHeader3> {this.props.team2}: </MyHeader3> <br/>
                        <Checkbox
                            label="Pressed Button"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.autonButtonScore2 == 20}
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

export default AutonButton;