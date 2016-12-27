import React from 'react';
import MatchList from './MatchesTabComponents/MatchList'
import VelVortexForm from './VelVortexForm'
import ScoutedSubmit from './ScoutedSubmit'
import UnscoutedSubmit from './UnscoutedSubmit'
import MatchDetails from './MatchesTabComponents/MatchDetails';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

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

var ScoutMatchTab = React.createClass({
    handleSubmission: function () {
        var newCurrentPartialMatch = this.props.currentPartialMatch;
        newCurrentPartialMatch.time = this.props.getTime();
        this.props.handleCurrentPartialMatchUpdate(newCurrentPartialMatch)
        this.props.addPartialMatch(newCurrentPartialMatch);

        this.props.addTeam(this.props.currentPartialMatch.red1);
        this.props.addTeam(this.props.currentPartialMatch.red2);
        this.props.addTeam(this.props.currentPartialMatch.blue1);
        this.props.addTeam(this.props.currentPartialMatch.blue2);
        this.props.handleToMatches();
    },
    handleNewMatchSubmission: function () {
        var newCurrentMatchSetup = this.props.currentMatchSetup;
        newCurrentMatchSetup.competition = this.props.currentCompetition.name;
        this.props.addMatch(newCurrentMatchSetup)
        this.props.handleToMatches();
    },
    handleCancelUnscouted: function () {
        this.props.handleToMatches()
    },
    render() {
        if (this.props.scoutingMode) {
            if (this.props.scoutingUnscouted) {
                return (
                    <div style={bodyStyle}>
                        <VelVortexForm
                            currentPartialMatch={this.props.currentPartialMatch} handleCurrentPartialMatchUpdate={this.props.handleCurrentPartialMatchUpdate}/>
                        <UnscoutedSubmit handleToMatches={this.props.handleToMatches} handleSubmission={this.handleSubmission}
                            handleCancelUnscouted={this.handleCancelUnscouted} getTime={this.props.getTime} displayTime={this.props.displayTime}
                            /> <br/><br/><br/>
                    </div>
                );
            }
            else {
                return (
                    <div style={bodyStyle}>
                        <VelVortexForm
                            currentPartialMatch={this.props.currentPartialMatch} handleCurrentPartialMatchUpdate={this.props.handleCurrentPartialMatchUpdate}/>
                        <ScoutedSubmit handleToMatches={this.props.handleToMatches} handleSubmission={this.handleSubmission}
                            getTime={this.props.getTime} displayTime={this.props.displayTime}
                            /><br/><br/><br/>
                    </div>
                );
            }
        }
        else if (this.props.viewPartialMatchMode) {
            return (
                <div style={bodyStyle}>
                    <MatchDetails
                        currentPartialMatch={this.props.currentPartialMatch} handleCurrentPartialMatchUpdate={this.props.handleCurrentPartialMatchUpdate}
                        removePartialMatch={this.props.removePartialMatch}

                        matchSelected={this.props.matchSelected} handleToViewPartialMatch={this.props.handleToViewPartialMatch}
                        handleToScout={this.props.handleToScout} handleToMatches={this.props.handleToMatches}

                        sendMessage={this.props.sendMessage} signedIn={this.props.signedIn} user={this.props.user}

                        getTime={this.props.getTime} displayTime={this.props.displayTime}
                        />
                </div>
            );
        }
        else {
            if (this.props.currentCompetition.name == "none") {
                return (
                    <div style={bodyStyle}>
                        <h2 style={headerStyle}> Select a Competition </h2> <br/>
                        <p> Please select a competition under the Competitions tab to see and scout matches.</p>
                    </div>
                )
            }
            else {
                return (
                    <div style={{paddingLeft:0, paddingRight:0, margin: 0}}>
                        <MatchList
                            matches={this.props.matches} currentPartialMatch={this.props.currentPartialMatch}
                            handleCurrentPartialMatchUpdate={this.props.handleCurrentPartialMatchUpdate}
                            setMatchesData={this.props.setMatchesData} setMatches={this.props.setMatches} currentMatchSetup={this.props.currentMatchSetup}
                            handleCurrentMatchSetupUpdate={this.props.handleCurrentMatchSetupUpdate} removePartialMatch={this.props.removePartialMatch}
                            containsUnscouted={this.props.containsUnscouted} updateMatchesData={this.props.updateMatchesData}
                            handleCancelUnscouted={this.handleCancelUnscouted}

                            handleToScout={this.props.handleToScout} handleToMatches={this.props.handleToMatches}
                            handleNewMatchSubmission={this.handleNewMatchSubmission} handleToScoutUnscouted={this.props.handleToScoutUnscouted}
                            handleToViewPartialMatch={this.props.handleToViewPartialMatch} handleMatchSelectedChange={this.props.handleMatchSelectedChange}
                            matchSelected={this.props.matchSelected}

                            sendMessage={this.props.sendMessage} signedIn={this.props.signedIn} user={this.props.user}

                            getTime={this.props.getTime} displayTime={this.props.displayTime}

                            currentCompetition={this.props.currentCompetition}
                            />
                    </div>
                );
            }
        }
    }
});

export default ScoutMatchTab;