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

var AutonButtons = React.createClass({
    handleChange1: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "autonButtonsScore1");
    },
    handleChange2: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "autonButtonsScore2");
    },
    render() {
        var width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        return (
            <div>
                <MyHeader2> Beacons </MyHeader2>
                <div style={styles.root}>
                    <div style={{ textAlign: 'center', marginRight: 50, marginLeft: ((width*0.5)-120)}}>
                        <MyHeader3> {this.props.team1}: </MyHeader3><br/>
                        <RadioButton
                            label="None"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.autonButtonsScore1 == 0}
                            value={0}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            />
                        <RadioButton
                            label="One"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.autonButtonsScore1 == 30}
                            value={30}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            />
                        <RadioButton
                            label="Both"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.autonButtonsScore1 == 60}
                            value={60}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            /> <br/>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <MyHeader3> {this.props.team2}: </MyHeader3><br/>
                        <RadioButton
                            label="None"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.autonButtonsScore2 == 0}
                            value={0}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            />
                        <RadioButton
                            label="One"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.autonButtonsScore2 == 30}
                            value={30}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            />
                        <RadioButton
                            label="Both"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.autonButtonsScore2 == 60}
                            value={60}
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

export default AutonButtons;