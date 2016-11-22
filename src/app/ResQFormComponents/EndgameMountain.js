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

var EndgameMountain = React.createClass({
    handleChange1: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "endgameMountainScore1");
    },
    handleChange2: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "endgameMountainScore2");
    },
    render() {
        return (
            <div>
                <MyHeader2>Endgame Mountain</MyHeader2>
                <div style={styles.root}>
                    <div style={{ textAlign: 'center'}}>
                        <MyHeader3> {this.props.team1}: </MyHeader3><br/>
                        <RadioButton
                            label="None"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.endgameMountainScore1 == 0}
                            value={0}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="Partial or Parking Zone"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.endgameMountainScore1 == 5}
                            value={5}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="Low Zone"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.endgameMountainScore1 == 10}
                            value={10}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="Mid Zone"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.endgameMountainScore1 == 20}
                            value={20}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="High Zone"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.endgameMountainScore1 == 40}
                            value={40}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="Hanging"
                            style={styles.checkbox}
                            onCheck={this.handleChange1}
                            checked={this.props.scores.endgameMountainScore1 == 80}
                            value={80}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            /> <br/>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <MyHeader3> {this.props.team2}: </MyHeader3><br/>
                        <RadioButton
                            label="None"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.endgameMountainScore2 == 0}
                            value={0}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="Partial or Parking Zone"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.endgameMountainScore2 == 5}
                            value={5}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="Low Zone"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.endgameMountainScore2 == 10}
                            value={10}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="Mid Zone"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.endgameMountainScore2 == 20}
                            value={20}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="High Zone"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.endgameMountainScore2 == 40}
                            value={40}
                            iconStyle={{
                                fill: Colors.red500
                            }}
                            />
                        <RadioButton
                            label="Hanging"
                            style={styles.checkbox}
                            onCheck={this.handleChange2}
                            checked={this.props.scores.endgameMountainScore2 == 80}
                            value={80}
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

export default EndgameMountain;