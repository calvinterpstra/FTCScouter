import React from 'react';
import {List, ListItem} from 'material-ui/List';

var TeamsList = React.createClass({
    teamListItemSelected: function(team){
        this.props.handleCurrentTeamUpdate(team);
        this.props.handleToTeamView();
    },

    render() {
        var teams = this.props.teams;
        function sortByKey(array, key) {
            return array.sort(function (a, b) {
                var x = a[key]; var y = b[key];
                if (x < y) {
                    return -1;
                }
                else if (x > y) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }

        sortByKey(teams, "teamNumber");

        var teamsList = teams.map(function (team, i) {
            return <ListItem primaryText={team.teamNumber} key={i} onTouchTap={this.teamListItemSelected.bind(null, team) }/>;
        }, this);

        return (
            <div>
                <List>{teamsList}</List>
                <br/><br/><br/><br/>

            </div>
        );
    }
});
export default TeamsList;