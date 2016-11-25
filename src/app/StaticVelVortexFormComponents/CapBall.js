import React from 'react';
import MyHeader2 from './MyHeader2';
import MyHeader3 from './MyHeader3';
import RadioButton from 'material-ui/RadioButton';
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

var CapBall = React.createClass({
    handleChange1: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "capBallScore1");
    },
    handleChange2: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "capBallScore2");
    },
    render() {
        return (
            <div>
                <MyHeader2> Cap Ball </MyHeader2>
                <div style={styles.root}>
                    <div style={{ textAlign: 'center', marginRight: 50, marginLeft: ((screen.width*0.5)-135)}}>
                        <MyHeader3> {this.props.team1}: </MyHeader3><br/>
                        <RadioButton
                            label="None"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.capBallScore1 == 0}
                            value={0}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="Low"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.capBallScore1 == 10}
                            value={10}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="High"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.capBallScore1 == 20}
                            value={20}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="Capped"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.capBallScore1 == 40}
                            value={40}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            /> <br/>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <MyHeader3> {this.props.team2}: </MyHeader3><br/>
                        <RadioButton
                            label="None"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.capBallScore2 == 0}
                            value={0}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="Low"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.capBallScore2 == 10}
                            value={10}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="High"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.capBallScore2 == 20}
                            value={20}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="Capped"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.capBallScore2 == 40}
                            value={40}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            /> <br/>
                    </div>
                </div>
            </div>
        );
    }
});

export default CapBall;