import React from 'react';
import * as Colors from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

var LeftNav = React.createClass({

    handleTeams: function() {
        this.props.handlePageChange("teams");
        this.props.handleNavOpenChange(false);
    },
    handleCompetitions: function() {
        this.props.handlePageChange("competitions");
        this.props.handleNavOpenChange(false);
    },
    handleStats: function() {
        this.props.handlePageChange("stats");
        this.props.handleNavOpenChange(false);
    },
    handleScoutMatch: function() {
        this.props.handlePageChange("matches");
        this.props.handleNavOpenChange(false);
    },
    handlePracticeForm: function() {
        this.props.handlePageChange("practiceForm");
        this.props.handleNavOpenChange(false);
    },
    handleMatchPerdictor: function() {
        this.props.handlePageChange("matchPredictor");
        this.props.handleNavOpenChange(false);
    },
    handleLogin: function() {
        this.props.handlePageChange("account");
        this.props.handleNavOpenChange(false);
    },
    handleWelcome: function() {
        this.props.handlePageChange("welcome");
        this.props.handleNavOpenChange(false);
    },
    render() {
        let forceNavDown = {'top': '58px'}
        return (
            <Drawer
                zDepth={2}
                containerStyle={forceNavDown}
                style={{textAlign: 'left'}}
                docked={false}
                width={150}
                open={this.props.navOpen}
                >
                <MenuItem onTouchTap={this.handleWelcome}> Welcome </MenuItem>
                <MenuItem onTouchTap={this.handleCompetitions}> Competitions </MenuItem>
                <MenuItem onTouchTap={this.handleLogin}> Account </MenuItem>
                <MenuItem onTouchTap={this.handleStats}> Statistics </MenuItem> 
                <MenuItem onTouchTap={this.handleTeams}> Teams </MenuItem>
                <MenuItem onTouchTap={this.handleScoutMatch}> Matches </MenuItem>
                <MenuItem onTouchTap={this.handlePracticeForm}> Practice Form </MenuItem>
                <MenuItem onTouchTap={this.handleMatchPerdictor}> Match Predictor </MenuItem>
                
            </Drawer>
        );
    }
});

export default LeftNav;