import React from 'react';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import * as Colors from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';
import DataCalculator from './../DataCalculator';

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

var TeamsMatchList = React.createClass({
    getInitialState: function () {
        return {
            unscoutedDialogOpen: false,
        }
    },
    handleClose: function () {
        this.setState({ unscoutedDialogOpen: false });
    },
    unscoutedListItemSelected: function (partialMatch, match) {
        this.setState({ unscoutedDialogOpen: true });
    },
    scoutedListItemSelected: function (partialMatch, match) {
        this.props.handleToViewPartialMatchByTeam();
        var newMatchSelected = this.props.matchSelected;
        newMatchSelected.red1 = match.red1;
        newMatchSelected.red2 = match.red2;
        newMatchSelected.blue1 = match.blue1;
        newMatchSelected.blue2 = match.blue2;
        newMatchSelected.matchNumber = match.matchNumber;
        newMatchSelected.allianceColor = partialMatch.allianceColor;
        newMatchSelected.user = partialMatch.user;
        newMatchSelected.scores = partialMatch.scores;
        newMatchSelected.totalScore = partialMatch.totalScore;
        newMatchSelected.partialScore1 = partialMatch.partialScore1;
        newMatchSelected.partialScore2 = partialMatch.partialScore2;
        this.props.handleMatchSelectedChange(newMatchSelected);
    },

    render() {

        const matches = this.props.getMatcheswithTeamNumber(this.props.currentTeam.teamNumber);

        function sortByKey(array, key) {
            return array.sort(function (a, b) {
                var x = a[key]; var y = b[key];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }

        sortByKey(matches, "matchNumber");
        matches.reverse();

        var matchList = matches.map(function (match, i) {
            var nestedPartialMatches = match.partialMatches.map(function (partialMatch, i) {
                if (partialMatch.allianceColor == "Red") {
                    if (partialMatch.totalScore == -1) {
                        return <ListItem primaryText={
                            <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0 }}>
                                <span style={{ color: Colors.red700 }}> {match.red1}</span>,
                                <span style={{ color: Colors.red700 }}> {match.red2} </span>
                                <span style={{ color: Colors.grey700, fontSize: 14, fontWeight: 200, }}> --unscouted </span>
                            </p>}
                            key={i} onTouchTap={this.unscoutedListItemSelected.bind(null, partialMatch, match) }/>;
                    }
                    else {
                        return <ListItem primaryText={
                            <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0 }}>
                                <span style={{ color: Colors.red700 }}> {match.red1}</span>,
                                <span style={{ color: Colors.red700 }}> {match.red2} </span>:
                                <span style={{ color: Colors.darkBlack }}> {partialMatch.totalScore} </span>
                            </p>}
                            secondaryTextLines={2}
                            secondaryText={<p>
                                <span style={{ color: Colors.green700 }}> {partialMatch.user} </span><br/>
                                <span style={{ color: Colors.grey600 }}> {this.props.displayTime(partialMatch.time) } </span>
                            </p>}
                            key={i} onTouchTap={this.scoutedListItemSelected.bind(null, partialMatch, match) }/>;
                    }
                }
                else {
                    if (partialMatch.totalScore == -1) {
                        return <ListItem primaryText={
                            <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0 }}>
                                <span style={{ color: Colors.blue700 }}> {match.blue1}</span>,
                                <span style={{ color: Colors.blue700 }}> {match.blue2} </span>
                                <span style={{ color: Colors.grey700, fontSize: 14, fontWeight: 200, }}> --unscouted </span>
                            </p>}
                            key={i} onTouchTap={this.unscoutedListItemSelected.bind(null, partialMatch, match) }/>;
                    }
                    else {
                        return <ListItem primaryText={
                            <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0 }}>
                                <span style={{ color: Colors.blue700 }}> {match.blue1}</span>,
                                <span style={{ color: Colors.blue700 }}> {match.blue2} </span>:
                                <span style={{ color: Colors.darkBlack }}> {partialMatch.totalScore} </span>
                            </p>}
                            secondaryTextLines={2}
                            secondaryText={<p>
                                <span style={{ color: Colors.green700 }}> {partialMatch.user} </span><br/>
                                <span style={{ color: Colors.grey600 }}> {this.props.displayTime(partialMatch.time) } </span>
                            </p>}
                            key={i} onTouchTap={this.scoutedListItemSelected.bind(null, partialMatch, match) }/>;
                    }
                }
            }, this);
            if (this.props.currentCompetition.name == match.competition) {
                if (this.props.containsUnscouted(match)) {
                    return <ListItem primaryText={
                        <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0 }}>
                            <span style={{ color: Colors.grey600, fontSize: 20, fontWeight: 200, }}> {match.matchNumber} </span>:
                            <span style={{ color: Colors.red600 }}> {match.red1} </span>,
                            <span style={{ color: Colors.red600 }}> {match.red2} </span>|
                            <span style={{ color: Colors.blue600 }}> {match.blue1} </span>,
                            <span style={{ color: Colors.blue600 }}> {match.blue2} </span>
                        </p>}
                        initiallyOpen={false} primaryTogglesNestedList={true} nestedItems={nestedPartialMatches} key={i}/>;
                }
                else {
                    var dataCalculator = new DataCalculator(matches);
                    const getWinningAlliance = dataCalculator.getWinningAlliance(match)
                    if (getWinningAlliance == "Red") {
                        return <ListItem primaryText={
                            <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0 }}>
                                <span style={{ color: Colors.grey900, fontSize: 20, fontWeight: 400, }}> {match.matchNumber} </span>:
                                <span style={{ color: Colors.red700, fontWeight: 400, }}> {match.red1} </span>,
                                <span style={{ color: Colors.red700, fontWeight: 400, }}> {match.red2} </span>|
                                <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue1} </span>,
                                <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue2} </span>
                            </p>}
                            initiallyOpen={false} primaryTogglesNestedList={true} nestedItems={nestedPartialMatches} key={i}/>;
                    }
                    else if (getWinningAlliance == "Blue") {
                        return <ListItem primaryText={
                            <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0 }}>
                                <span style={{ color: Colors.grey900, fontSize: 20, fontWeight: 400, }}> {match.matchNumber} </span>:
                                <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red1} </span>,
                                <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red2} </span>|
                                <span style={{ color: Colors.blue700, fontWeight: 400, }}> {match.blue1} </span>,
                                <span style={{ color: Colors.blue700, fontWeight: 400, }}> {match.blue2} </span>
                            </p>}
                            initiallyOpen={false} primaryTogglesNestedList={true} nestedItems={nestedPartialMatches} key={i}/>;
                    }
                    else {
                        return <ListItem primaryText={
                            <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0 }}>
                                <span style={{ color: Colors.grey900, fontSize: 20, fontWeight: 400, }}> {match.matchNumber} </span>:
                                <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red1} </span>,
                                <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red2} </span>|
                                <span style={{ color: Colors.blue700, fontWeight: 400, }}> {match.blue1} </span>,
                                <span style={{ color: Colors.blue700, fontWeight: 400, }}> {match.blue2} </span>
                            </p>}
                            initiallyOpen={false} primaryTogglesNestedList={true} nestedItems={nestedPartialMatches} key={i}/>;
                    }
                }
            }
        }, this);

        const compOnlyMatches = this.props.getMatcheswithTeamNumberInCompetition(this.props.currentTeam.teamNumber, this.props.currentCompetition.name);
        var dataCalculator = new DataCalculator(compOnlyMatches);
        const averageMatchScore = dataCalculator.getAverageMatchScoreForTeam(this.props.currentTeam.teamNumber);
        const averagePartialScore = dataCalculator.getAverageMatchPartialScoreForTeam(this.props.currentTeam.teamNumber);
        const wins = dataCalculator.getTotalWinsForTeam(this.props.currentTeam.teamNumber)
        const losses = dataCalculator.getTotalLossesForTeam(this.props.currentTeam.teamNumber)
        var kd = wins / losses;
        if (wins == "No data" || losses == "No data") {
            kd = "n/a";
        }

        const actionsUnscouted = [
            <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose}/>,
        ];

        return (
            <div>
                <h2 style={headerStyle}> {this.props.currentTeam.teamNumber} </h2><br/>
                <Divider/>
                <Subheader> Statistics at {this.props.currentCompetition.name}: </Subheader>
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
                <Divider/><br/>
                <h2 style={headerStyle2}> Matches From </h2>
                <h2 style={headerStyle2}> {this.props.currentCompetition.name}: </h2><br/>
                <List>{matchList}</List>
                <RaisedButton label="Back" secondary={true} disabled={false} onTouchTap={this.props.handleToTeamsList}/>

                <Dialog title="Unscouted Match" contentStyle={{ width: '100%', maxWidth: 'none', }}
                    actions={actionsUnscouted} modal={true} open={this.state.unscoutedDialogOpen}/>
                <br/><br/><br/><br/>
            </div>
        );
    }
});
export default TeamsMatchList;