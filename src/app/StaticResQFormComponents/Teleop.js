import React from 'react';
import Divider from 'material-ui/Divider';
import MyHeader1 from './MyHeader1';
import TeleopClimbers from './TeleopClimbers';
import Debris from './Debris';
import ZiplineClimbers from './ZiplineClimbers';
import Paper from 'material-ui/Paper'

import * as Colors from 'material-ui/styles/colors';
import * as ColorManipulator from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: Colors.green500,
    primary2Color: Colors.green700,
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

var Teleop = React.createClass({
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Paper style={{ height:10, width:50, margin: 0, textAlign: 'center', display: 'inline-block', backgroundColor:Colors.green500,}} zDepth={2}/><br/><br/>
                    <MyHeader1> Teleop </MyHeader1>
                    
                    <TeleopClimbers scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}
                        team1={this.props.team1} team2={this.props.team2}/>
                    
                    <Debris scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}
                        team1={this.props.team1} team2={this.props.team2}/>
                    
                    <ZiplineClimbers scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}
                        team1={this.props.team1} team2={this.props.team2}/>
                </div>
            </MuiThemeProvider>
        );
    }
});
export default Teleop;