import React from 'react';
import TeamsList from './TeamsTabComponents/TeamsList'
import TeamView from './TeamsTabComponents/TeamView'
import TeamsMatchDetails from './TeamsTabComponents/TeamsMatchDetails';
import TeamsMatchList from './TeamsTabComponents/TeamsMatchList';
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
const headerStyle2 = {
    fontSize: 24,
    fontWeight: 400,
    paddingTop: 10,
    margin: 0,
};
const bodyStyle = {
    paddingLeft: 20,
    paddingRight: 20,
    margin: 0,
};

var TeamsTab = React.createClass({
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
                        getMatcheswithTeamNumberInCompetition={this.props.getMatcheswithTeamNumberInCompetition}
                        handleToTeamsList={this.props.handleToTeamsList} currentCompetition={this.props.currentCompetition}/>
                </div>
            );
        }
        else if (this.props.viewTeamsPartialMatchMode) {
            return (
                <div style={bodyStyle}>
                    <TeamsMatchDetails
                        matchSelected={this.props.matchSelected} handleToTeamsMatches={this.props.handleToTeamsMatches}
                        />
                </div>
            );
        }
        else {
            if (this.props.currentCompetition.name == "none") {
                return (
                    <div style={bodyStyle}>
                        <h2 style={headerStyle}> Select a Competition </h2> <br/>
                        <p> Please select a competition under the Competitions tab to see teams from that competition.</p>
                    </div>
                )
            }
            else {
                const matches = this.props.matches;
                var dataCalculator = new DataCalculator(matches);
                const averageMatchScore = dataCalculator.getAverageMatchScore();
                const averagePartialScore = dataCalculator.getAverageMatchPartialScore();
                const teams = this.props.getTeamsbyCompetition(this.props.currentCompetition.name)

                return (
                    <div style={bodyStyle}>
                        <h2 style={headerStyle}> {this.props.currentCompetition.name} </h2>
                        <h2 style={headerStyle2}> Teams </h2><br/>
                        <Divider/>
                        <Subheader> Teams (by AIS): </Subheader>
                        <TeamsList teams={teams} currentTeam={this.props.currentTeam} handleCurrentTeamUpdate={this.props.handleCurrentTeamUpdate}
                            handleToTeamView={this.props.handleToTeamView} getMatchesbyCompetition={this.props.getMatchesbyCompetition}
                            currentCompetition={this.props.currentCompetition} handleToTeamsMatches={this.props.handleToTeamsMatches}/>
                    </div>
                );
            }
        }
    }
});

export default TeamsTab;