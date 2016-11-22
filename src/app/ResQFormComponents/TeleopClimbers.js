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

var TeleopClimbers = React.createClass({
    handleChange1: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "teleopClimbersScore1");
    },
    handleChange2: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "teleopClimbersScore2");
    },
    render() {
        return (
            <div>
                <MyHeader2>Teleop Climbers</MyHeader2>
                <div style={styles.root}>
                    <div style={{ textAlign: 'center', marginRight: 50, marginLeft: 35}}>
                        <MyHeader3> {this.props.team1}: </MyHeader3><br/>
                        <RadioButton
                            label="None"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.teleopClimbersScore1 == 0}
                            value={0}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                        <RadioButton
                            label="One"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.teleopClimbersScore1 == 10}
                            value={10}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                        <RadioButton
                            label="Both"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.teleopClimbersScore1 == 20}
                            value={20}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            /> <br/>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <MyHeader3> {this.props.team2}: </MyHeader3><br/>
                        <RadioButton
                            label="None"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.teleopClimbersScore2 == 0}
                            value={0}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                        <RadioButton
                            label="One"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.teleopClimbersScore2 == 10}
                            value={10}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                        <RadioButton
                            label="Both"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.teleopClimbersScore2 == 20}
                            value={20}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            /> <br/>
                    </div>
                </div>
            </div>
        );
    }
});

export default TeleopClimbers;