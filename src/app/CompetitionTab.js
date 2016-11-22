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

var WelcomeTab = React.createClass({
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
        this.setState({ newCompetitionDialogOpen: true });
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
    render() {
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
                <h2 style={headerStyle1}> Current Competition: </h2>
                <h2 style={headerStyle2}> {this.props.currentCompetition.name} </h2><br/>
                <Divider/>
                <Subheader> Change Competition: </Subheader>
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
});

export default WelcomeTab;

 //primaryText={<span style={{ color: Colors.blue700 }}> Add new competition </span>} onTouchTap={this.handleOpenAddCompetition}

 


                // <RaisedButton label="Select Competition" secondary={true} onTouchTap={this.props.handleOpenSelectCompetition}/>
                // <SelectCompetition selectCompetitionOpen={this.props.selectCompetitionOpen} 
                //     handleCloseSelectCompetition={this.props.handleCloseSelectCompetition} handleCompetitionChange={this.props.handleCompetitionChange} 
                //     competitions={this.props.competitions} currentTab={this.props.currentTab}
                //     handleCompetitionChangeByName={this.props.handleCompetitionChangeByName} addCompetitionByName={this.props.addCompetitionByName}/>