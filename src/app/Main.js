import React, {Component} from 'react';
import * as Colors from 'material-ui/styles/colors';
import * as ColorManipulator from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainAppBar from './MainAppBar';
import PracticeFormTab from './PracticeFormTab';
import TeamsTab from './TeamsTab';
import StatsTab from './StatsTab';
import AccountTab from './AccountTab';
import ScoutMatchTab from './ScoutMatchTab';
import LeftNav from './LeftNav';
import WelcomeTab from './WelcomeTab';
import SelectCompetition from './SelectCompetition';
import Snackbar from 'material-ui/Snackbar';
import CompetitionTab from './CompetitionTab';
import MatchPredictorTab from './MatchPredictorTab' ;

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: Colors.amber600,
    primary2Color: Colors.amber500,
    primary3Color: Colors.amber400,
    accent1Color: Colors.blue500,
    accent2Color: Colors.deepPurple100,
    accent3Color: Colors.deepPurple500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500,
    clockCircleColor: ColorManipulator.fade(Colors.darkBlack, 0.07),
    shadowColor: Colors.fullBlack,
  },
  zIndex: {
    appBar: 1350
  },
});

var Main = React.createClass({
  getInitialState: function () {
    return {

      navOpen: false,
      currentTab: "welcome",
      scoutingMode: false,
      viewPartialMatchMode: false,
      statsTeamsMatchesMode: false,
      statsViewTeamsPartialMatchMode: false,
      statsTeamViewMode: false,
      teamsTeamsMatchesMode: false,
      teamsViewTeamsPartialMatchMode: false,
      teamsTeamViewMode: false,
      scoutingUnscouted: false,
      messagesOpen: false,
      message: "",
      signedIn: true,
      user: "",
      selectCompetitionOpen: false,

      selectedCompetition: {
        name: "none",
      },

      currentCompetition: {
        name: "none",
      },

      competitions: [
        {
          name: "Test",
        },
      ],

      statsCurrentTeam: { teamNumber: 0 },

      currentTeam: { teamNumber: 0 },

      teams: [
        {
          teamNumber: 6055,
        }
      ],

      currentMatchSetup: {
        competition: "none",
        matchNumber: 0,
        red1: 0,
        red2: 0,
        blue1: 0,
        blue2: 0,
        partialMatches: [
          {
            allianceColor: "Red",
            totalScore: -1,
            user: "",
            time: {
              seconds: 0,
              minutes: 0,
              hours: 0,
              date: 0,
              month: 0,
              year: 0,
            },
            partialScore1: 0,
            partialScore2: 0,
            scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,

                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
            },
          },
          {
            allianceColor: "Blue",
            totalScore: -1,
            user: "",
            time: {
              seconds: 0,
              minutes: 0,
              hours: 0,
              date: 0,
              month: 0,
              year: 0,
            },
            partialScore1: 0,
            partialScore2: 0,
            scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,

                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
            },
          }
        ]
      },

      matchSelected: {
        competition: "none",
        matchNumber: 0,
        red1: 0,
        red2: 0,
        blue1: 0,
        blue2: 0,
        time: {
          seconds: 0,
          minutes: 0,
          hours: 0,
          date: 0,
          month: 0,
          year: 0,
        },
        allianceColor: "",
        totalScore: 0,
        user: "",
        partialScore1: 0,
        partialScore2: 0,
        scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,

                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
            },
      },

      currentPartialMatch: {
        competition: "none",
        matchNumber: 0,
        red1: 0,
        red2: 0,
        blue1: 0,
        blue2: 0,
        time: {
          seconds: 0,
          minutes: 0,
          hours: 0,
          date: 0,
          month: 0,
          year: 0,
        },
        allianceColor: "",
        totalScore: 0,
        user: "",
        partialScore1: 0,
        partialScore2: 0,
        scores: {
          autonButtonsScore1: 0,
          autonParkingScore1: 0,
          autonCenterVortexScore1: 0,
          autonCornerVortexScore1: 0,
          autonCapBallScore1: 0,
          centerVortexScore1: 0,
          cornerVortexScore1: 0,
          capBallScore1: 0,
          teleopButtonAllianceNearScore1: 0,
          teleopButtonAllianceFarScore1: 0,
          teleopButtonOpponentNearScore1: 0,
          teleopButtonOpponentFarScore1: 0,

          autonButtonsScore2: 0,
          autonParkingScore2: 0,
          autonCenterVortexScore2: 0,
          autonCornerVortexScore2: 0,
          autonCapBallScore2: 0,
          centerVortexScore2: 0,
          cornerVortexScore2: 0,
          capBallScore2: 0,
          teleopButtonAllianceNearScore2: 0,
          teleopButtonAllianceFarScore2: 0,
          teleopButtonOpponentNearScore2: 0,
          teleopButtonOpponentFarScore2: 0,
        },
      },

      matches: [
        {
          competition: "Test",
          matchNumber: 1,
          red1: 6055,
          red2: 1111,
          blue1: 3333,
          blue2: 2222,
          partialMatches: [
            {
              time: {
                seconds: 10,
                minutes: 57,
                hours: 5,
                date: 18,
                month: 8,
                year: 2016,
              },
              allianceColor: "Red",
              totalScore: -1,
              user: "calvinterpstra@gmail.com",
              partialScore1: 0,
              partialScore2: 0,
              scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,
              
                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
              },
            },
            {
              time: {
                seconds: 10,
                minutes: 57,
                hours: 5,
                date: 18,
                month: 8,
                year: 2016,
              },
              allianceColor: "Blue",
              totalScore: -1,
              user: "calvinterpstra@gmail.com",
              partialScore1: 0,
              partialScore2: 0,
              scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,
              
                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
              },
            },
          ]
        },

        {
          competition: "Test",
          matchNumber: 2,
          red1: 2222,
          red2: 4444,
          blue1: 7777,
          blue2: 3333,
          partialMatches: [
            {
              time: {
                seconds: 10,
                minutes: 57,
                hours: 5,
                date: 18,
                month: 8,
                year: 2016,
              },
              allianceColor: "Red",
              totalScore: 170,
              user: "calvinterpstra@gmail.com",
              partialScore1: 0,
              partialScore2: 0,
              scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,
              
                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
              },
            },
            {
              time: {
                seconds: 10,
                minutes: 57,
                hours: 5,
                date: 18,
                month: 8,
                year: 2016,
              },
              allianceColor: "Blue",
              totalScore: 130,
              user: "calvinterpstra@gmail.com",
              partialScore1: 0,
              partialScore2: 0,
              scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,
              
                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
              },
            },
          ]
        },

        {
          competition: "Test",
          matchNumber: 3,
          red1: 5555,
          red2: 6666,
          blue1: 7777,
          blue2: 8888,
          partialMatches: [
            {
              time: {
                seconds: 10,
                minutes: 57,
                hours: 5,
                date: 18,
                month: 8,
                year: 2016,
              },
              allianceColor: "Red",
              totalScore: -1,
              user: "calvinterpstra@gmail.com",
              partialScore1: 0,
              partialScore2: 0,
              scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,
              
                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
              },
            },
            {
              time: {
                seconds: 10,
                minutes: 57,
                hours: 5,
                date: 18,
                month: 8,
                year: 2016,
              },
              allianceColor: "Blue",
              totalScore: -1,
              user: "calvinterpstra@gmail.com",
              partialScore1: 0,
              partialScore2: 0,
              scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,
              
                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
              },
            },
          ]
        },

        {
          competition: "Test",
          matchNumber: 4,
          red1: 3333,
          red2: 5555,
          blue1: 6055,
          blue2: 2222,
          partialMatches: [
            {
              time: {
                seconds: 10,
                minutes: 57,
                hours: 5,
                date: 18,
                month: 8,
                year: 2016,
              },
              allianceColor: "Blue",
              totalScore: -1,
              user: "calvinterpstra@gmail.com",
              partialScore1: 0,
              partialScore2: 0,
              scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,
              
                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
              },
            },
            {
              time: {
                seconds: 10,
                minutes: 57,
                hours: 5,
                date: 18,
                month: 8,
                year: 2016,
              },
              allianceColor: "Red",
              totalScore: -1,
              user: "calvinterpstra@gmail.com",
              partialScore1: 0,
              partialScore2: 0,
              scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,
              
                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
              },
            },
          ]
        },
        {
          competition: "Test",
          matchNumber: 5,
          red1: 7777,
          red2: 4444,
          blue1: 3333,
          blue2: 8888,
          partialMatches: [
            {
              time: {
                seconds: 10,
                minutes: 57,
                hours: 5,
                date: 18,
                month: 8,
                year: 2016,
              },
              allianceColor: "Red",
              totalScore: -1,
              user: "calvinterpstra@gmail.com",
              partialScore1: 0,
              partialScore2: 0,
              scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,
              
                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
              },
            },
            {
              time: {
                seconds: 10,
                minutes: 57,
                hours: 5,
                date: 18,
                month: 8,
                year: 2016,
              },
              allianceColor: "Blue",
              totalScore: -1,
              user: "calvinterpstra@gmail.com",
              partialScore1: 0,
              partialScore2: 0,
              scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,
              
                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
              },
            },
          ]
        },
        {
          competition: "Test",
          matchNumber: 6,
          red1: 6666,
          red2: 9999,
          blue1: 2222,
          blue2: 1111,
          partialMatches: [
            {
              time: {
                seconds: 10,
                minutes: 57,
                hours: 5,
                date: 18,
                month: 8,
                year: 2016,
              },
              allianceColor: "Red",
              totalScore: -1,
              user: "calvinterpstra@gmail.com",
              partialScore1: 0,
              partialScore2: 0,
              scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,
              
                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
              },
            },
            {
              time: {
                seconds: 10,
                minutes: 57,
                hours: 5,
                date: 18,
                month: 8,
                year: 2016,
              },
              allianceColor: "Blue",
              totalScore: -1,
              user: "calvinterpstra@gmail.com",
              partialScore1: 0,
              partialScore2: 0,
              scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,
              
                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
              },
            },
          ]
        },
        {
          competition: "Test",
          matchNumber: 7,
          red1: 3333,
          red2: 7777,
          blue1: 4444,
          blue2: 6666,
          partialMatches: [
            {
              time: {
                seconds: 10,
                minutes: 57,
                hours: 5,
                date: 18,
                month: 8,
                year: 2016,
              },
              allianceColor: "Red",
              totalScore: -1,
              user: "calvinterpstra@gmail.com",
              partialScore1: 0,
              partialScore2: 0,
              scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,
              
                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
              },
            },
            {
              time: {
                seconds: 10,
                minutes: 57,
                hours: 5,
                date: 18,
                month: 8,
                year: 2016,
              },
              allianceColor: "Blue",
              totalScore: -1,
              user: "calvinterpstra@gmail.com",
              partialScore1: 0,
              partialScore2: 0,
              scores: {
                autonButtonsScore1: 0,
                autonParkingScore1: 0,
                autonCenterVortexScore1: 0,
                autonCornerVortexScore1: 0,
                autonCapBallScore1: 0,
                centerVortexScore1: 0,
                cornerVortexScore1: 0,
                capBallScore1: 0,
                teleopButtonAllianceNearScore1: 0,
                teleopButtonAllianceFarScore1: 0,
                teleopButtonOpponentNearScore1: 0,
                teleopButtonOpponentFarScore1: 0,
              
                autonButtonsScore2: 0,
                autonParkingScore2: 0,
                autonCenterVortexScore2: 0,
                autonCornerVortexScore2: 0,
                autonCapBallScore2: 0,
                centerVortexScore2: 0,
                cornerVortexScore2: 0,
                capBallScore2: 0,
                teleopButtonAllianceNearScore2: 0,
                teleopButtonAllianceFarScore2: 0,
                teleopButtonOpponentNearScore2: 0,
                teleopButtonOpponentFarScore2: 0,
              },
            },
          ]
        }
      ],
    }
  },

  // Matches
  handleCurrentPartialMatchUpdate: function (partialMatch) {
    var newState = this.state;
    newState.currentPartialMatch = partialMatch;
    this.setState(newState);
  },
  handleCurrentMatchSetupUpdate: function (completeMatch) {
    var newState = this.state;
    newState.currentMatchSetup = completeMatch;
    this.setState(newState);
  },
  addPartialMatch: function (partialMatch) {
    var matches = this.state.matches;
    var inMatchesLoc = -1;
    matches.map(function (stateMatch, i) {
      if ((stateMatch.red1 == partialMatch.red1 || stateMatch.red1 == partialMatch.red2) && (stateMatch.red2 == partialMatch.red2 ||
        stateMatch.red2 == partialMatch.red1) && (stateMatch.blue1 == partialMatch.blue1 || stateMatch.blue1 == partialMatch.blue2) &&
        (stateMatch.blue2 == partialMatch.blue2 || stateMatch.blue2 == partialMatch.blue1) && (stateMatch.matchNumber == partialMatch.matchNumber)) {

        inMatchesLoc = i;
      }
    }, this);
    if (inMatchesLoc == -1) {
      var match = {
        competition: partialMatch.competition,
        matchNumber: partialMatch.matchNumber,
        red1: partialMatch.red1,
        red2: partialMatch.red2,
        blue1: partialMatch.blue1,
        blue2: partialMatch.blue2,
        partialMatches: [
          {
            time: partialMatch.time,
            allianceColor: partialMatch.allianceColor,
            totalScore: partialMatch.totalScore,
            user: partialMatch.user,
            partialScore1: partialMatch.partialScore1,
            partialScore2: partialMatch.partialScore2,
            scores: partialMatch.scores
          }
        ]
      }
      matches.push(match);
    }
    else {
      var thisPartialMatch = [
        {
          time: partialMatch.time,
          allianceColor: partialMatch.allianceColor,
          totalScore: partialMatch.totalScore,
          user: partialMatch.user,
          partialScore1: partialMatch.partialScore1,
          partialScore2: partialMatch.partialScore2,
          scores: partialMatch.scores
        }
      ]
      matches[inMatchesLoc].partialMatches = this.getUniquePartialMatches(matches[inMatchesLoc].partialMatches, thisPartialMatch)
    }
    var newState = this.state;
    newState.matches = matches;
    this.setState(newState);
  },
  removePartialMatch: function (match, partialMatch) {
    var newMatches = this.state.matches;
    var removePositionMatches = -1;
    var removePositionPartialMatches = -1;
    newMatches.map(function (stateMatch, i) {
      if ((stateMatch.red1 == match.red1 || stateMatch.red1 == match.red2) &&
        (stateMatch.red2 == match.red2 || stateMatch.red2 == match.red1) &&
        (stateMatch.blue1 == match.blue1 || stateMatch.blue1 == match.blue2) &&
        (stateMatch.blue2 == match.blue2 || stateMatch.blue2 == match.blue1) &&
        (stateMatch.matchNumber == match.matchNumber) && (stateMatch.competition == match.competition)) {

        stateMatch.partialMatches.map(function (statePartialMatch, j) {
          if (statePartialMatch.allianceColor == partialMatch.allianceColor &&
            statePartialMatch.user == partialMatch.user &&
            statePartialMatch.totalScore == partialMatch.totalScore) {
            removePositionMatches = i;
            removePositionPartialMatches = j;
          }
        }, this);
      }
    }, this);
    if (removePositionMatches != -1 && removePositionPartialMatches != -1) {
      newMatches[removePositionMatches].partialMatches.splice(removePositionPartialMatches, 1);
    }

    this.setMatches(newMatches)
  },
  removePartialMatchFromPartialMatches: function (partialMatch, partialMatches) {
    var removePositionPartialMatches = -1;
    partialMatches.map(function (aPartialMatch, i) {
      if (aPartialMatch.allianceColor == partialMatch.allianceColor &&
        aPartialMatch.user == partialMatch.user &&
        aPartialMatch.totalScore == partialMatch.totalScore &&
        this.getLaterTime(aPartialMatch.time, partialMatch.time)) {

        removePositionPartialMatches = i;
      }
    }, this);
    if (removePositionPartialMatches != -1) {
      partialMatches.splice(removePositionPartialMatches, 1);
    }

    return partialMatches;
  },
  getUniquePartialMatches: function (partialMatches1, partialMatches2) {
    var newPartialMatches = partialMatches1.concat(partialMatches2);
    partialMatches1.map(function (match1, i) {
      var isIn = false;
      partialMatches2.map(function (match2, i) {
        if (match1.allianceColor == match2.allianceColor) {
          if (match1.totalScore == -1 && match2.totalScore != -1) {
            newPartialMatches = this.removePartialMatchFromPartialMatches(match1, newPartialMatches);
          }
          else if (match1.totalScore != -1 && match2.totalScore == -1) {
            newPartialMatches = this.removePartialMatchFromPartialMatches(match2, newPartialMatches);
          }
          else if (match1.user == match2.user) {
            if (this.isLaterTime(match1.time, match2.time)) {
              newPartialMatches = this.removePartialMatchFromPartialMatches(match2, newPartialMatches);
            }
            else {
              newPartialMatches = this.removePartialMatchFromPartialMatches(match1, newPartialMatches);
            }
          }
        }
      }, this);
    }, this);
    return newPartialMatches;
  },
  getUniqueMatches: function (matches1, matches2) {
    var newMatches = matches2;
    matches1.map(function (match1, i) {
      var isIn = false;
      matches2.map(function (match2, j) {
        if ((match1.red1 == match2.red1 || match1.red1 == match2.red2) &&
          (match1.red2 == match2.red2 || match1.red2 == match2.red1) &&
          (match1.blue1 == match2.blue1 || match1.blue1 == match2.blue2) &&
          (match1.blue2 == match2.blue2 || match1.blue2 == match2.blue1) &&
          (match1.matchNumber == match2.matchNumber)) {
          isIn = true;
          match2.partialMatches = this.getUniquePartialMatches(match2.partialMatches, match1.partialMatches);
        }
      }, this);
      if (!isIn) {
        newMatches.push(match1)
      }
    }, this);
    return newMatches;
  },
  addMatch: function (match) {
    var newMatches = this.state.matches;
    var inMatchesLoc = -1;
    newMatches.map(function (stateMatch, i) {
      if ((stateMatch.red1 == match.red1 || stateMatch.red1 == match.red2) &&
        (stateMatch.red2 == match.red2 || stateMatch.red2 == match.red1) &&
        (stateMatch.blue1 == match.blue1 || stateMatch.blue1 == match.blue2) &&
        (stateMatch.blue2 == match.blue2 || stateMatch.blue2 == match.blue1) &&
        (stateMatch.matchNumber == match.matchNumber)) {

        inMatchesLoc = i;
      };
    }, this);
    if (inMatchesLoc == -1) {
      newMatches.push(match);
    }
    else {
      newMatches[inMatchesLoc].partialMatches = this.getUniquePartialMatches(newMatches[inMatchesLoc].partialMatches, match.partialMatches);
    }
    this.setMatches(newMatches)
  },
  setMatches: function (matches) {
    var newState = this.state;
    newState.matches = matches;
    this.setState(newState);
  },
  setMatchesData: function (matches) {
    firebase.database().ref('matches/').set(matches);
  },
  updateMatchesState: function () {
    var matchesRef = firebase.database().ref('matches/');
    matchesRef.on('value', function (snapshot) {
      const matchesData = snapshot.val();
      const stateMatches = this.state.matches;
      if (matchesData != null && stateMatches == null) {
        this.setMatches(matchesData);
        this.sendMessage("Updated matches!");
      }
      else if (matchesData != null && stateMatches != null) {
        var combined = this.getUniqueMatches(matchesData, stateMatches);
        this.setMatches(combined);
        this.sendMessage("Updated matches!");
      }
      else if (matchesData == null && stateMatches != null) {
        this.setMatchesData(stateMatches);
        this.sendMessage("Updated matches!");
      }
    }, this);
  },
  updateMatchesData: function () {
    const stateMatches = this.state.matches;
    if (stateMatches != null) {
      this.setMatchesData(stateMatches);
    }
  },
  containsUnscouted: function (match) {
    var containsUnscouted = false;
    match.partialMatches.map(function (partialMatch, i) {
      if (partialMatch.totalScore == -1) {
        containsUnscouted = true;
      }
    }, this);
    return containsUnscouted;
  },

  // Teams
  handleCurrentTeamUpdate: function (team) {
    var newState = this.state;
    newState.currentTeam = team;
    this.setState(newState);
  },
  statsHandleCurrentTeamUpdate: function (team) {
    var newState = this.state;
    newState.statsCurrentTeam = team;
    this.setState(newState);
  },
  setTeams: function (teams) {
    var newState = this.state;
    newState.teams = teams;
    this.setState(newState);
  },
  addTeam: function (teamNumber) {
    var teams = this.state.teams;
    var isIn = false;
    teams.map(function (team, i) {
      if (team.teamNumber == teamNumber) {
        isIn = true;
      }
    });
    if (!isIn) {
      const team = {
        teamNumber: teamNumber
      }
      teams.push(team);
    }
    var newState = this.state;
    newState.teams = teams;
    this.setState(newState);
  },
  getUniqueTeams: function (teams1, teams2) {
    var newTeams = teams2;
    teams1.map(function (team1, i) {
      var isIn = false;
      teams2.map(function (team2, i) {
        if (team1.teamNumber == team2.teamNumber) {
          isIn = true;
        }
      });
      if (!isIn) {
        newTeams.push(team1)
      }
    });
    return newTeams;
  },
  getUniqueTeamsFromMatches: function (matches) {
    var uniqueTeams = [];
    matches.map(function (match, i) {
      var red1 = { teamNumber: match.red1 }
      var red2 = { teamNumber: match.red2 }
      var blue1 = { teamNumber: match.blue1 }
      var blue2 = { teamNumber: match.blue2 }

      var isIn = false;
      uniqueTeams.map(function (team, i) {
        if (match.red1 == team.teamNumber) {
          isIn = true;
        }
      }, this);
      if (!isIn) {
        uniqueTeams.push(red1);
      }

      isIn = false;
      uniqueTeams.map(function (team, i) {
        if (match.red2 == team.teamNumber) {
          isIn = true;
        }
      }, this);
      if (!isIn) {
        uniqueTeams.push(red2);
      }

      isIn = false;
      uniqueTeams.map(function (team, i) {
        if (match.blue1 == team.teamNumber) {
          isIn = true;
        }
      }, this);
      if (!isIn) {
        uniqueTeams.push(blue1);
      }

      isIn = false;
      uniqueTeams.map(function (team, i) {
        if (match.blue2 == team.teamNumber) {
          isIn = true;
        }
      }, this);
      if (!isIn) {
        uniqueTeams.push(blue2);
      }
    }, this);

    return uniqueTeams;
  },
  getMatcheswithTeamNumber: function (teamNumber) {
    const stateMatches = this.state.matches;
    var teamMatches = [];
    stateMatches.map(function (match, i) {
      if (match.red1 == teamNumber || match.red2 == teamNumber || match.blue1 == teamNumber || match.blue2 == teamNumber) {
        teamMatches.push(match);
      }
    }, this);

    return teamMatches;
  },
  getMatcheswithTeamNumberInCompetition: function (teamNumber, competitionName) {
    const stateMatches = this.state.matches;
    var teamMatches = [];
    stateMatches.map(function (match, i) {
      if ((match.red1 == teamNumber || match.red2 == teamNumber || match.blue1 == teamNumber || match.blue2 == teamNumber)
        && (match.competition == competitionName)) {
        teamMatches.push(match);
      }
    }, this);

    return teamMatches;
  },
  getTeamsbyCompetition: function (competitionName) {
    const stateTeams = this.state.teams;
    var teams = [];
    stateTeams.map(function (team, i) {
      const competitions = this.getCompetitionswithTeamNumber(team.teamNumber);
      if (competitions != null) {
        competitions.map(function (competition, i) {
          if (competition.name == competitionName) {
            teams.push(team);
          }
        }, this);
      }
    }, this);

    return teams;
  },
  getMatchesbyCompetition: function (competitionName) {
    const stateMatches = this.state.matches;
    var matches = [];
    stateMatches.map(function (match, i) {
      if (match.competition == competitionName) {
        matches.push(match)
      }
    }, this);

    return matches;
  },
  getCompetitionswithTeamNumber: function (teamNumber) {
    const stateMatches = this.state.matches;
    const stateCompetitions = this.state.competitions;
    var teamMatches = [];
    var teamCompetitions = [];
    stateMatches.map(function (match, i) {
      if (match.red1 == teamNumber || match.red2 == teamNumber || match.blue1 == teamNumber || match.blue2 == teamNumber) {
        teamMatches.push(match);
      }
    }, this);
    stateCompetitions.map(function (competition, i) {
      var isInMatches = false;
      teamMatches.map(function (match, i) {
        if (match.competition == competition.name) {
          isInMatches = true;
        }
      }, this);
      if (isInMatches) {
        var isInCompetitions = false;
        stateCompetitions.map(function (competition2, i) {
          if (competition2.competition == competition.name) {
            isInCompetitions = true;
          }
        }, this);
        if (!isInCompetitions) {
          teamCompetitions.push(competition);
        }
      }
    }, this);

    return teamCompetitions;
  },
  setTeamsData: function () {
    firebase.database().ref('teams/').set(this.state.teams);
  },
  updateTeamsState: function () {
    var matchesRef = firebase.database().ref('teams/');
    matchesRef.on('value', function (snapshot) {
      const teamsData = snapshot.val();
      const matches = this.state.matches;
      const stateTeams = this.getUniqueTeamsFromMatches(matches);
      if (teamsData != null && stateTeams == null) {
        this.setTeams(teamsData);
        this.sendMessage("Updated teams!");
      }
      else if (teamsData != null && stateTeams != null) {
        var combined = this.getUniqueTeams(teamsData, stateTeams);
        this.setTeams(combined);
        this.sendMessage("Updated teams!");
      }
      else if (teamsData == null && stateTeams != null) {
        this.setTeamsData(stateTeams);
        this.sendMessage("Updated teams!");
      }
    }, this);
  },
  updateTeamsData: function () {
    const stateTeams = this.state.teams;
    if (stateTeams != null) {
      this.setTeamsData(stateTeams);
    }
  },

  // Page changes
  scrollWindow: function() {
      window.scrollTo(0,0);
  },
  handleToScout: function () {
    this.scrollWindow();
    var newState = this.state;
    newState.scoutingMode = true;
    newState.viewPartialMatchMode = false;
    this.setState(newState);
  },
  statsHandleToTeamsMatches: function () {
    this.scrollWindow();
    var newState = this.state;
    newState.statsTeamsMatchesMode = true;
    newState.statsViewTeamsPartialMatchMode = false;
    newState.statsTeamViewMode = false;
    this.setState(newState);
  },
  statsHandleToTeamView: function () {
    this.scrollWindow();
    var newState = this.state;
    newState.statsTeamViewMode = true;
    newState.statsTeamsMatchesMode = false;
    newState.statsViewTeamsPartialMatchMode = false;
    this.setState(newState);
  },
  statsHandleToTeamsList: function () {
    this.scrollWindow();
    var newState = this.state;
    newState.statsTeamViewMode = false;
    newState.statsTeamsMatchesMode = false;
    newState.statsViewTeamsPartialMatchMode = false;
    this.setState(newState);
    this.updateTeamsData();
  },
  statsHandleToViewPartialMatchByTeam: function () {
    this.scrollWindow();
    var newState = this.state;
    newState.statsViewTeamsPartialMatchMode = true;
    newState.statsTeamsMatchesMode = false
    newState.statsTeamViewMode = false;
    this.setState(newState);
  },
  teamsHandleToTeamsMatches: function () {
    this.scrollWindow();
    var newState = this.state;
    newState.teamsTeamsMatchesMode = true;
    newState.teamsViewTeamsPartialMatchMode = false;
    newState.teamsTeamViewMode = false;
    this.setState(newState);
  },
  teamsHandleToTeamView: function () {
    this.scrollWindow();
    var newState = this.state;
    newState.teamsTeamViewMode = true;
    newState.teamsTeamsMatchesMode = false;
    newState.teamsViewTeamsPartialMatchMode = false;
    this.setState(newState);
  },
  teamsHandleToTeamsList: function () {
    this.scrollWindow();
    var newState = this.state;
    newState.teamsTeamViewMode = false;
    newState.teamsTeamsMatchesMode = false;
    newState.teamsViewTeamsPartialMatchMode = false;
    this.setState(newState);
    this.updateTeamsData();
  },
  teamsHandleToViewPartialMatchByTeam: function () {
    this.scrollWindow();
    var newState = this.state;
    newState.teamsViewTeamsPartialMatchMode = true;
    newState.teamsTeamsMatchesMode = false
    newState.teamsTeamViewMode = false;
    this.setState(newState);
  },
  handleMatchSelectedChange: function (match) {
    this.scrollWindow();
    var newState = this.state;
    newState.matchSelected = match;
    this.setState(newState);
  },
  handleToViewPartialMatch: function () {
    this.scrollWindow();
    var newState = this.state;
    newState.viewPartialMatchMode = true;
    newState.scoutingMode = false
    this.setState(newState);
  },
  handleToScoutUnscouted: function () {
    this.scrollWindow();
    var newState = this.state;
    newState.scoutingMode = true;
    newState.scoutingUnscouted = true;
    this.setState(newState);
  },
  handleToMatches: function () {
    this.scrollWindow();
    var newState = this.state;
    newState.scoutingMode = false;
    newState.viewPartialMatchMode = false;
    newState.scoutingUnscouted = false;
    newState.currentPartialMatch = {
      matchNumber: 0,
      red1: 0,
      red2: 0,
      blue1: 0,
      blue2: 0,
      time: {
        seconds: 0,
        minutes: 0,
        hours: 0,
        date: 0,
        month: 0,
        year: 0,
      },
      allianceColor: "",
      totalScore: 0,
      user: "",
      partialScore1: 0,
      partialScore2: 0,
      scores: {
        autonButtonsScore1: 0,
        autonParkingScore1: 0,
        autonCenterVortexScore1: 0,
        autonCornerVortexScore1: 0,
        autonCapBallScore1: 0,
        centerVortexScore1: 0,
        cornerVortexScore1: 0,
        capBallScore1: 0,
        teleopButtonAllianceNearScore1: 0,
        teleopButtonAllianceFarScore1: 0,
        teleopButtonOpponentNearScore1: 0,
        teleopButtonOpponentFarScore1: 0,
      
        autonButtonsScore2: 0,
        autonParkingScore2: 0,
        autonCenterVortexScore2: 0,
        autonCornerVortexScore2: 0,
        autonCapBallScore2: 0,
        centerVortexScore2: 0,
        cornerVortexScore2: 0,
        capBallScore2: 0,
        teleopButtonAllianceNearScore2: 0,
        teleopButtonAllianceFarScore2: 0,
        teleopButtonOpponentNearScore2: 0,
        teleopButtonOpponentFarScore2: 0,
      },
    }
    this.setState(newState);
    this.updateMatchesData();
  },
  handleNavOpenChange: function (navOpen) {
    this.scrollWindow();
    var newState = this.state;
    newState.navOpen = navOpen;
    this.setState(newState);
    this.getCurrentUserData();
  },
  handlePageChange: function (page) {
    this.scrollWindow();
    var newState = this.state;
    newState.currentTab = page;
    this.setState(newState);
    this.updateURL();
  },

  // Messaging
  sendMessage: function (message) {
    var newState = this.state;
    newState.messagesOpen = true;
    newState.message = message;
    this.setState(newState);
  },
  handleMessagesClose: function () {
    var newState = this.state;
    newState.messagesOpen = false;
    this.setState(newState);
  },

  // Authentication
  createAccount: function (email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      this.sendMessage("Created Account");
      this.signIn(email, password)
    }, function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var message = "";
      if (errorMessage == "The email address is badly formatted.") {
        message = "The email address is badly formatted."
      }
      else if (errorMessage == "The password must be 6 characters long or more.") {
        message = "Password must be at least 6 characters long";
      }
      else if (errorMessage == "The email address is already in use by another account.") {
        message = "Failed: Email is already in use.";
      }
      else {
        message = "Can not connect to Firebase";
      }
      this.sendMessage(message);
    }, this);
  },
  signIn: function (email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      this.getCurrentUserData();
    }, function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var message = "";
      if (errorMessage == "The password is invalid or the user does not have a password.") {
        message = "The password is invalid."
      }
      else if (errorMessage == "The email address is badly formatted.") {
        message = "The email address is badly formatted.";
      }
      else if (errorMessage == "There is no user record corresponding to this identifier. The user may have been deleted.") {
        message = "This user does not exist.";
      }
      else {
        message = "Can not connect to Firebase";
      }
      this.sendMessage(message);
    }, this);
  },
  signOut: function () {
    firebase.auth().signOut().then(function () {
      this.sendMessage("Signed out");
      var newState = this.state;
      newState.signedIn = false;
      this.setState(newState);
    }, function (error) {
      console.error('Sign Out Error', error);
    }, this);
  },
  getCurrentUserData: function () {
    var user = firebase.auth().currentUser;
    var name, email, uid;
    if (user != null) {
      var newState = this.state;
      newState.signedIn = true;
      name = user.displayName;
      email = user.email;
      uid = user.uid;
      newState.user = user;
      this.setState(newState);
      this.sendMessage("Signed In as " + email);
    }
    else {
      var newState = this.state;
      newState.signedIn = false;
      this.setState(newState);
    }
  },

  // Time
  getTime: function () {
    var d = new Date();
    var seconds = d.getSeconds()
    var minutes = d.getMinutes()
    var hours = d.getHours()
    var date = d.getDate()
    var month = d.getMonth() + 1
    var year = d.getFullYear()
    return ({
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      date: date,
      month: month,
      year: year,
    })
  },
  displayTime: function (time) {
    var seconds = time.seconds
    var minutes = time.minutes
    var hours = time.hours
    var date = time.date
    var month = time.month
    var year = time.year
    return (month + "/" + date + "/" + year + ", " + hours + ":" + minutes + ":" + seconds)
  },
  getLaterTime: function (time1, time2) {
    if (time1.year > time2.year) {
      return time1
    }
    else if (time1.year < time2.year) {
      return time2
    }
    else if (time1.month > time2.month) {
      return time1
    }
    else if (time1.month < time2.month) {
      return time2
    }
    else if (time1.date > time2.date) {
      return time1
    }
    else if (time1.date < time2.date) {
      return time2
    }
    else if (time1.hours > time2.hours) {
      return time1
    }
    else if (time1.hours < time2.hours) {
      return time2
    }
    else if (time1.minutes > time2.minutes) {
      return time1
    }
    else if (time1.minutes < time2.minutes) {
      return time2
    }
    else if (time1.seconds > time2.seconds) {
      return time1
    }
    else if (time1.seconds < time2.seconds) {
      return time2
    }
    else {
      return true
    }
  },
  isLaterTime: function (time1, time2) {
    if (time1.year > time2.year) {
      return true
    }
    else if (time1.year < time2.year) {
      return false
    }
    else if (time1.month > time2.month) {
      return true
    }
    else if (time1.month < time2.month) {
      return false
    }
    else if (time1.date > time2.date) {
      return true
    }
    else if (time1.date < time2.date) {
      return false
    }
    else if (time1.hours > time2.hours) {
      return true
    }
    else if (time1.hours < time2.hours) {
      return false
    }
    else if (time1.minutes > time2.minutes) {
      return true
    }
    else if (time1.minutes < time2.minutes) {
      return false
    }
    else if (time1.seconds > time2.seconds) {
      return true
    }
    else if (time1.seconds < time2.seconds) {
      return false
    }
    else {
      return true
    }
  },

  // Competition
  handleCloseSelectCompetition: function () {
    var newState = this.state;
    newState.selectCompetitionOpen = false;
    this.setState(newState);
  },
  handleOpenSelectCompetition: function () {
    var newState = this.state;
    newState.selectCompetitionOpen = true;
    this.setState(newState);
  },
  handleCompetitionChange: function (competition) {
    var newState = this.state;
    newState.currentCompetition = competition;
    this.setState(newState);
  },
  handleSelectedCompetitionChange: function (competition) {
    var newState = this.state;
    newState.selectedCompetition = competition;
    this.setState(newState);
  },
  handleCompetitionChangeByName: function (competitionName) {
    var newState = this.state;
    newState.currentCompetition.name = competitionName;
    this.setState(newState);
  },
  setCompetitions: function (competitions) {
    var newState = this.state;
    newState.competitions = competitions;
    this.setState(newState);
    this.updateCompetitionsData();
  },
  addCompetitionByName: function (competitionName) {
    var competitions = this.state.competitions;
    var isIn = false;
    competitions.map(function (competition, i) {
      if (competition.name == competitionName) {
        isIn = true;
      }
    });
    if (!isIn) {
      const competition = {
        name: competitionName
      }
      competitions.push(competition);
    }
    var newState = this.state;
    newState.competitions = competitions;
    this.setState(newState);
    this.updateCompetitionsData();
  },
  getUniqueCompetitions: function (competitions1, competitions2) {
    var newCompetitions = competitions2;
    competitions1.map(function (competition1, i) {
      var isIn = false;
      competitions2.map(function (competition2, i) {
        if (competition1.name == competition2.name) {
          isIn = true;
        }
      });
      if (!isIn) {
        newCompetitions.push(competition1)
      }
    });
    return newCompetitions;
  },
  setCompetitionsData: function () {
    firebase.database().ref('competitions/').set(this.state.competitions);
  },
  updateCompetitionsState: function () {
    var matchesRef = firebase.database().ref('competitions/');
    matchesRef.on('value', function (snapshot) {
      const competitionsData = snapshot.val();
      const stateCompetitions = this.state.competitions;
      if (competitionsData != null && stateCompetitions == null) {
        this.setCompetitions(competitionsData);
        this.sendMessage("Updated Competitions!");
      }
      else if (competitionsData != null && stateCompetitions != null) {
        var combined = this.getUniqueCompetitions(competitionsData, stateCompetitions);
        this.setCompetitions(combined);
        this.sendMessage("Updated Competitions!");
      }
      else if (competitionsData == null && stateCompetitions != null) {
        this.setCompetitionsData(stateCompetitions);
        this.sendMessage("Updated Competitions!");
      }
    }, this);
  },
  updateCompetitionsData: function () {
    const stateCompetitions = this.state.competitions;
    if (stateCompetitions != null) {
      this.setCompetitionsData(stateCompetitions);
    }
  },

  // Check Connection
  checkConnection: function () {
    var connectedRef = firebase.database().ref(".info/connected");
    connectedRef.on("value", function (snap) {
      if (snap.val() === true) {
        this.sendMessage("Connected to Firebase");
      } else {
        this.sendMessage("Offline");
      }
    }, this);
  },

  // React Router
  contextTypes: {
    router: React.PropTypes.object
  },
  updateStateFromURL: function () {
    if (this.props.params.competition != undefined) {
      this.handleCompetitionChangeByName(this.props.params.competition)
    }
    if (this.props.params.tab != undefined) {
      this.handlePageChange(this.props.params.tab)
    }
  },
  updateURL: function () {
    const path = `/${this.state.currentCompetition.name}/${this.state.currentTab}`;
    this.context.router.push(path);
  },

  componentWillMount: function () {
    this.checkConnection();
    this.updateMatchesState();
    this.updateTeamsState();
    this.updateCompetitionsState();
    this.getCurrentUserData();
    this.updateStateFromURL();
    this.updateURL();
  },
  render() {
    switch (this.state.currentTab) {
      case "matches":
        return (
          <MuiThemeProvider muiTheme={muiTheme}>
            <div style={{ textAlign: 'center' }}>
              <MainAppBar navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange}
                handleOpenSelectCompetition={this.handleOpenSelectCompetition}/>
              <LeftNav navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange} handlePageChange={this.handlePageChange}/>
              <ScoutMatchTab
                matches={this.state.matches} currentPartialMatch={this.state.currentPartialMatch}
                handleCurrentPartialMatchUpdate={this.handleCurrentPartialMatchUpdate} addPartialMatch={this.addPartialMatch}
                setMatchesData={this.setMatchesData} setMatches={this.setMatches}
                currentMatchSetup={this.state.currentMatchSetup} handleCurrentMatchSetupUpdate={this.handleCurrentMatchSetupUpdate}
                removePartialMatch={this.removePartialMatch} addMatch={this.addMatch} containsUnscouted={this.containsUnscouted}
                updateMatchesData={this.updateMatchesData}

                handleToScout={this.handleToScout} handleToMatches={this.handleToMatches}
                scoutingMode={this.state.scoutingMode} scoutingUnscouted={this.state.scoutingUnscouted} handleToScoutUnscouted={this.handleToScoutUnscouted}
                viewPartialMatchMode={this.state.viewPartialMatchMode} handleToViewPartialMatch={this.handleToViewPartialMatch}
                handleMatchSelectedChange={this.handleMatchSelectedChange} matchSelected={this.state.matchSelected}

                signedIn={this.state.signedIn} sendMessage={this.sendMessage} user={this.state.user}

                teams={this.state.teams} addTeam={this.addTeam}

                getTime={this.getTime} displayTime={this.displayTime}

                currentCompetition={this.state.currentCompetition}
                />
              <Snackbar open={this.state.messagesOpen} message={this.state.message} autoHideDuration={4000} onRequestClose={this.handleMessagesClose}/>

              <SelectCompetition selectCompetitionOpen={this.state.selectCompetitionOpen} handleCloseSelectCompetition={this.handleCloseSelectCompetition}
                handleCompetitionChange={this.handleCompetitionChange} competitions={this.state.competitions} currentTab={this.state.currentTab}
                handleCompetitionChangeByName={this.handleCompetitionChangeByName} addCompetitionByName={this.addCompetitionByName}/>

            </div>
          </MuiThemeProvider>
        );

      case "practiceForm":
        return (
          <MuiThemeProvider muiTheme={muiTheme}>
            <div style={{ textAlign: 'center' }}>
              <MainAppBar navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange}
                handleOpenSelectCompetition={this.handleOpenSelectCompetition}/>
              <LeftNav navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange} handlePageChange={this.handlePageChange}/>
              <PracticeFormTab/>
              <Snackbar open={this.state.messagesOpen} message={this.state.message} autoHideDuration={4000} onRequestClose={this.handleMessagesClose}/>

              <SelectCompetition selectCompetitionOpen={this.state.selectCompetitionOpen} handleCloseSelectCompetition={this.handleCloseSelectCompetition}
                handleCompetitionChange={this.handleCompetitionChange} competitions={this.state.competitions} currentTab={this.state.currentTab}
                handleCompetitionChangeByName={this.handleCompetitionChangeByName} addCompetitionByName={this.addCompetitionByName}/>

            </div>
          </MuiThemeProvider>
        );

      case "account":
        return (
          <MuiThemeProvider muiTheme={muiTheme}>
            <div style={{ textAlign: 'center' }}>
              <MainAppBar navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange}
                handleOpenSelectCompetition={this.handleOpenSelectCompetition}/>
              <LeftNav navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange} handlePageChange={this.handlePageChange}/>
              <AccountTab signIn={this.signIn} createAccount={this.createAccount} sendMessage={this.sendMessage}
                signedIn={this.state.signedIn} user={this.state.user} signOut={this.signOut}/>
              <Snackbar open={this.state.messagesOpen} message={this.state.message} autoHideDuration={4000} onRequestClose={this.handleMessagesClose} />

              <SelectCompetition selectCompetitionOpen={this.state.selectCompetitionOpen} handleCloseSelectCompetition={this.handleCloseSelectCompetition}
                handleCompetitionChange={this.handleCompetitionChange} competitions={this.state.competitions} currentTab={this.state.currentTab}
                handleCompetitionChangeByName={this.handleCompetitionChangeByName} addCompetitionByName={this.addCompetitionByName}/>

            </div>
          </MuiThemeProvider>
        );

      case "welcome":
        return (
          <MuiThemeProvider muiTheme={muiTheme}>
            <div style={{ textAlign: 'center' }}>
              <MainAppBar navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange}
                handleOpenSelectCompetition={this.handleOpenSelectCompetition}/>
              <LeftNav navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange} handlePageChange={this.handlePageChange}/>
              <WelcomeTab/>
              <Snackbar open={this.state.messagesOpen} message={this.state.message} autoHideDuration={4000} onRequestClose={this.handleMessagesClose} />

              <SelectCompetition selectCompetitionOpen={this.state.selectCompetitionOpen} handleCloseSelectCompetition={this.handleCloseSelectCompetition}
                handleCompetitionChange={this.handleCompetitionChange} competitions={this.state.competitions} currentTab={this.state.currentTab}
                handleCompetitionChangeByName={this.handleCompetitionChangeByName} addCompetitionByName={this.addCompetitionByName}/>

            </div>
          </MuiThemeProvider>
        );

      case "teams":
        return (
          <MuiThemeProvider muiTheme={muiTheme}>
            <div style={{ textAlign: 'center' }}>
              <MainAppBar navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange}
                handleOpenSelectCompetition={this.handleOpenSelectCompetition}/>
              <LeftNav navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange} handlePageChange={this.handlePageChange}/>
              <TeamsTab
                teams={this.state.teams} currentTeam={this.state.currentTeam} handleCurrentTeamUpdate={this.handleCurrentTeamUpdate}
                handleToTeamsList={this.teamsHandleToTeamsList} handleToTeamView={this.teamsHandleToTeamView} teamViewMode={this.state.teamsTeamViewMode}
                getMatcheswithTeamNumber={this.getMatcheswithTeamNumber} handleToTeamsMatches={this.teamsHandleToTeamsMatches}
                handleToViewPartialMatchByTeam={this.teamsHandleToViewPartialMatchByTeam} getMatcheswithTeamNumber={this.getMatcheswithTeamNumber}
                displayTime={this.displayTime} currentCompetition={this.state.currentCompetition} containsUnscouted={this.containsUnscouted}
                matchSelected={this.state.matchSelected} handleMatchSelectedChange={this.handleMatchSelectedChange} competitions={this.state.competitions}
                teamsMatchesMode={this.state.teamsTeamsMatchesMode} selectedCompetition={this.state.selectedCompetition}
                handleSelectedCompetitionChange={this.handleSelectedCompetitionChange} viewTeamsPartialMatchMode={this.state.teamsViewTeamsPartialMatchMode}
                getCompetitionswithTeamNumber={this.getCompetitionswithTeamNumber} matches={this.state.matches}
                getMatcheswithTeamNumberInCompetition={this.getMatcheswithTeamNumberInCompetition} getTeamsbyCompetition={this.getTeamsbyCompetition}
                getMatchesbyCompetition={this.getMatchesbyCompetition}/>

              <Snackbar open={this.state.messagesOpen} message={this.state.message} autoHideDuration={4000} onRequestClose={this.handleMessagesClose} />

              <SelectCompetition selectCompetitionOpen={this.state.selectCompetitionOpen} handleCloseSelectCompetition={this.handleCloseSelectCompetition}
                handleCompetitionChange={this.handleCompetitionChange} competitions={this.state.competitions} currentTab={this.state.currentTab}
                handleCompetitionChangeByName={this.handleCompetitionChangeByName} addCompetitionByName={this.addCompetitionByName}/>

            </div>
          </MuiThemeProvider>
        );

      case "stats":
        return (
          <MuiThemeProvider muiTheme={muiTheme}>
            <div style={{ textAlign: 'center' }}>
              <MainAppBar navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange}
                handleOpenSelectCompetition={this.handleOpenSelectCompetition}/>
              <LeftNav navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange} handlePageChange={this.handlePageChange}/>
              <StatsTab
                teams={this.state.teams} currentTeam={this.state.statsCurrentTeam} handleCurrentTeamUpdate={this.statsHandleCurrentTeamUpdate}
                handleToTeamsList={this.statsHandleToTeamsList} handleToTeamView={this.statsHandleToTeamView} teamViewMode={this.state.statsTeamViewMode}
                getMatcheswithTeamNumber={this.getMatcheswithTeamNumber} handleToTeamsMatches={this.statsHandleToTeamsMatches}
                handleToViewPartialMatchByTeam={this.statsHandleToViewPartialMatchByTeam} getMatcheswithTeamNumber={this.getMatcheswithTeamNumber}
                displayTime={this.displayTime} currentCompetition={this.state.currentCompetition} containsUnscouted={this.containsUnscouted}
                matchSelected={this.state.matchSelected} handleMatchSelectedChange={this.handleMatchSelectedChange} competitions={this.state.competitions}
                teamsMatchesMode={this.state.statsTeamsMatchesMode} selectedCompetition={this.state.selectedCompetition}
                handleSelectedCompetitionChange={this.handleSelectedCompetitionChange} viewTeamsPartialMatchMode={this.state.statsViewTeamsPartialMatchMode}
                getCompetitionswithTeamNumber={this.getCompetitionswithTeamNumber} matches={this.state.matches}
                getMatcheswithTeamNumberInCompetition={this.getMatcheswithTeamNumberInCompetition}/>

              <Snackbar open={this.state.messagesOpen} message={this.state.message} autoHideDuration={4000} onRequestClose={this.handleMessagesClose} />

              <SelectCompetition selectCompetitionOpen={this.state.selectCompetitionOpen} handleCloseSelectCompetition={this.handleCloseSelectCompetition}
                handleCompetitionChange={this.handleCompetitionChange} competitions={this.state.competitions} currentTab={this.state.currentTab}
                handleCompetitionChangeByName={this.handleCompetitionChangeByName} addCompetitionByName={this.addCompetitionByName}/>

            </div>
          </MuiThemeProvider>
        );

      case "competitions":
        return (
          <MuiThemeProvider muiTheme={muiTheme}>
            <div style={{ textAlign: 'center' }}>
              <MainAppBar navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange}
                handleOpenSelectCompetition={this.handleOpenSelectCompetition}/>
              <LeftNav navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange} handlePageChange={this.handlePageChange}/>
              <Snackbar open={this.state.messagesOpen} message={this.state.message} autoHideDuration={4000} onRequestClose={this.handleMessagesClose} />

              <CompetitionTab selectCompetitionOpen={this.state.selectCompetitionOpen} handleCloseSelectCompetition={this.handleCloseSelectCompetition}
                handleCompetitionChange={this.handleCompetitionChange} competitions={this.state.competitions} currentTab={this.state.currentTab}
                handleCompetitionChangeByName={this.handleCompetitionChangeByName} addCompetitionByName={this.addCompetitionByName}
                handleOpenSelectCompetition={this.handleOpenSelectCompetition} currentCompetition={this.state.currentCompetition}/>

            </div>
          </MuiThemeProvider>
        );

      case "matchPredictor":
        return (
          <MuiThemeProvider muiTheme={muiTheme}>
            <div style={{ textAlign: 'center' }}>
              <MainAppBar navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange}
                handleOpenSelectCompetition={this.handleOpenSelectCompetition}/>
              <LeftNav navOpen={this.state.navOpen} handleNavOpenChange={this.handleNavOpenChange} handlePageChange={this.handlePageChange}/>
              <Snackbar open={this.state.messagesOpen} message={this.state.message} autoHideDuration={4000} onRequestClose={this.handleMessagesClose} />

              <MatchPredictorTab competitions={this.state.competitions} getMatchesbyCompetition={this.getMatchesbyCompetition} matches={this.state.matches}
                getCompetitionswithTeamNumber={this.getCompetitionswithTeamNumber}/>

            </div>
          </MuiThemeProvider>
        );

      default:
        this.sendMessage("No such page");
        break;
    }
  }
});

export default Main;