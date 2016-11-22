import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper'
import MyHeader3 from './MyHeader3';

const styles = {
  root: {
    display: 'flex',
    paddingLeft: '10%',
  },
};

var MidBucket = React.createClass({

  handleNext1: function () {
    this.props.handleScoreChange(this.props.scores.midBucketScore1 + 10, "midBucketScore1");
  },

  handlePrev1: function () {
    this.props.handleScoreChange(this.props.scores.midBucketScore1 - 10, "midBucketScore1");
  },

  handleNext2: function () {
    this.props.handleScoreChange(this.props.scores.midBucketScore2 + 10, "midBucketScore2");
  },

  handlePrev2: function () {
    this.props.handleScoreChange(this.props.scores.midBucketScore2 - 10, "midBucketScore2");
  },

  render() {
    return (
      <div>
        <MyHeader3> MidBucket </MyHeader3><br/>
        <div style={styles.root}>
          <div style={{ textAlign: 'center' }}>
            <MyHeader3> {this.props.team1}: </MyHeader3>
            <div style={{ height: 50, width: 130, margin: 0, textAlign: 'center', display: 'inline-block' }}>
              <p style={{ marginTop: 5, marginBottom: 5 }}>{"Blocks Scored: " + this.props.scores.midBucketScore1 / 10}</p>

            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <MyHeader3> {this.props.team2}: </MyHeader3>
            <div style={{ height: 50, width: 130, margin: 0, textAlign: 'center', display: 'inline-block' }}>
              <p style={{ marginTop: 5, marginBottom: 5 }}>{"Blocks Scored: " + this.props.scores.midBucketScore2 / 10}</p>

            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default MidBucket;
