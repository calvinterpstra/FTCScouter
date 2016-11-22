import React from 'react';
import Dialog from 'material-ui/Dialog';
import {List, ListItem} from 'material-ui/List';
import * as Colors from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

var SelectCompetition = React.createClass({
    getInitialState: function () {
        return {
            newCompetitionDialogOpen: false,
            temporaryCompetitionName: "",
            isError: true,
            errorText: "",
        }
    },
    contextTypes: {
        router: React.PropTypes.object
    },
    handleSelectCompetition: function (competition) {
        this.props.handleCompetitionChange(competition);
        this.props.handleCloseSelectCompetition();
        const path = `/${competition.name}/${this.props.currentTab}`;
        this.context.router.push(path);
    },
    handleOpenAddCompetition: function (competition) {
        this.setState({newCompetitionDialogOpen: true});
    },
    handleCloseAddCompetition: function (competition) {
        this.setState({newCompetitionDialogOpen: false});
    },
    checkForErrors: function (event) {
        if (event.target.value != null && event.target.value != "" && event.target.value != undefined) {
          this.setState({ errorText: '' })
          this.setState({ isError: false })
          this.setState({temporaryCompetitionName: event.target.value});
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

    render() {
        var competitions = this.props.competitions
        var competitionsList = competitions.map(function (competition, i) {
            return <ListItem primaryText={competition.name} key={i} onTouchTap={this.handleSelectCompetition.bind(null, competition)}/>;
        }, this);

        const actionsAddCompetition = [
            <RaisedButton label="Add new competition" secondary={true} disabled={this.state.isError} onTouchTap={this.handleSubmitCompetition}/>,
            <FlatButton label="Cancel" primary={true} onTouchTap={this.handleCloseAddCompetition}/>,
        ];

        return (
            <div>
                <Dialog title="Select Competition" contentStyle={{ width: '100%', maxWidth: 'none', }} modal={true} open={this.props.selectCompetitionOpen}
                    autoScrollBodyContent={true}>
                    <List>
                        {competitionsList}
                        <ListItem primaryText="Add new competition" onTouchTap={this.handleOpenAddCompetition}/>
                    </List>
                    <br/><br/><br/><br/>
                </Dialog>

                <Dialog title="Add New Competition" contentStyle={{ width: '100%', maxWidth: 'none', }} modal={true} 
                    open={this.state.newCompetitionDialogOpen} actions={actionsAddCompetition}>

                    <TextField hintText="Competition Name" floatingLabelText="Competition Name" name="Competition Name" onChange={this.checkForErrors}
                        type="text" errorText= {this.state.errorText}/>
                </Dialog>
            </div>
        );
    }
});

export default SelectCompetition;
