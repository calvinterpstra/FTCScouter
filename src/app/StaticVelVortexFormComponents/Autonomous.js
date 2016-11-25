import React from 'react';
import Divider from 'material-ui/Divider';
import MyHeader1 from './MyHeader1';
import AutonButtons from './AutonButtons';
import AutonParking from './AutonParking';
import AutonCenterVortex from './AutonCenterVortex';
import AutonCornerVortex from './AutonCornerVortex';
import AutonCapBall from './AutonCapBall';
import Paper from 'material-ui/Paper';

import * as Colors from 'material-ui/styles/colors';
import * as ColorManipulator from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: Colors.blue500,
        primary2Color: Colors.blue700,
        primary3Color: Colors.grey400,
        accent1Color: Colors.grey400,
        accent2Color: Colors.grey100,
        accent3Color: Colors.grey500,
        textColor: Colors.darkBlack,
        alternateTextColor: Colors.white,
        canvasColor: Colors.white,
        borderColor: Colors.grey300,
        disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
        pickerHeaderColor: Colors.cyan500,
        clockCircleColor: ColorManipulator.fade(Colors.darkBlack, 0.07),
        shadowColor: Colors.fullBlack,
    },
});

var Autonomous = React.createClass({
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Paper style={{ height: 10, width: 50, margin: 0, textAlign: 'center', display: 'inline-block', backgroundColor: Colors.blue500, }} 
                        zDepth={2}/><br/><br/>
                    <MyHeader1> Autonomous </MyHeader1>

                    <AutonButtons scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}
                        team1={this.props.team1} team2={this.props.team2}/>

                    <AutonParking scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}
                        team1={this.props.team1} team2={this.props.team2}/>

                    <AutonCenterVortex scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}
                        team1={this.props.team1} team2={this.props.team2}/>
                    
                    <AutonCornerVortex scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}
                        team1={this.props.team1} team2={this.props.team2}/>

                    <AutonCapBall scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}
                        team1={this.props.team1} team2={this.props.team2}/>
                    
                    

                </div>
            </MuiThemeProvider>
        );
    }
});

export default Autonomous;