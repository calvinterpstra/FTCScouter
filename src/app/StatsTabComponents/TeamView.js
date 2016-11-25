import React from 'react';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import * as Colors from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';
import DataCalculator from './../DataCalculator';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

const headerStyle = {
    fontSize: 24,
    fontWeight: 400,
    paddingTop: 90,
    margin: 0,
};
const itemStyle = {
    fontSize: 18,
    fontWeight: 300,
    paddingTop: 0,
    margin: 0,
};

var TeamView = React.createClass({
    handleSelectCompetition: function (competition) {
        this.props.handleSelectedCompetitionChange(competition);
        this.props.handleToTeamsMatches();
    },
    render() {
        var competitions = this.props.getCompetitionswithTeamNumber(this.props.currentTeam.teamNumber);
        var competitionsList = competitions.map(function (competition, i) {
            return <ListItem primaryText={competition.name} key={i} onTouchTap={this.handleSelectCompetition.bind(null, competition) }/>;
        }, this);

        const matches = this.props.getMatcheswithTeamNumber(this.props.currentTeam.teamNumber);
        var dataCalculator = new DataCalculator(matches);
        const averageMatchScore = dataCalculator.getAverageMatchScoreForTeam(this.props.currentTeam.teamNumber);
        const averagePartialScore = dataCalculator.getAverageMatchPartialScoreForTeam(this.props.currentTeam.teamNumber);
        const wins = dataCalculator.getTotalWinsForTeam(this.props.currentTeam.teamNumber)
        const losses = dataCalculator.getTotalLossesForTeam(this.props.currentTeam.teamNumber)
        var kd = wins / losses;
        if (wins == "No data" || losses == "No data") {
            kd = "n/a";
        }
        return (
            <div>
                <FloatingActionButton secondary={true} mini={true} style={{ margin: 0, top: 'auto', right: 20, bottom: 20, left: 'auto', position: 'fixed', zIndex: 1100 }}
                    onTouchTap={this.props.handleToTeamsList}>
                    <ArrowBack />
                </FloatingActionButton>
                <h2 style={headerStyle}> {this.props.currentTeam.teamNumber} </h2><br/>
                <Divider/>
                <Subheader> Overall Statistics: </Subheader>
                <p>
                    <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> Average match score: </span>
                    <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {averageMatchScore} </span><br/>

                    <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> Average individual score: </span>
                    <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {averagePartialScore} </span><br/>

                    <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> Wins: </span>
                    <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {wins} </span><br/>

                    <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> Losses: </span>
                    <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {losses} </span><br/>

                    <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> Wins / Losses: </span>
                    <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {kd} </span><br/>

                </p>
                <Divider/>
                <Subheader> See Matches From: </Subheader>
                <List> {competitionsList} </List>
                <br/><br/><br/><br/>
            </div>
        );
    }
});
export default TeamView;