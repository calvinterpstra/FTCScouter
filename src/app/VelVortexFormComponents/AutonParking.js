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

var AutonParking = React.createClass({
    handleChange1: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "autonParkingScore1");
    },
    handleChange2: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "autonParkingScore2");
    },
    render() {
        return (
            <div>
                <MyHeader2>Auton Parking</MyHeader2>
                <div style={styles.root}>
                    <div style={{ textAlign: 'center', marginRight: 50, marginLeft: ((screen.width*0.5)-120)}}>
                        <MyHeader3> {this.props.team1}: </MyHeader3><br/>
                        <RadioButton
                            label="None"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.autonParkingScore1 == 0}
                            value={0}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            />
                        <RadioButton
                            label="Partial"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.autonParkingScore1 == 5}
                            value={5}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            />
                        <RadioButton
                            label="Full"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.autonParkingScore1 == 10}
                            value={10}
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
                            checked={this.props.scores.autonParkingScore2 == 0}
                            value={0}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            />
                        <RadioButton
                            label="Partial"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.autonParkingScore2 == 5}
                            value={5}
                            iconStyle={{
                                fill: Colors.blue500
                            }}
                            />
                        <RadioButton
                            label="Full"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.autonParkingScore2 == 10}
                            value={10}
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

export default AutonParking;