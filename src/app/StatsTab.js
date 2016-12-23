import React from 'react';
import TeamsList from './StatsTabComponents/TeamsList'
import TeamView from './StatsTabComponents/TeamView'
import TeamsMatchDetails from './StatsTabComponents/TeamsMatchDetails';
import TeamsMatchList from './StatsTabComponents/TeamsMatchList';
import DataCalculator from './DataCalculator';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import * as Colors from 'material-ui/styles/colors';

const headerStyle = {
    fontSize: 24,
    fontWeight: 400,
    paddingTop: 90,
    margin: 0,
};
const bodyStyle = {
    paddingLeft: 20,
    paddingRight: 20,
    margin: 0,
};

var StatsTab = React.createClass({
    render() {
        if (this.props.teamViewMode) {

            return (
                <div style={bodyStyle}>
                    <TeamView currentTeam={this.props.currentTeam} handleToTeamsList={this.props.handleToTeamsList}
                        handleToTeamsMatches={this.props.handleToTeamsMatches} getMatcheswithTeamNumber={this.props.getMatcheswithTeamNumber}
                        displayTime={this.props.displayTime} currentCompetition={this.props.currentCompetition}
                        containsUnscouted={this.props.containsUnscouted} handleMatchSelectedChange={this.props.handleMatchSelectedChange}
                        competitions={this.props.competitions} handleSelectedCompetitionChange={this.props.handleSelectedCompetitionChange}
                        getCompetitionswithTeamNumber={this.props.getCompetitionswithTeamNumber}/>
                </div>
            );
        }
        else if (this.props.teamsMatchesMode) {
            return (
                <div style={bodyStyle}>
                    <TeamsMatchList currentTeam={this.props.currentTeam} handleToTeamView={this.props.handleToTeamView}
                        handleToViewPartialMatchByTeam={this.props.handleToViewPartialMatchByTeam}
                        getMatcheswithTeamNumber={this.props.getMatcheswithTeamNumber} displayTime={this.props.displayTime}
                        selectedCompetition={this.props.selectedCompetition} containsUnscouted={this.props.containsUnscouted}
                        handleMatchSelectedChange={this.props.handleMatchSelectedChange} matchSelected={this.props.matchSelected}
                        getMatcheswithTeamNumberInCompetition={this.props.getMatcheswithTeamNumberInCompetition}/>
                </div>
            );
        }
        else if (this.props.viewTeamsPartialMatchMode) {
            return (
                <div style={bodyStyle}>
                    <h2 style={headerStyle}> Match Details </h2><br/>
                    <TeamsMatchDetails
                        matchSelected={this.props.matchSelected} handleToTeamsMatches={this.props.handleToTeamsMatches}
                        />
                </div>
            );
        }
        else {

            function getMatchesWithoutTest(array) {
                var newMatches = [];
                array.map(function (match, i) {
                    if (match.competition != "Test"){
                        newMatches.push(match)
                    }
                });
                return newMatches;
            }
            const matches = getMatchesWithoutTest(this.props.matches);

            var dataCalculator = new DataCalculator(matches);
            const averageMatchScore = dataCalculator.getAverageMatchScore();
            const averagePartialScore = dataCalculator.getAverageMatchPartialScore();
            const highestMatchScore = dataCalculator.getHighestMatchScore();
            const highestMatchScoreAlliance = dataCalculator.getHighestMatchScoreAlliance();
            const highestIndividualScore = dataCalculator.getHighestPartialMatchScore();
            const highestIndividualScoreTeam = dataCalculator.getHighestPartialMatchScoreTeam();

            return (
                <div style={bodyStyle}>
                    <h2 style={headerStyle}> Statistics </h2><br/>
                    <Divider/>
                    <Subheader> Overall Statistics: </Subheader>
                    <p>
                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> Average match score: </span>
                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {averageMatchScore} </span><br/><br/>

                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> Average AIS: </span>
                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {averagePartialScore} </span><br/><br/>

                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> Highest Match Score: </span>
                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {highestMatchScore} </span><br/>

                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> by: </span>
                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {highestMatchScoreAlliance} </span><br/><br/>

                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> Highest Individual Score: </span>
                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {highestIndividualScore} </span><br/>

                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 300, }}> by: </span>
                        <span style={{ color: Colors.grey900, fontSize: 16, fontWeight: 400, }}> {highestIndividualScoreTeam} </span>

                    </p><br/>
                    <Divider/>
                    <Subheader> Stats by Team: </Subheader>
                    <TeamsList teams={this.props.teams} currentTeam={this.props.currentTeam} handleCurrentTeamUpdate={this.props.handleCurrentTeamUpdate}
                        handleToTeamView={this.props.handleToTeamView}/>
                </div>
            );
        }
    }
});

export default StatsTab;