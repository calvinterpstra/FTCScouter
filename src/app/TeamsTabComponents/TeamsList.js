import React from 'react';
import {List, ListItem} from 'material-ui/List';
import DataCalculator from './../DataCalculator';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import * as Colors from 'material-ui/styles/colors';

var TeamsList = React.createClass({
    teamListItemSelected: function (team) {
        this.props.handleCurrentTeamUpdate(team);
        this.props.handleToTeamsMatches();
    },

    render() {
        var teams = this.props.teams;
        const matches = this.props.getMatchesbyCompetition(this.props.currentCompetition.name);
        var dataCalculator = new DataCalculator(matches);
        const averageMatchScore = dataCalculator.getAverageMatchPartialScoreForTeam(this.props.currentTeam.teamNumber)

        function sortByAveragePartialScore(array) {
            return array.sort(function (team1, team2) {
                var x = dataCalculator.getAverageMatchPartialScoreForTeam(team1.teamNumber);
                var y = dataCalculator.getAverageMatchPartialScoreForTeam(team2.teamNumber);
                if (x == "No data" && y != "No data") {
                    return 1;
                }
                else if (x != "No data" && y == "No data") {
                    return -1;
                }
                else if (x < y) {
                    return 1;
                }
                else if (x > y) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }
        sortByAveragePartialScore(teams);

        var teamsList = teams.map(function (team, i) {
            return <ListItem primaryText={<p style={{ padding: 0, margin: 0 }}>
                <span style={{ fontSize: 16, fontWeight: 400, paddingRight: 50 }}> {i + 1} </span>
                <span style={{ fontSize: 16, fontWeight: 400, }}> {team.teamNumber}</span>:
                <span style={{ fontSize: 16, fontWeight: 300, }}> {dataCalculator.getAverageMatchPartialScoreForTeam(team.teamNumber) } </span>
            </p>}
                key={i} onTouchTap={this.teamListItemSelected.bind(null, team) }/>;
        }, this);

        var teamsTable = teams.map(function (team, i) {
            return (<TableRow key={i} onTouchTap={this.teamListItemSelected.bind(null, team) }>
                <TableRowColumn style={{ fontSize: 16, fontWeight: 400, width: 10 }}> {i + 1} </TableRowColumn>
                <TableRowColumn style={{ fontSize: 16, fontWeight: 400, width: 40 }}> {team.teamNumber}: </TableRowColumn>
                <TableRowColumn style={{ fontSize: 16, fontWeight: 300, width: 40 }}> {dataCalculator.getAverageMatchPartialScoreForTeam(team.teamNumber) }</TableRowColumn>
            </TableRow>)
        }, this);

        return (
            <div>
                <p style={{textAlign:"left", paddingLeft: 10, marginBottom: -10, color: Colors.grey700, fontWeight: 300}}> AIS: Average Individual Score </p>
                <Table selectable={true} multiSelectable={false}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn style={{ width: 10, color: Colors.grey700 }}> Rank </TableHeaderColumn>
                            <TableHeaderColumn style={{ width: 40, color: Colors.grey700 }}> Team Number </TableHeaderColumn>
                            <TableHeaderColumn style={{ width: 40, color: Colors.grey700 }}> AIS </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} deselectOnClickaway={true} showRowHover={false} stripedRows={false}>
                        {teamsTable}
                    </TableBody>
                </Table>
                <br/><br/><br/><br/>
            </div>
        );
    }
});
export default TeamsList;


// <div>
//     <List>{teamsList}</List>
//     <br/><br/><br/><br/>

// </div>