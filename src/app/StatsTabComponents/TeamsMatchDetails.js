import React from 'react';
import StaticVelVortexForm from './../StaticVelVortexForm';
import * as Colors from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

var TeamsMatchDetails = React.createClass({
    render() {
        return (
            <div>
                <FloatingActionButton secondary={true} mini={true} style={{ margin: 0, top: 'auto', right: 20, bottom: 20, left: 'auto', position: 'fixed', zIndex: 1100 }}
                    onTouchTap={this.props.handleToTeamsMatches}>
                    <ArrowBack />
                </FloatingActionButton>
                <StaticVelVortexForm matchSelected={this.props.matchSelected}/><br/>
                <br/><br/><br/>
            </div>
        );
    }
});
export default TeamsMatchDetails;