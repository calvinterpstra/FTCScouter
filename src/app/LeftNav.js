import React from 'react';
import * as Colors from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

var LeftNav = React.createClass({

    handleTeams: function() {
        this.scrollWindow();
        this.props.handlePageChange("teams");
        this.props.handleNavOpenChange(false);
    },
    handleCompetitions: function() {
        this.scrollWindow();
        this.props.handlePageChange("competitions");
        this.props.handleNavOpenChange(false);
    },
    handleStats: function() {
        this.scrollWindow();
        this.props.handlePageChange("stats");
        this.props.handleNavOpenChange(false);
    },
    handleScoutMatch: function() {
        this.scrollWindow();
        this.props.handlePageChange("matches");
        this.props.handleNavOpenChange(false);
    },
    handlePracticeForm: function() {
        this.scrollWindow();
        this.props.handlePageChange("practiceForm");
        this.props.handleNavOpenChange(false);
    },
    handleMatchPerdictor: function() {
        this.scrollWindow();
        this.props.handlePageChange("matchPredictor");
        this.props.handleNavOpenChange(false);
    },
    handleLogin: function() {
        this.scrollWindow();
        this.props.handlePageChange("account");
        this.props.handleNavOpenChange(false);
    },
    handleWelcome: function() {
        this.scrollWindow();
        this.props.handlePageChange("welcome");
        this.props.handleNavOpenChange(false);
    },
    scrollWindow: function() {
        window.scrollTo(0,0);
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
                onRequestChange={(open) => this.props.handleNavOpenChange(open)}
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