import React from 'react';
import StaticVelVortexForm from './../StaticVelVortexForm';
import * as Colors from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

var TeamsMatchDetails = React.createClass({
    render() {
        if (this.props.matchSelected.allianceColor == "Red") {
            return (
                <div>
                    <FloatingActionButton secondary={true} mini={true} style={{ margin: 0, top: 'auto', right: 20, bottom: 20, left: 'auto', position: 'fixed', zIndex: 1100 }}
                        onTouchTap={this.props.handleToTeamsMatches}>
                        <ArrowBack />
                    </FloatingActionButton>
                    <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0, fontSize: 20, }}>
                        <span style={{ color: Colors.red700 }}> Red 1: {this.props.matchSelected.red1}</span>,
                        <span style={{ color: Colors.red700 }}> Red 2: {this.props.matchSelected.red2}</span>
                    </p><br/>
                    <StaticVelVortexForm matchSelected={this.props.matchSelected}/><br/>
                    <br/><br/><br/>
                </div>
            );
        }
        else {
            return (
                <div>
                    <FloatingActionButton secondary={true} mini={true} style={{ margin: 0, top: 'auto', right: 20, bottom: 20, left: 'auto', position: 'fixed', zIndex: 1100 }}
                        onTouchTap={this.props.handleToTeamsMatches}>
                        <ArrowBack />
                    </FloatingActionButton>
                    <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0, fontSize: 20, }}>
                        <span style={{ color: Colors.blue700 }}> Blue 1: {this.props.matchSelected.blue1}</span>,
                        <span style={{ color: Colors.blue700 }}> Blue 2: {this.props.matchSelected.blue2} </span>
                    </p><br/>
                    <StaticVelVortexForm matchSelected={this.props.matchSelected}/><br/>
                    <br/><br/><br/>
                </div>
            );
        }
    }
});
export default TeamsMatchDetails;