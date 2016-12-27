import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper'
import MyHeader3 from './MyHeader3';
import MyHeader2 from './MyHeader2';

const styles = {
  root: {
    display: 'flex',
  },
};

var CornerVortex = React.createClass({

  handleNext1: function () {
    this.props.handleScoreChange(this.props.scores.cornerVortexScore1 + 1, "cornerVortexScore1");
  },

  handlePrev1: function () {
    this.props.handleScoreChange(this.props.scores.cornerVortexScore1 - 1, "cornerVortexScore1");
  },

  handleNext2: function () {
    this.props.handleScoreChange(this.props.scores.cornerVortexScore2 + 1, "cornerVortexScore2");
  },

  handlePrev2: function () {
    this.props.handleScoreChange(this.props.scores.cornerVortexScore2 - 1, "cornerVortexScore2");
  },

  render() {
        var width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    return (
      <div>
        <h2 style={{ fontSize: 18, fontWeight: 400, paddingTop: 10, paddingBottom: 10, margin: 0 }}> Corner Vortex </h2>
        <div style={styles.root}>
          <div style={{textAlign: 'center', marginLeft: ((width*0.5)-150)}}>
            <MyHeader3> {this.props.team1}: </MyHeader3>
            <div style={{ height: 90, width: 130, margin: 0, textAlign: 'center', display: 'inline-block'}}>
              <p style={{marginTop: 5, marginBottom: 5}}>{"Particles Scored: " + this.props.scores.cornerVortexScore1}</p>
              <div>
                <RaisedButton
                  label="-"
                  secondary={true}
                            disabled = {true}
                  onTouchTap={this.handlePrev1}
                  style={{ marginRight: 5, height: 40, minWidth: 60}}
                  />
                <RaisedButton
                  label={'+'}
                  primary={true}
                            disabled = {true}
                  onTouchTap={this.handleNext1}
                  style={{height: 40, minWidth: 60}}
                  />
              </div>
            </div>
          </div>
          <div style={{textAlign: 'center'}}>
            <MyHeader3> {this.props.team2}: </MyHeader3>
            <div style={{ height: 90, width: 130, margin: 0, textAlign: 'center', display: 'inline-block' }}>
              <p style={{marginTop: 5, marginBottom: 5}}>{"Particles Scored: " + this.props.scores.cornerVortexScore2}</p>
              <div>
                <RaisedButton
                  label="-"
                  secondary={true}
                            disabled = {true}
                  onTouchTap={this.handlePrev2}
                  style={{ marginRight: 5, height: 40, minWidth: 60}}
                  />
                <RaisedButton
                  label="+"
                  primary={true}
                            disabled = {true}
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

export default CornerVortex;
