import ScoreCalculator from './ScoreCalculator';

class DataCalculator {
    constructor(matches) {
        this.matches = matches;
    }
    getRealMatchScoreForAllianceOld(match, allianceColor) {
        var scores = [];
        match.partialMatches.map(function (partialMatch, i) {
            if (partialMatch.allianceColor == allianceColor) {
                scores.push(partialMatch.totalScore);
            }
        }, this);

        var sum = 0;
        scores.map(function (score, i) {
            sum += score
        }, this);
        const average = sum / scores.length;

        return average;
    }
    getRealMatchScoreForAlliance(match, allianceColor) {
        var allianceMatches = [];
        match.partialMatches.map(function (partialMatch, i) {
            if (partialMatch.allianceColor == allianceColor) {
                allianceMatches.push(partialMatch);
            }
        }, this);
        const mergedScores = this.getMergedScores(allianceMatches)
        if (mergedScores == -1) {
            return -1
        }
        else {
            var scoreCalculator = new ScoreCalculator(mergedScores);
            return scoreCalculator.getTotalScore();
        }
    }
    getMergedScores(partialMatches) {
        var autonButtonsScores1 = []
        var autonParkingScores1 = []
        var autonCenterVortexScores1 = []
        var autonCornerVortexScores1 = []
        var autonCapBallScores1 = []
        var centerVortexScores1 = []
        var cornerVortexScores1 = []
        var capBallScores1 = []
        var teleopButtonAllianceNearScores1 = []
        var teleopButtonAllianceFarScores1 = []
        var teleopButtonOpponentNearScores1 = []
        var teleopButtonOpponentFarScores1 = []

        var autonButtonsScores2 = []
        var autonParkingScores2 = []
        var autonCenterVortexScores2 = []
        var autonCornerVortexScores2 = []
        var autonCapBallScores2 = []
        var centerVortexScores2 = []
        var cornerVortexScores2 = []
        var capBallScores2 = []
        var teleopButtonAllianceNearScores2 = []
        var teleopButtonAllianceFarScores2 = []
        var teleopButtonOpponentNearScores2 = []
        var teleopButtonOpponentFarScores2 = []

        var arePartialMatches = false;

        partialMatches.map(function (partialMatch1, i) {
            if (partialMatch1.totalScore != -1 && partialMatch1.scores != undefined) {
                arePartialMatches = true;
                autonButtonsScores1.push(partialMatch1.scores.autonButtonsScore1);
                autonParkingScores1.push(partialMatch1.scores.autonParkingScore1);
                autonCenterVortexScores1.push(partialMatch1.scores.autonCenterVortexScore1);
                autonCornerVortexScores1.push(partialMatch1.scores.autonCornerVortexScore1);
                autonCapBallScores1.push(partialMatch1.scores.autonCapBallScore1);
                centerVortexScores1.push(partialMatch1.scores.centerVortexScore1);
                cornerVortexScores1.push(partialMatch1.scores.cornerVortexScore1);
                capBallScores1.push(partialMatch1.scores.capBallScore1);
                teleopButtonAllianceNearScores1.push(partialMatch1.scores.teleopButtonAllianceNearScore1);
                teleopButtonAllianceFarScores1.push(partialMatch1.scores.teleopButtonAllianceFarScore1);
                teleopButtonOpponentNearScores1.push(partialMatch1.scores.teleopButtonOpponentNearScore1);
                teleopButtonOpponentFarScores1.push(partialMatch1.scores.teleopButtonOpponentFarScore1);

                autonButtonsScores2.push(partialMatch1.scores.autonButtonsScore2);
                autonParkingScores2.push(partialMatch1.scores.autonParkingScore2);
                autonCenterVortexScores2.push(partialMatch1.scores.autonCenterVortexScore2);
                autonCornerVortexScores2.push(partialMatch1.scores.autonCornerVortexScore2);
                autonCapBallScores2.push(partialMatch1.scores.autonCapBallScore2);
                centerVortexScores2.push(partialMatch1.scores.centerVortexScore2);
                cornerVortexScores2.push(partialMatch1.scores.cornerVortexScore2);
                capBallScores2.push(partialMatch1.scores.capBallScore2);
                teleopButtonAllianceNearScores2.push(partialMatch1.scores.teleopButtonAllianceNearScore2);
                teleopButtonAllianceFarScores2.push(partialMatch1.scores.teleopButtonAllianceFarScore2);
                teleopButtonOpponentNearScores2.push(partialMatch1.scores.teleopButtonOpponentNearScore2);
                teleopButtonOpponentFarScores2.push(partialMatch1.scores.teleopButtonOpponentFarScore2);
            }
        }, this);

        var mergedScores = {
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
        };

        function mode(arr) {
            return arr.sort((a, b) =>
                arr.filter(v => v === a).length
                - arr.filter(v => v === b).length
            ).pop();
        }

        if (!arePartialMatches) {
            return -1
        }

        mergedScores.autonButtonsScore1 = mode(autonButtonsScores1);
        mergedScores.autonParkingScore1 = mode(autonParkingScores1);
        mergedScores.autonCenterVortexScore1 = mode(autonCenterVortexScores1);
        mergedScores.autonCornerVortexScore1 = mode(autonCornerVortexScores1);
        mergedScores.autonCapBallScore1 = mode(autonCapBallScores1);
        mergedScores.centerVortexScore1 = mode(centerVortexScores1);
        mergedScores.cornerVortexScore1 = mode(cornerVortexScores1);
        mergedScores.capBallScore1 = mode(capBallScores1);
        mergedScores.teleopButtonAllianceNearScore1 = mode(teleopButtonAllianceNearScores1);
        mergedScores.teleopButtonAllianceFarScore1 = mode(teleopButtonAllianceFarScores1);
        mergedScores.teleopButtonOpponentNearScore1 = mode(teleopButtonOpponentNearScores1);
        mergedScores.teleopButtonOpponentFarScore1 = mode(teleopButtonOpponentFarScores1);

        mergedScores.autonButtonsScore2 = mode(autonButtonsScores2);
        mergedScores.autonParkingScore2 = mode(autonParkingScores2);
        mergedScores.autonCenterVortexScore2 = mode(autonCenterVortexScores2);
        mergedScores.autonCornerVortexScore2 = mode(autonCornerVortexScores2);
        mergedScores.autonCapBallScore2 = mode(autonCapBallScores2);
        mergedScores.centerVortexScore2 = mode(centerVortexScores2);
        mergedScores.cornerVortexScore2 = mode(cornerVortexScores2);
        mergedScores.capBallScore2 = mode(capBallScores2);
        mergedScores.teleopButtonAllianceNearScore2 = mode(teleopButtonAllianceNearScores2);
        mergedScores.teleopButtonAllianceFarScore2 = mode(teleopButtonAllianceFarScores2);
        mergedScores.teleopButtonOpponentNearScore2 = mode(teleopButtonOpponentNearScores2);
        mergedScores.teleopButtonOpponentFarScore2 = mode(teleopButtonOpponentFarScores2);

        return mergedScores;
    }
    getAverageMatchScoreForTeam(teamNumber) {
        const matches = this.matches;
        var scores = [];
        matches.map(function (match, i) {
            if ((match.red1 == teamNumber || match.red2 == teamNumber)) {
                const matchScore = this.getRealMatchScoreForAlliance(match, "Red");
                if (matchScore != -1 && matchScore != null) {
                    scores.push(matchScore);
                }
            }
            else if ((match.blue1 == teamNumber || match.blue2 == teamNumber)) {
                const matchScore = this.getRealMatchScoreForAlliance(match, "Blue");
                if (matchScore != -1 && matchScore != null) {
                    scores.push(matchScore);
                }
            }
        }, this);

        if (scores.length == 0) {
            return "No data"
        }

        var sum = 0;
        scores.map(function (score, i) {
            sum += score
        }, this);
        const average = sum / scores.length;

        return Math.round(average);
    }
    getAverageMatchScore() {
        const matches = this.matches;
        var scores = [];
        matches.map(function (match, i) {
            const matchScoreR = this.getRealMatchScoreForAlliance(match, "Red");
            if (matchScoreR != -1 && matchScoreR != null) {
                scores.push(matchScoreR);
            }
            const matchScoreB = this.getRealMatchScoreForAlliance(match, "Blue");
            if (matchScoreB != -1 && matchScoreB != null) {
                scores.push(matchScoreB);
            }
        }, this);

        if (scores.length == 0) {
            return "No data"
        }

        var sum = 0;
        scores.map(function (score, i) {
            sum += score
        }, this);
        const average = sum / scores.length;

        return Math.round(average);
    }
    getHighestMatchScore() {
        const matches = this.matches;
        var score = -1;
        var bestMatch = "none";
        matches.map(function (match, i) {
            const matchScoreR = this.getRealMatchScoreForAlliance(match, "Red");
            if (matchScoreR != -1 && matchScoreR != null) {
                if (matchScoreR > score) {
                    score = matchScoreR;
                    bestMatch = match;
                }
            }
            const matchScoreB = this.getRealMatchScoreForAlliance(match, "Blue");
            if (matchScoreB != -1 && matchScoreB != null) {
                if (matchScoreB > score) {
                    score = matchScoreB;
                    bestMatch = match;
                }
            }
        }, this);

        if (score == -1 || bestMatch == "none") {
            return "No data"
        }

        return score;
    }
    getHighestMatchScoreAlliance() {
        const matches = this.matches;
        var score = -1;
        var team1 = "none";
        var team2 = "none";
        var comp = "none";
        matches.map(function (match, i) {
            const matchScoreR = this.getRealMatchScoreForAlliance(match, "Red");
            if (matchScoreR != -1 && matchScoreR != null) {
                if (matchScoreR > score) {
                    score = matchScoreR;
                    team1 = match.red1;
                    team2 = match.red2;
                    comp = match.competition;
                }
            }
            const matchScoreB = this.getRealMatchScoreForAlliance(match, "Blue");
            if (matchScoreB != -1 && matchScoreB != null) {
                if (matchScoreB > score) {
                    score = matchScoreB;
                    team1 = match.blue1;
                    team2 = match.blue2;
                    comp = match.competition;
                }
            }
        }, this);

        if (score == -1 || team1 == "none" || team2 == "none" || comp == "none") {
            return "No data"
        }
        return team1 + ", " + team2 + " at " + comp;
    }
    getMatchPartialScoreForTeam(match, allianceColor, team) {
        var scores = [];
        match.partialMatches.map(function (partialMatch, i) {
            if (partialMatch.allianceColor == allianceColor) {
                if (partialMatch.totalScore == -1) {
                    scores.push(-1);
                }
                else if (team == "1") {
                    scores.push(partialMatch.partialScore1);
                }
                else {
                    scores.push(partialMatch.partialScore2);
                }
            }
        }, this);

        var sum = 0;
        scores.map(function (score, i) {
            sum += score
        }, this);
        const average = sum / scores.length;

        return average;
    }
    getRealPartialMatchScoreForTeam(match, allianceColor, team) {
        var allianceMatches = [];
        match.partialMatches.map(function (partialMatch, i) {
            if (partialMatch.allianceColor == allianceColor) {
                allianceMatches.push(partialMatch);
            }
        }, this);
        const mergedScores = this.getMergedScores(allianceMatches)
        if (mergedScores == -1) {
            return -1
        }
        else if (team == "1") {
            var scoreCalculator = new ScoreCalculator(mergedScores);
            return scoreCalculator.getPartialScore1();
        }
        else {
            var scoreCalculator = new ScoreCalculator(mergedScores);
            return scoreCalculator.getPartialScore2();
        }
    }
    getAverageMatchPartialScoreForTeam(teamNumber) {
        const matches = this.matches;
        var scores = [];
        matches.map(function (match, i) {
            if (match.red1 == teamNumber) {
                const matchScore = this.getRealPartialMatchScoreForTeam(match, "Red", "1");
                if (matchScore != -1 && matchScore != null) {
                    scores.push(matchScore);
                }
            }
            else if (match.red2 == teamNumber) {
                const matchScore = this.getRealPartialMatchScoreForTeam(match, "Red", "2");
                if (matchScore != -1 && matchScore != null) {
                    scores.push(matchScore);
                }
            }
            else if (match.blue1 == teamNumber) {
                const matchScore = this.getRealPartialMatchScoreForTeam(match, "Blue", "1");
                if (matchScore != -1 && matchScore != null) {
                    scores.push(matchScore);
                }
            }
            else if (match.blue2 == teamNumber) {
                const matchScore = this.getRealPartialMatchScoreForTeam(match, "Blue", "2");
                if (matchScore != -1 && matchScore != null) {
                    scores.push(matchScore);
                }
            }
        }, this);

        if (scores.length == 0) {
            return "No data"
        }

        var sum = 0;
        scores.map(function (score, i) {
            sum += score
        }, this);
        const average = sum / scores.length;

        return Math.round(average);
    }
    getAverageMatchPartialScore() {
        const matches = this.matches;
        var scores = [];
        matches.map(function (match, i) {
            const matchScoreR1 = this.getMatchPartialScoreForTeam(match, "Red", "1");
            if (matchScoreR1 != -1 && matchScoreR1 != null) {
                scores.push(matchScoreR1);
            }
            const matchScoreR2 = this.getMatchPartialScoreForTeam(match, "Red", "2");
            if (matchScoreR2 != -1 && matchScoreR2 != null) {
                scores.push(matchScoreR2);
            }
            const matchScoreB1 = this.getMatchPartialScoreForTeam(match, "Blue", "1");
            if (matchScoreB1 != -1 && matchScoreB1 != null) {
                scores.push(matchScoreB1);
            }
            const matchScoreB2 = this.getMatchPartialScoreForTeam(match, "Blue", "2");
            if (matchScoreB2 != -1 && matchScoreB2 != null) {
                scores.push(matchScoreB2);
            }
        }, this);

        if (scores.length == 0) {
            return "No data"
        }

        var sum = 0;
        scores.map(function (score, i) {
            sum += score
        }, this);
        const average = sum / scores.length;

        return Math.round(average);
    }
    getHighestPartialMatchScoreTeam() {
        const matches = this.matches;
        var score = -1;
        var team = "none";
        var comp = "none";
        matches.map(function (match, i) {
            const matchScoreR1 = this.getMatchPartialScoreForTeam(match, "Red", "1");
            if (matchScoreR1 != -1 && matchScoreR1 != null) {
                if (matchScoreR1 > score) {
                    score = matchScoreR1;
                    team = match.red1;
                    comp = match.competition;
                }
            }
            const matchScoreR2 = this.getMatchPartialScoreForTeam(match, "Red", "2");
            if (matchScoreR2 != -1 && matchScoreR2 != null) {
                if (matchScoreR2 > score) {
                    score = matchScoreR2;
                    team = match.red2;
                    comp = match.competition;
                }
            }
            const matchScoreB1 = this.getMatchPartialScoreForTeam(match, "Blue", "1");
            if (matchScoreB1 != -1 && matchScoreB1 != null) {
                if (matchScoreB1 > score) {
                    score = matchScoreB1;
                    team = match.blue1;
                    comp = match.competition;
                }
            }
            const matchScoreB2 = this.getMatchPartialScoreForTeam(match, "Blue", "2");
            if (matchScoreB2 != -1 && matchScoreB2 != null) {
                if (matchScoreB2 > score) {
                    score = matchScoreB2;
                    team = match.blue2;
                    comp = match.competition;
                }
            }
        }, this);

        if (score == -1 || team == "none" || comp == "none") {
            return "No data"
        }

        return team + " at " + comp;
    }
    getHighestPartialMatchScore() {
        const matches = this.matches;
        var score = -1;
        matches.map(function (match, i) {
            const matchScoreR1 = this.getMatchPartialScoreForTeam(match, "Red", "1");
            if (matchScoreR1 != -1 && matchScoreR1 != null) {
                if (matchScoreR1 > score) {
                    score = matchScoreR1;
                }
            }
            const matchScoreR2 = this.getMatchPartialScoreForTeam(match, "Red", "2");
            if (matchScoreR2 != -1 && matchScoreR2 != null) {
                if (matchScoreR2 > score) {
                    score = matchScoreR2;
                }
            }
            const matchScoreB1 = this.getMatchPartialScoreForTeam(match, "Blue", "1");
            if (matchScoreB1 != -1 && matchScoreB1 != null) {
                if (matchScoreB1 > score) {
                    score = matchScoreB1;
                }
            }
            const matchScoreB2 = this.getMatchPartialScoreForTeam(match, "Blue", "2");
            if (matchScoreB2 != -1 && matchScoreB2 != null) {
                if (matchScoreB2 > score) {
                    score = matchScoreB2;
                }
            }
        }, this);

        if (score == -1) {
            return "No data"
        }

        return score;
    }
    getTotalWinsForTeam(teamNumber) {
        const matches = this.matches;
        var noData = true;
        var wins = 0;
        matches.map(function (match, i) {
            if (match.red1 == teamNumber || match.red2 == teamNumber) {
                const redMatchScore = this.getRealMatchScoreForAlliance(match, "Red");
                const blueMatchScore = this.getRealMatchScoreForAlliance(match, "Blue");
                if (blueMatchScore != -1 && blueMatchScore != null && redMatchScore != -1 && redMatchScore != null) {
                    noData = false;
                    if (redMatchScore > blueMatchScore) {
                        wins++;
                    }
                }
            }
            if (match.blue1 == teamNumber || match.blue2 == teamNumber) {
                const redMatchScore = this.getRealMatchScoreForAlliance(match, "Red");
                const blueMatchScore = this.getRealMatchScoreForAlliance(match, "Blue");
                if (blueMatchScore != -1 && blueMatchScore != null && redMatchScore != -1 && redMatchScore != null) {
                    noData = false;
                    if (redMatchScore < blueMatchScore) {
                        wins++;
                    }
                }
            }
        }, this);

        if (noData) {
            return "No data"
        }

        return wins;
    }
    getMergedScoreForTeam(teamNumber) {

    }
    getTotalLossesForTeam(teamNumber) {
        const matches = this.matches;
        var noData = true;
        var losses = 0;
        matches.map(function (match, i) {
            if (match.red1 == teamNumber || match.red2 == teamNumber) {
                const redMatchScore = this.getRealMatchScoreForAlliance(match, "Red");
                const blueMatchScore = this.getRealMatchScoreForAlliance(match, "Blue");
                if (blueMatchScore != -1 && blueMatchScore != null && redMatchScore != -1 && redMatchScore != null) {
                    noData = false;
                    if (redMatchScore < blueMatchScore) {
                        losses++;
                    }
                }
            }
            if (match.blue1 == teamNumber || match.blue2 == teamNumber) {
                const redMatchScore = this.getRealMatchScoreForAlliance(match, "Red");
                const blueMatchScore = this.getRealMatchScoreForAlliance(match, "Blue");
                if (blueMatchScore != -1 && blueMatchScore != null && redMatchScore != -1 && redMatchScore != null) {
                    noData = false;
                    if (redMatchScore > blueMatchScore) {
                        losses++;
                    }
                }
            }
        }, this);

        if (noData) {
            return "No data"
        }

        return losses;
    }
    getWinningAlliance(match) {
        var winner = "none";
        const redMatchScore = this.getRealMatchScoreForAlliance(match, "Red");
        const blueMatchScore = this.getRealMatchScoreForAlliance(match, "Blue");
        if (blueMatchScore != -1 && blueMatchScore != null && redMatchScore != -1 && redMatchScore != null) {
            if (redMatchScore > blueMatchScore) {
                winner = "Red";
            }
            else if (redMatchScore > blueMatchScore) {
                winner = "Blue";
            }
        }

        return winner;
    }
    getMergedPartialScores(partialMatches) {
        var autonButtonsScores = []
        var autonParkingScores = []
        var autonCenterVortexScores = []
        var autonCornerVortexScores = []
        var autonCapBallScores = []
        var centerVortexScores = []
        var cornerVortexScores = []
        var capBallScores = []
        var teleopButtonAllianceNearScores = []
        var teleopButtonAllianceFarScores = []
        var teleopButtonOpponentNearScores = []
        var teleopButtonOpponentFarScores = []

        partialMatches.map(function (partialScore, i) {
            autonButtonsScores.push(partialScore.autonButtonsScore);
            autonParkingScores.push(partialScore.autonParkingScore);
            autonCenterVortexScores.push(partialScore.autonCenterVortexScore);
            autonCornerVortexScores.push(partialScore.autonCornerVortexScore);
            autonCapBallScores.push(partialScore.autonCapBallScore);
            centerVortexScores.push(partialScore.centerVortexScore);
            cornerVortexScores.push(partialScore.cornerVortexScore);
            capBallScores.push(partialScore.capBallScore);
            teleopButtonAllianceNearScores.push(partialScore.teleopButtonAllianceNearScore);
            teleopButtonAllianceFarScores.push(partialScore.teleopButtonAllianceFarScore);
            teleopButtonOpponentNearScores.push(partialScore.teleopButtonOpponentNearScore);
            teleopButtonOpponentFarScores.push(partialScore.teleopButtonOpponentFarScore);
        }, this);

        var mergedScores = {
            autonButtonsScore: 0,
            autonParkingScore: 0,
            autonCenterVortexScore: 0,
            autonCornerVortexScore: 0,
            autonCapBallScore: 0,
            centerVortexScore: 0,
            cornerVortexScore: 0,
            capBallScore: 0,
            teleopButtonAllianceNearScore: 0,
            teleopButtonAllianceFarScore: 0,
            teleopButtonOpponentNearScore: 0,
            teleopButtonOpponentFarScore: 0,
        };

        function mode(arr) {
            return arr.sort((a, b) =>
                arr.filter(v => v === a).length
                - arr.filter(v => v === b).length
            ).pop();
        }

        mergedScores.autonButtonsScore = mode(autonButtonsScores);
        mergedScores.autonParkingScore = mode(autonParkingScores);
        mergedScores.autonCenterVortexScore = mode(autonCenterVortexScores);
        mergedScores.autonCornerVortexScore = mode(autonCornerVortexScores);
        mergedScores.autonCapBallScore = mode(autonCapBallScores);
        mergedScores.centerVortexScore = mode(centerVortexScores);
        mergedScores.cornerVortexScore = mode(cornerVortexScores);
        mergedScores.capBallScore = mode(capBallScores);
        mergedScores.teleopButtonAllianceNearScore = mode(teleopButtonAllianceNearScores);
        mergedScores.teleopButtonAllianceFarScore = mode(teleopButtonAllianceFarScores);
        mergedScores.teleopButtonOpponentNearScore = mode(teleopButtonOpponentNearScores);
        mergedScores.teleopButtonOpponentFarScore = mode(teleopButtonOpponentFarScores);

        return mergedScores;
    }
    getRealSubPartialMatchForTeam(match, allianceColor, team) {
        var allianceMatches = [];
        match.partialMatches.map(function (partialMatch, i) {
            if (partialMatch.allianceColor == allianceColor) {
                allianceMatches.push(partialMatch);
            }
        }, this);
        const mergedScores = this.getMergedScores(allianceMatches);
        if (mergedScores == -1) {
            return -1;
        }
        var scoreCalculator = new ScoreCalculator(mergedScores);
        if (team == "1") {
            const mergedPartialMatchScores = {
                autonButtonsScore: mergedScores.autonButtonsScores1,
                autonParkingScore: mergedScores.autonParkingScores1,
                autonCenterVortexScore: mergedScores.autonCenterVortexScores1,
                autonCornerVortexScore: mergedScores.autonCornerVortexScores1,
                autonCapBallScore: mergedScores.autonCapBallScores1,
                centerVortexScore: mergedScores.centerVortexScores1,
                lowBuccornerVortexScoreketScore: mergedScores.cornerVortexScores1,
                capBallScore: mergedScores.capBallScores1,
                teleopButtonAllianceNearScore: mergedScores.teleopButtonAllianceNearScores1,
                teleopButtonAllianceFarScore: mergedScores.teleopButtonAllianceFarScores1,
                teleopButtonOpponentNearScore: mergedScores.teleopButtonOpponentNearScores1,
                teleopButtonOpponentFarScore: mergedScores.teleopButtonOpponentFarScores1,
            }
            return mergedPartialMatchScores;
        }
        else {
            const mergedPartialMatchScores = {
                autonButtonsScore: mergedScores.autonButtonsScores2,
                autonParkingScore: mergedScores.autonParkingScores2,
                autonCenterVortexScore: mergedScores.autonCenterVortexScores2,
                autonCornerVortexScore: mergedScores.autonCornerVortexScores2,
                autonCapBallScore: mergedScores.autonCapBallScores2,
                centerVortexScore: mergedScores.centerVortexScores2,
                cornerVortexScore: mergedScores.cornerVortexScores2,
                capBallScore: mergedScores.capBallScores2,
                teleopButtonAllianceNearScore: mergedScores.teleopButtonAllianceNearScores2,
                teleopButtonAllianceFarScore: mergedScores.teleopButtonAllianceFarScores2,
                teleopButtonOpponentNearScore: mergedScores.teleopButtonOpponentNearScores2,
                teleopButtonOpponentFarScore: mergedScores.teleopButtonOpponentFarScores2,
            }
            return mergedPartialMatchScores;
        }
    }
    getAverageSubPartialMatchForTeam(teamNumber) {
        const matches = this.matches;
        var scores = [];
        matches.map(function (match, i) {
            if (match.red1 == teamNumber) {
                const matchScores = this.getRealSubPartialMatchForTeam(match, "Red", "1");
                if (matchScores != -1 && matchScores != null) {
                    scores.push(matchScores);
                }
            }
            else if (match.red2 == teamNumber) {
                const matchScores = this.getRealSubPartialMatchForTeam(match, "Red", "2");
                if (matchScores != -1 && matchScores != null) {
                    scores.push(matchScores);
                }
            }
            else if (match.blue1 == teamNumber) {
                const matchScores = this.getRealSubPartialMatchForTeam(match, "Blue", "1");
                if (matchScores != -1 && matchScores != null) {
                    scores.push(matchScores);
                }
            }
            else if (match.blue2 == teamNumber) {
                const matchScores = this.getRealSubPartialMatchForTeam(match, "Blue", "2");
                if (matchScores != -1 && matchScores != null) {
                    scores.push(matchScores);
                }
            }
        }, this);

        if (scores.length == 0) {
            return -1;
        }
        const mergedScores = this.getMergedPartialScores(scores);
        return mergedScores;
    }
    combineSubScores(sub1, sub2) {
        if (sub1 == -1 || sub2 == -1) {
            return -1
        }
        else {
            const scores = {
                autonButtonsScore1: sub1.autonButtonsScore,
                autonParkingScore1: sub1.autonParkingScore,
                autonCenterVortexScore1: sub1.autonCenterVortexScore,
                autonCornerVortexScore1: sub1.autonCornerVortexScore,
                autonCapBallScore1: sub1.autonCapBallScore,
                centerVortexScore1: sub1.centerVortexScore,
                cornerVortexScore1: sub1.cornerVortexScore,
                capBallScore1: sub1.capBallScore,
                teleopButtonAllianceNearScore1: sub1.teleopButtonAllianceNearScore,
                teleopButtonAllianceFarScore1: sub1.teleopButtonAllianceFarScore,
                teleopButtonOpponentNearScore1: sub1.teleopButtonOpponentNearScore,
                teleopButtonOpponentFarScore1: sub1.teleopButtonOpponentFarScore,

                autonButtonsScore2: sub2.autonButtonsScore,
                autonParkingScore2: sub2.autonParkingScore,
                autonCenterVortexScore2: sub2.autonCenterVortexScore,
                autonCornerVortexScore2: sub2.autonCornerVortexScore,
                autonCapBallScore2: sub2.autonCapBallScore,
                centerVortexScore2: sub2.centerVortexScore,
                cornerVortexScore2: sub2.cornerVortexScore,
                capBallScore2: sub2.capBallScore,
                teleopButtonAllianceNearScores2: sub2.teleopButtonAllianceNearScore,
                teleopButtonAllianceFarScores2: sub2.teleopButtonAllianceFarScore,
                teleopButtonOpponentNearScores2: sub2.teleopButtonOpponentNearScore,
                teleopButtonOpponentFarScores2: sub2.teleopButtonOpponentFarScore
            };
            return scores;

        }
    }
}

export default DataCalculator;