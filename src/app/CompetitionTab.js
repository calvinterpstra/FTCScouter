import React from 'react';
import { Link } from 'react-router'
import Dialog from 'material-ui/Dialog';
import {List, ListItem} from 'material-ui/List';
import * as Colors from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info'
import IconButton from 'material-ui/IconButton';

import DataCalculator from './DataCalculator';
import Setup from './CompetitionTabComponents/Setup'

const headerStyle1 = {
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

var CompetitionTab = React.createClass({
    getInitialState: function () {
        return {
            newCompetitionDialogOpen: false,
            temporaryCompetitionName: "",
            isError: true,
            errorText: "",
            setupDialogOpen: false,
            matchNumberError: true,
            red1Error: true,
            red2Error: true,
            blue1Error: true,
            blue2Error: true,
        }
    },
    contextTypes: {
        router: React.PropTypes.object
    },
    handleSelectCompetition: function (competition) {
        this.props.handleCompetitionChange(competition);
        const path = `/${competition.name}/${this.props.currentTab}`;
        this.context.router.push(path);
    },
    handleOpenAddCompetition: function (competition) {
        if (!this.props.signedIn) {
            this.props.sendMessage("Can not add competition without signing in");
            this.setState({ newCompetitionDialogOpen: false });
        }
        else {
            this.setState({ newCompetitionDialogOpen: true });
        }
    },
    handleCloseAddCompetition: function (competition) {
        this.setState({ newCompetitionDialogOpen: false });
    },
    checkForErrors: function (event) {
        if (event.target.value != null && event.target.value != "" && event.target.value != undefined) {
            this.setState({ errorText: '' })
            this.setState({ isError: false })
            this.setState({ temporaryCompetitionName: event.target.value });
        }
        else {
            this.setState({ errorText: 'Competition name not valid' })
            this.setState({ isError: true })
        }
    },
    handleSubmitCompetition: function () {
        this.props.handleCompetitionChangeByName(this.state.temporaryCompetitionName);
        this.props.addCompetitionByName(this.state.temporaryCompetitionName);
        this.handleCloseAddCompetition();
        const path = `/${this.state.temporaryCompetitionName}/${this.props.currentTab}`;
        this.context.router.push(path);
    },
    handleAddMatch: function (competition) {
        if (!this.props.signedIn) {
            this.props.sendMessage("Can not add matches without signing in")
            this.setState({ setupDialogOpen: false });
        }
        else {
            this.setState({ setupDialogOpen: true });
        }
    },
    handleCloseAddMatch: function () {
        this.setState({ setupDialogOpen: false });
    },
    handleMatchNumberReady: function () {
        this.setState({ matchNumberError: false });
    },
    handleMatchNumberError: function () {
        this.setState({ matchNumberError: true });
    },
    handleRed1Ready: function () {
        this.setState({ red1Error: false });
    },
    handleRed2Ready: function () {
        this.setState({ red2Error: false });
    },
    handleBlue1Ready: function () {
        this.setState({ blue1Error: false });
    },
    handleBlue2Ready: function () {
        this.setState({ blue2Error: false });
    },
    handleRed1Error: function () {
        this.setState({ red1Error: true });
    },
    handleRed2Error: function () {
        this.setState({ red2Error: true });
    },
    handleBlue1Error: function () {
        this.setState({ blue1Error: true });
    },
    handleBlue2Error: function () {
        this.setState({ blue2Error: true });
    },
    handleSubmitMatch: function () {
        if (!this.props.signedIn) {
            this.props.sendMessage("Can not scout without signing in");
            this.setState({ setupDialogOpen: false });
        }
        else {
            this.setState({ setupDialogOpen: false });
            this.handleNewMatchSubmission();
        }
    },
    handleNewMatchSubmission: function () {
        var newCurrentMatchSetup = this.props.currentMatchSetup;
        newCurrentMatchSetup.competition = this.props.currentCompetition.name;
        this.props.addMatch(newCurrentMatchSetup)
        this.props.handleToMatches();
    },
    handleBackToSelect: function () {
        this.props.handleCompetitionChangeByName("none");
        const path = `/${"none"}/${this.props.currentTab}`;
        this.context.router.push(path);
    },
    render() {
        if (!(this.props.currentCompetition.name == "none")) {
            var matches = this.props.matches;

            function sortByKey(array, key) {
                return array.sort(function (a, b) {
                    var x = a[key]; var y = b[key];
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                });
            }

            sortByKey(matches, "matchNumber");
            matches.reverse();

            var matchList = matches.map(function (match, i) {
                if (this.props.currentCompetition.name == match.competition) {
                    var nestedPartialMatches = match.partialMatches.map(function (partialMatch, i) {
                        if (partialMatch.allianceColor == "Red") {
                            if (partialMatch.totalScore == -1) {
                                return <ListItem primaryText={
                                    <p style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
                                        <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red1} </span>,
                                        <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red2} </span>
                                        <span style={{ color: Colors.grey700, fontSize: 14, fontWeight: 200, }}> --unscouted </span>
                                    </p>}
                                    key={i} />
                            }
                            else {
                                return <ListItem primaryText={
                                    <p style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
                                        <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red1} </span>,
                                        <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red2} </span>:
                                        <span style={{ color: Colors.darkBlack }}> {partialMatch.totalScore} </span>
                                    </p>}
                                    secondaryTextLines={2}
                                    secondaryText={<p>
                                        <span style={{ color: Colors.green700 }}> {partialMatch.user} </span><br/>
                                        <span style={{ color: Colors.grey600 }}> {this.props.displayTime(partialMatch.time) } </span>
                                    </p>}
                                    key={i} style={{ paddingTop: 0, paddingBottom: 0, margin: 0, marginBottom: -20 }}/>
                            }
                        }
                        else {
                            if (partialMatch.totalScore == -1) {
                                return <ListItem primaryText={
                                    <p style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
                                        <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue1} </span>,
                                        <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue2} </span>
                                        <span style={{ color: Colors.grey700, fontSize: 14, fontWeight: 200, }}> --unscouted </span>
                                    </p>}
                                    key={i} />
                            }
                            else {
                                return <ListItem primaryText={
                                    <p style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
                                        <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue1} </span>,
                                        <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue2} </span>:
                                        <span style={{ color: Colors.darkBlack }}> {partialMatch.totalScore} </span>
                                    </p>}
                                    secondaryTextLines={2}
                                    secondaryText={<p>
                                        <span style={{ color: Colors.green700 }}> {partialMatch.user} </span><br/>
                                        <span style={{ color: Colors.grey600 }}> {this.props.displayTime(partialMatch.time) } </span>
                                    </p>}
                                    key={i} style={{ paddingTop: 0, paddingBottom: 0, margin: 0, marginBottom: -20 }}/>
                            }
                        }
                    }, this);
                    if (this.props.containsUnscouted(match)) {
                        return <ListItem primaryText={
                            <p style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
                                <span style={{ color: Colors.grey600, fontSize: 20, fontWeight: 200, }}> {match.matchNumber} </span>:
                                <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red1} </span>,
                                <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red2} </span>|
                                <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue1} </span>,
                                <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue2} </span>
                            </p>}
                            initiallyOpen={false} primaryTogglesNestedList={true} nestedItems={nestedPartialMatches} key={i}/>
                    }
                    else {
                        var dataCalculator = new DataCalculator(matches);
                        const getWinningAlliance = dataCalculator.getWinningAlliance(match);
                        const redMatchScore = dataCalculator.getRealMatchScoreForAlliance(match, "Red");
                        const blueMatchScore = dataCalculator.getRealMatchScoreForAlliance(match, "Blue");
                        if (getWinningAlliance == "Red") {
                            return <ListItem primaryText={
                                <p style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
                                    <span style={{ color: Colors.grey900, fontSize: 20, fontWeight: 400, }}> {match.matchNumber} </span>:
                                    <span style={{ color: Colors.red700, fontWeight: 400, }}> {match.red1} </span>,
                                    <span style={{ color: Colors.red700, fontWeight: 400, }}> {match.red2} </span>|
                                    <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue1} </span>,
                                    <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue2} </span>
                                </p>}
                                secondaryTextLines={1}
                                secondaryText={<p>
                                    <span style={{ color: Colors.grey600, fontWeight: 300, }}> Red: </span>
                                    <span style={{ color: Colors.red700, fontWeight: 400, }}> {redMatchScore} </span>|
                                    <span style={{ color: Colors.grey600, fontWeight: 300, }}> Blue: </span>
                                    <span style={{ color: Colors.blue700, fontWeight: 300, }}> {blueMatchScore}  </span>
                                </p>}
                                initiallyOpen={false} primaryTogglesNestedList={true} nestedItems={nestedPartialMatches} key={i}
                                style={{ paddingTop: 0, paddingBottom: 0, margin: 0, marginBottom: -20 }}/>
                        }
                        else if (getWinningAlliance == "Blue") {
                            return <ListItem primaryText={
                                <p style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
                                    <span style={{ color: Colors.grey900, fontSize: 20, fontWeight: 400, }}> {match.matchNumber} </span>:
                                    <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red1} </span>,
                                    <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red2} </span>|
                                    <span style={{ color: Colors.blue700, fontWeight: 400, }}> {match.blue1} </span>,
                                    <span style={{ color: Colors.blue700, fontWeight: 400, }}> {match.blue2} </span>
                                </p>}
                                secondaryTextLines={1}
                                secondaryText={<p>
                                    <span style={{ color: Colors.grey600, fontWeight: 300, }}> Red: </span>
                                    <span style={{ color: Colors.red700, fontWeight: 300, }}> {redMatchScore} </span>|
                                    <span style={{ color: Colors.grey600, fontWeight: 300, }}> Blue: </span>
                                    <span style={{ color: Colors.blue700, fontWeight: 400, }}> {blueMatchScore}  </span>
                                </p>}
                                initiallyOpen={false} primaryTogglesNestedList={true} nestedItems={nestedPartialMatches} key={i}
                                style={{ paddingTop: 0, paddingBottom: 0, margin: 0, marginBottom: -20 }}/>
                        }
                        else {
                            return <ListItem primaryText={
                                <p style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
                                    <span style={{ color: Colors.grey900, fontSize: 20, fontWeight: 400, }}> {match.matchNumber} </span>:
                                    <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red1} </span>,
                                    <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red2} </span>|
                                    <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue1} </span>,
                                    <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue2} </span>
                                </p>}
                                secondaryTextLines={1}
                                secondaryText={<p>
                                    <span style={{ color: Colors.grey600, fontWeight: 300, }}> Red: </span>
                                    <span style={{ color: Colors.red700, fontWeight: 300, }}> {redMatchScore} </span>|
                                    <span style={{ color: Colors.grey600, fontWeight: 300, }}> Blue: </span>
                                    <span style={{ color: Colors.blue700, fontWeight: 300, }}> {blueMatchScore}  </span>
                                </p>}
                                initiallyOpen={false} primaryTogglesNestedList={true} nestedItems={nestedPartialMatches} key={i}
                                style={{ paddingTop: 0, paddingBottom: 0, margin: 0, marginBottom: -20 }}/>
                        }
                    }
                }
            }, this);

            const actionsSetup = [
                <RaisedButton label="Add Match" primary={true} disabled={this.state.target1Error || this.state.target2Error
                    || this.state.opponent1Error || this.state.opponent2Error || this.state.matchNumberError}
                    onTouchTap={this.handleSubmitMatch}/>,
                <FlatButton label="Cancel" primary={true} onTouchTap={this.handleCloseAddMatch}/>,
            ];



            return (
                <div style={bodyStyle}>
                    <h2 style={headerStyle1}> Current Competition: </h2>
                    <h2 style={headerStyle2}> {this.props.currentCompetition.name}</h2><br/>
                    <Divider/>
                    <Subheader> Matches (by match number): </Subheader>
                    <List>
                        <ListItem>
                            <RaisedButton label="Add new match" secondary={true} onTouchTap={this.handleAddMatch}/>
                        </ListItem>
                        {matchList}
                    </List><br/>
                    <RaisedButton label="Select other competition" primary={true} onTouchTap={this.handleBackToSelect}/>
                    <br/><br/><br/><br/>
                    <Dialog title="Setup" contentStyle={{ height: '100%', width: '100%', maxWidth: 'none', maxHeight: 'none', paddingTop: 0 }}
                        actions={actionsSetup} modal={true} open={this.state.setupDialogOpen} autoScrollBodyContent={true}>
                        <Setup handleRed1Ready={this.handleRed1Ready} handleRed1Error={this.handleRed1Error}
                            handleRed2Ready={this.handleRed2Ready} handleRed2Error={this.handleRed2Error}
                            handleBlue1Ready={this.handleBlue1Ready} handleBlue1Error={this.handleBlue1Error}
                            handleBlue2Ready={this.handleBlue2Ready} handleBlue2Error={this.handleBlue2Error}
                            handleMatchNumberReady={this.handleMatchNumberReady} handleMatchNumberError={this.handleMatchNumberError}
                            handleCurrentMatchSetupUpdate={this.props.handleCurrentMatchSetupUpdate} currentMatchSetup={this.props.currentMatchSetup} />
                    </Dialog>
                </div>
            )
        }
        else {
            var competitions = this.props.competitions
            var competitionsList = competitions.map(function (competition, i) {
                return <ListItem primaryText={competition.name} key={i} onTouchTap={this.handleSelectCompetition.bind(null, competition) }/>;
            }, this);

            const actionsAddCompetition = [
                <RaisedButton label="Add new competition" secondary={true} disabled={this.state.isError} onTouchTap={this.handleSubmitCompetition}/>,
                <FlatButton label="Cancel" primary={true} onTouchTap={this.handleCloseAddCompetition}/>,
            ];
            return (
                <div style={bodyStyle}>
                    <h2 style={headerStyle1}> Select Competition: </h2><br/>
                    <Divider/>
                    <List>
                        {competitionsList}
                        <ListItem>
                            <RaisedButton label="Add new competition" secondary={true} onTouchTap={this.handleOpenAddCompetition}/>
                        </ListItem>
                    </List>
                    <br/><br/><br/><br/>
                    <Dialog title="Add New Competition" contentStyle={{ width: '100%', maxWidth: 'none', }} modal={true}
                        open={this.state.newCompetitionDialogOpen} actions={actionsAddCompetition}>

                        <TextField hintText="Competition Name" floatingLabelText="Competition Name" name="Competition Name" onChange={this.checkForErrors}
                            type="text" errorText= {this.state.errorText}/>
                    </Dialog>
                </div>
            );
        }
    }
});

export default CompetitionTab;
