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
        paddingLeft: '10%',
    },
};

var AutonClimbers = React.createClass({
    handleChange1: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "autonClimbersScore1");
    },
    handleChange2: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "autonClimbersScore2");
    },
    render() {
        return (
            <div>
                <MyHeader2>Auton Climbers</MyHeader2>
                <div style={styles.root}>
                    <div style={{ textAlign: 'center', marginRight: 50, marginLeft: 30}}>
                        <MyHeader3> {this.props.team1}: </MyHeader3><br/>
                        <RadioButton
                            label="None"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.autonClimbersScore1 == 0}
                            value={0}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            />
                        <RadioButton
                            label="One"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.autonClimbersScore1 == 20}
                            value={20}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            />
                        <RadioButton
                            label="Both"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.autonClimbersScore1 == 40}
                            value={40}
                            iconStyle={{
                                fill: Colors.blue500
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
                            checked={this.props.scores.autonClimbersScore2 == 0}
                            value={0}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            />
                        <RadioButton
                            label="One"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.autonClimbersScore2 == 20}
                            value={20}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            />
                        <RadioButton
                            label="Both"
                            disabled = {true}
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.autonClimbersScore2 == 40}
                            value={40}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            /> <br/>
                    </div>
                </div>
            </div>
        );
    }
});

export default AutonClimbers;