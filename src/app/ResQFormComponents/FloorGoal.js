import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper'
import MyHeader3 from './MyHeader3';

const styles = {
  root: {
    display: 'flex',
  },
};

var FloorGoal = React.createClass({

  handleNext1: function () {
    this.props.handleScoreChange(this.props.scores.floorGoalScore1 + 1, "floorGoalScore1");
  },

  handlePrev1: function () {
    this.props.handleScoreChange(this.props.scores.floorGoalScore1 - 1, "floorGoalScore1");
  },

  handleNext2: function () {
    this.props.handleScoreChange(this.props.scores.floorGoalScore2 + 1, "floorGoalScore2");
  },

  handlePrev2: function () {
    this.props.handleScoreChange(this.props.scores.floorGoalScore2 - 1, "floorGoalScore2");
  },

  render() {
    return (
      <div>
        <MyHeader3> FloorGoal </MyHeader3><br/>
        <div style={styles.root}>
          <div style={{textAlign: 'center'}}>
            <MyHeader3> {this.props.team1}: </MyHeader3>
            <div style={{ height: 100, width: 130, margin: 0, textAlign: 'center', display: 'inline-block'}}>
              <p style={{marginTop: 5, marginBottom: 5}}>{"Blocks Scored: " + this.props.scores.floorGoalScore1}</p>
              <div>
                <RaisedButton
                  label="-"
                  secondary={true}
                  disabled={this.props.scores.floorGoalScore1 === 0}
                  onTouchTap={this.handlePrev1}
                  style={{ marginRight: 5, height: 40, minWidth: 60}}
                  />
                <RaisedButton
                  label={'+'}
                  primary={true}
                  disabled={this.props.scores.floorGoalScore1 === 16}
                  onTouchTap={this.handleNext1}
                  style={{height: 40, minWidth: 60}}
                  />
              </div>
            </div>
          </div>
          <div style={{textAlign: 'center'}}>
            <MyHeader3> {this.props.team2}: </MyHeader3>
            <div style={{ height: 100, width: 130, margin: 0, textAlign: 'center', display: 'inline-block' }}>
              <p style={{marginTop: 5, marginBottom: 5}}>{"Blocks Scored: " + this.props.scores.floorGoalScore2}</p>
              <div>
                <RaisedButton
                  label="-"
                  secondary={true}
                  disabled={this.props.scores.floorGoalScore2 === 0}
                  onTouchTap={this.handlePrev2}
                  style={{ marginRight: 5, height: 40, minWidth: 60}}
                  />
                <RaisedButton
                  label="+"
                  primary={true}
                  disabled={this.props.scores.floorGoalScore2 === 16}
                  onTouchTap={this.handleNext2}
                  style={{height: 40, minWidth: 60}}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default FloorGoal;
