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

var AllClearSignal = React.createClass({
    handleChange1: function (event) {
        var isPressed = (event.target.checked);
        switch(event.target.value){
            case "low":
                if(isPressed){
                    this.props.handleScoreChange(20, "lowZiplineClimberScore1");
                }
                else {
                    this.props.handleScoreChange(0, "lowZiplineClimberScore1");
                }
                break;
            case "mid":
                if(isPressed){
                    this.props.handleScoreChange(20, "midZiplineClimberScore1");
                }
                else {
                    this.props.handleScoreChange(0, "midZiplineClimberScore1");
                }
                break;
            case "high":
                if(isPressed){
                    this.props.handleScoreChange(20, "highZiplineClimberScore1");
                }
                else {
                    this.props.handleScoreChange(0, "highZiplineClimberScore1");
                }
                break;
            default:
                console.log("default1: " + event.target.label)
                break;
        }
    },
    handleChange2: function (event) {
        var isPressed = (event.target.checked);
        switch(event.target.value){
            case "low":
                if(isPressed){
                    this.props.handleScoreChange(20, "lowZiplineClimberScore2");
                }
                else {
                    this.props.handleScoreChange(0, "lowZiplineClimberScore2");
                }
                break;
            case "mid":
                if(isPressed){
                    this.props.handleScoreChange(20, "midZiplineClimberScore2");
                }
                else {
                    this.props.handleScoreChange(0, "midZiplineClimberScore2");
                }
                break;
            case "high":
                if(isPressed){
                    this.props.handleScoreChange(20, "highZiplineClimberScore2");
                }
                else {
                    this.props.handleScoreChange(0, "highZiplineClimberScore2");
                }
                break;
            default:
                console.log("default2: " + event.target.label)
                break;
        }
    },
    render() {
        return (
            <div>
                <MyHeader2>Zipline Climbers</MyHeader2>
                <div style={styles.root}>
                    <div style={{ textAlign: 'center', marginRight: 40, marginLeft: 25}}>
                        <MyHeader3> {this.props.team1}: </MyHeader3> <br/>
                        <Checkbox
                            label="Low"
                            value="low"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.lowZiplineClimberScore1 == 20}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                        <Checkbox
                            label="Mid"
                            value="mid"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.midZiplineClimberScore1 == 20}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                        <Checkbox
                            label="High"
                            value="high"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.highZiplineClimberScore1 == 20}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <MyHeader3> {this.props.team2}: </MyHeader3> <br/>
                        <Checkbox
                            label="Low"
                            value="low"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.lowZiplineClimberScore2 == 20}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                        <Checkbox
                            label="Mid"
                            value="mid"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.midZiplineClimberScore2 == 20}
                            iconStyle={{
                                fill: Colors.green500
                            }}
                            />
                        <Checkbox
                            label="High"
                            value="high"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.highZiplineClimberScore2 == 20}
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

export default AllClearSignal;
