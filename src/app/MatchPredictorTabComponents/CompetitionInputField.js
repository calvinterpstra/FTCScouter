import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


var CompetitionInputField = React.createClass({
    handleChange: function (event, index, obj) {
        this.props.updateCompetition(obj)
    },
    render() {
        var competitions = this.props.competitions
        var competitionsList = competitions.map(function (competition, i) {
            return <MenuItem primaryText={competition.name} value={competition.name} key={i}/>;
        }, this);

        return (
            <div>
                <DropDownMenu value={this.props.competition} onChange={this.handleChange} style={{ marginTop: 20 }}>
                    <MenuItem primaryText="All" value="All" key={1000}/>
                    {competitionsList}
                </DropDownMenu>
            </div>
        );
    }
});
export default CompetitionInputField;