import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MatchDetails from './MatchDetails';
import Setup from './Setup';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionAutorenew from 'material-ui/svg-icons/action/autorenew';
import * as Colors from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import DataCalculator from './../DataCalculator';

var MatchList = React.createClass({
    getInitialState: function () {
        return {
            unscoutedDialogOpen: false,
            setupDialogOpen: false,
            matchNumberError: true,
            red1Error: true,
            red2Error: true,
            blue1Error: true,
            blue2Error: true,
        }
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
    unscoutedListItemSelected: function (partialMatch, match) {
        this.setState({ unscoutedDialogOpen: true });
        var newState = this.props.currentPartialMatch;
        newState.red1 = match.red1;
        newState.red2 = match.red2;
        newState.blue1 = match.blue1;
        newState.blue2 = match.blue2;
        newState.matchNumber = match.matchNumber;
        newState.allianceColor = partialMatch.allianceColor;
        newState.user = this.props.user.email;
        newState.competition = partialMatch.competition;
        this.props.handleMatchSelectedChange(newState);
        this.props.handleCurrentPartialMatchUpdate(newState);
    },
    scoutedListItemSelected: function (partialMatch, match) {
        this.props.handleToViewPartialMatch();
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
        newMatchSelected.competition = partialMatch.competition;
        this.props.handleMatchSelectedChange(newMatchSelected);
    },
    handleSetup: function () {
        if (!this.props.signedIn) {
            this.props.sendMessage("Can not scout without signing in")
            this.setState({ setupDialogOpen: false });
        }
        else {
            this.setState({ setupDialogOpen: true });
        }
    },
    handleClose: function () {
        this.setState({ setupDialogOpen: false });
        this.setState({ unscoutedDialogOpen: false });
        this.props.handleCancelUnscouted();
    },
    handleScoutUnscouted: function () {
        if (!this.props.signedIn) {
            this.props.sendMessage("Can not scout without signing in");
            this.setState({ unscoutedDialogOpen: false });
            this.props.handleCancelUnscouted();
        }
        else {
            this.setState({ unscoutedDialogOpen: false });
            this.props.handleToScoutUnscouted();
        }
    },
    handleSubmitMatch: function () {
        if (!this.props.signedIn) {
            this.props.sendMessage("Can not scout without signing in");
            this.setState({ setupDialogOpen: false });
        }
        else {
            this.setState({ setupDialogOpen: false });
            this.props.handleNewMatchSubmission();
        }
    },

    render() {
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
            var nestedPartialMatches = match.partialMatches.map(function (partialMatch, i) {
                if (partialMatch.allianceColor == "Red") {
                    if (partialMatch.totalScore == -1) {
                        return <ListItem primaryText={
                            <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0 }}>
                                <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red1} </span>,
                                <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red2} </span>
                                <span style={{ color: Colors.grey700, fontSize: 14, fontWeight: 200, }}> --unscouted </span>
                            </p>}
                            key={i} onTouchTap={this.unscoutedListItemSelected.bind(null, partialMatch, match) }/>;
                    }
                    else {
                        return <ListItem primaryText={
                            <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0 }}>
                                <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red1} </span>,
                                <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red2} </span>:
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
                                <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue1} </span>,
                                <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue2} </span>
                                <span style={{ color: Colors.grey700, fontSize: 14, fontWeight: 200, }}> --unscouted </span>
                            </p>}
                            key={i} onTouchTap={this.unscoutedListItemSelected.bind(null, partialMatch, match) }/>;
                    }
                    else {
                        return <ListItem primaryText={
                            <p style={{ paddingTop: 5, paddingBottom: 5, margin: 0 }}>
                                <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue1} </span>,
                                <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue2} </span>:
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
                                <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red1} </span>,
                                <span style={{ color: Colors.red700, fontWeight: 300, }}> {match.red2} </span>|
                                <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue1} </span>,
                                <span style={{ color: Colors.blue700, fontWeight: 300, }}> {match.blue2} </span>
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

        const actionsUnscouted = [
            <RaisedButton label="Scout This Match" primary={true} disabled={false} onTouchTap={this.handleScoutUnscouted}/>,
            <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose}/>,
        ];
        const actionsSetup = [
            <RaisedButton label="Add Match" primary={true} disabled={this.state.target1Error || this.state.target2Error
                || this.state.opponent1Error || this.state.opponent2Error || this.state.matchNumberError}
                onTouchTap={this.handleSubmitMatch}/>,
            <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose}/>,
        ];

        return (
            <div>
                <FloatingActionButton secondary={true} style={{ margin: 0, top: 'auto', right: 20, bottom: 20, left: 'auto', position: 'fixed', zIndex: 1100 }}
                    onTouchTap={this.handleSetup}>
                    <ContentAdd />
                </FloatingActionButton>

                <List>{matchList}</List>
                <br/><br/><br/><br/>

                <Dialog title="Unscouted Match" contentStyle={{ width: '100%', maxWidth: 'none', }}
                    actions={actionsUnscouted} modal={true} open={this.state.unscoutedDialogOpen}/>

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
        );
    }
});
export default MatchList;