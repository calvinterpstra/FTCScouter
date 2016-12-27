import React from 'react';

import MatchForm from './MatchPredictorTabComponents/MatchForm';

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

var MatchPredictorTab = React.createClass({
    render() {
        return (
            <div style={bodyStyle}>
                <MatchForm competitions={this.props.competitions} getMatchesbyCompetition={this.props.getMatchesbyCompetition} matches={this.props.matches}
                    getCompetitionswithTeamNumber={this.props.getCompetitionswithTeamNumber}/>
            </div>
        );
    }
});

export default MatchPredictorTab;