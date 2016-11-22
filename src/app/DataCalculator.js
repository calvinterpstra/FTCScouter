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
        var autonButtonScores1 = []
        var autonClimbersScores1 = []
        var autonMountainScores1 = []
        var teleopClimbersScores1 = []
        var highBucketScores1 = []
        var midBucketScores1 = []
        var lowBucketScores1 = []
        var floorGoalScores1 = []
        var lowZiplineClimberScores1 = []
        var midZiplineClimberScores1 = []
        var highZiplineClimberScores1 = []
        var allClearScores1 = []
        var endgameMountainScores1 = []
        var autonButtonScores2 = []
        var autonClimbersScores2 = []
        var autonMountainScores2 = []
        var teleopClimbersScores2 = []
        var highBucketScores2 = []
        var midBucketScores2 = []
        var lowBucketScores2 = []
        var floorGoalScores2 = []
        var lowZiplineClimberScores2 = []
        var midZiplineClimberScores2 = []
        var highZiplineClimberScores2 = []
        var allClearScores2 = []
        var endgameMountainScores2 = []

        var arePartialMatches = false;

        partialMatches.map(function (partialMatch1, i) {
            if (partialMatch1.totalScore != -1 && partialMatch1.scores != undefined) {
                arePartialMatches = true;
                autonButtonScores1.push(partialMatch1.scores.autonButtonScore1);
                autonClimbersScores1.push(partialMatch1.scores.autonClimbersScore1);
                autonMountainScores1.push(partialMatch1.scores.autonMountainScore1);
                teleopClimbersScores1.push(partialMatch1.scores.teleopClimbersScore1);
                highBucketScores1.push(partialMatch1.scores.highBucketScore1);
                midBucketScores1.push(partialMatch1.scores.midBucketScore1);
                lowBucketScores1.push(partialMatch1.scores.lowBucketScore1);
                floorGoalScores1.push(partialMatch1.scores.floorGoalScore1);
                lowZiplineClimberScores1.push(partialMatch1.scores.lowZiplineClimberScore1);
                midZiplineClimberScores1.push(partialMatch1.scores.midZiplineClimberScore1);
                highZiplineClimberScores1.push(partialMatch1.scores.highZiplineClimberScore1);
                allClearScores1.push(partialMatch1.scores.allClearScore1);
                endgameMountainScores1.push(partialMatch1.scores.endgameMountainScore1);
                autonButtonScores2.push(partialMatch1.scores.autonButtonScore2);
                autonClimbersScores2.push(partialMatch1.scores.autonClimbersScore2);
                autonMountainScores2.push(partialMatch1.scores.autonMountainScore2);
                teleopClimbersScores2.push(partialMatch1.scores.teleopClimbersScore2);
                highBucketScores2.push(partialMatch1.scores.highBucketScore2);
                midBucketScores2.push(partialMatch1.scores.midBucketScore2);
                lowBucketScores2.push(partialMatch1.scores.lowBucketScore2);
                floorGoalScores2.push(partialMatch1.scores.floorGoalScore2);
                lowZiplineClimberScores2.push(partialMatch1.scores.lowZiplineClimberScore2);
                midZiplineClimberScores2.push(partialMatch1.scores.midZiplineClimberScore2);
                highZiplineClimberScores2.push(partialMatch1.scores.highZiplineClimberScore2);
                allClearScores2.push(partialMatch1.scores.allClearScore2);
                endgameMountainScores2.push(partialMatch1.scores.endgameMountainScore2);
            }
        }, this);

        var mergedScores = {
            autonButtonScore1: 0,
            autonClimbersScore1: 0,
            autonMountainScore1: 0,
            teleopClimbersScore1: 0,
            highBucketScore1: 0,
            midBucketScore1: 0,
            lowBucketScore1: 0,
            floorGoalScore1: 0,
            lowZiplineClimberScore1: 0,
            midZiplineClimberScore1: 0,
            highZiplineClimberScore1: 0,
            allClearScore1: 0,
            endgameMountainScore1: 0,
            autonButtonScore2: 0,
            autonClimbersScore2: 0,
            autonMountainScore2: 0,
            teleopClimbersScore2: 0,
            highBucketScore2: 0,
            midBucketScore2: 0,
            lowBucketScore2: 0,
            floorGoalScore2: 0,
            lowZiplineClimberScore2: 0,
            midZiplineClimberScore2: 0,
            highZiplineClimberScore2: 0,
            allClearScore2: 0,
            endgameMountainScore2: 0
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

        mergedScores.autonButtonScore1 = mode(autonButtonScores1);
        mergedScores.autonClimbersScore1 = mode(autonClimbersScores1);
        mergedScores.autonMountainScore1 = mode(autonMountainScores1);
        mergedScores.teleopClimbersScore1 = mode(teleopClimbersScores1);
        mergedScores.highBucketScore1 = mode(highBucketScores1);
        mergedScores.midBucketScore1 = mode(midBucketScores1);
        mergedScores.lowBucketScore1 = mode(lowBucketScores1);
        mergedScores.floorGoalScore1 = mode(floorGoalScores1);
        mergedScores.lowZiplineClimberScore1 = mode(lowZiplineClimberScores1);
        mergedScores.midZiplineClimberScore1 = mode(midZiplineClimberScores1);
        mergedScores.highZiplineClimberScore1 = mode(highZiplineClimberScores1);
        mergedScores.allClearScore1 = mode(allClearScores1);
        mergedScores.endgameMountainScore1 = mode(endgameMountainScores1);
        mergedScores.autonButtonScore2 = mode(autonButtonScores2);
        mergedScores.autonClimbersScore2 = mode(autonClimbersScores2);
        mergedScores.autonMountainScore2 = mode(autonMountainScores2);
        mergedScores.teleopClimbersScore2 = mode(teleopClimbersScores2);
        mergedScores.highBucketScore2 = mode(highBucketScores2);
        mergedScores.midBucketScore2 = mode(midBucketScores2);
        mergedScores.lowBucketScore2 = mode(lowBucketScores2);
        mergedScores.floorGoalScore2 = mode(floorGoalScores2);
        mergedScores.lowZiplineClimberScore2 = mode(lowZiplineClimberScores2);
        mergedScores.midZiplineClimberScore2 = mode(midZiplineClimberScores2);
        mergedScores.highZiplineClimberScore2 = mode(highZiplineClimberScores2);
        mergedScores.allClearScore2 = mode(allClearScores2);
        mergedScores.endgameMountainScore2 = mode(endgameMountainScores2);

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
        var autonButtonScores = []
        var autonClimbersScores = []
        var autonMountainScores = []
        var teleopClimbersScores = []
        var highBucketScores = []
        var midBucketScores = []
        var lowBucketScores = []
        var floorGoalScores = []
        var lowZiplineClimberScores = []
        var midZiplineClimberScores = []
        var highZiplineClimberScores = []
        var allClearScores = []
        var endgameMountainScores = []

        partialMatches.map(function (partialScore, i) {
            autonButtonScores.push(partialScore.autonButtonScore);
            autonClimbersScores.push(partialScore.autonClimbersScore);
            autonMountainScores.push(partialScore.autonMountainScore);
            teleopClimbersScores.push(partialScore.teleopClimbersScore);
            highBucketScores.push(partialScore.highBucketScore);
            midBucketScores.push(partialScore.midBucketScore);
            lowBucketScores.push(partialScore.lowBucketScore);
            floorGoalScores.push(partialScore.floorGoalScore);
            lowZiplineClimberScores.push(partialScore.lowZiplineClimberScore);
            midZiplineClimberScores.push(partialScore.midZiplineClimberScore);
            highZiplineClimberScores.push(partialScore.highZiplineClimberScore);
            allClearScores.push(partialScore.allClearScore);
            endgameMountainScores.push(partialScore.endgameMountainScore);
        }, this);

        var mergedScores = {
            autonButtonScore: 0,
            autonClimbersScore: 0,
            autonMountainScore: 0,
            teleopClimbersScore: 0,
            highBucketScore: 0,
            midBucketScore: 0,
            lowBucketScore: 0,
            floorGoalScore: 0,
            lowZiplineClimberScore: 0,
            midZiplineClimberScore: 0,
            highZiplineClimberScore: 0,
            allClearScore: 0,
            endgameMountainScore: 0,
        };

        function mode(arr) {
            return arr.sort((a, b) =>
                arr.filter(v => v === a).length
                - arr.filter(v => v === b).length
            ).pop();
        }

        mergedScores.autonButtonScore = mode(autonButtonScores);
        mergedScores.autonClimbersScore = mode(autonClimbersScores);
        mergedScores.autonMountainScore = mode(autonMountainScores);
        mergedScores.teleopClimbersScore = mode(teleopClimbersScores);
        mergedScores.highBucketScore = mode(highBucketScores);
        mergedScores.midBucketScore = mode(midBucketScores);
        mergedScores.lowBucketScore = mode(lowBucketScores);
        mergedScores.floorGoalScore = mode(floorGoalScores);
        mergedScores.lowZiplineClimberScore = mode(lowZiplineClimberScores);
        mergedScores.midZiplineClimberScore = mode(midZiplineClimberScores);
        mergedScores.highZiplineClimberScore = mode(highZiplineClimberScores);
        mergedScores.allClearScore = mode(allClearScores);
        mergedScores.endgameMountainScore = mode(endgameMountainScores);

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
                autonButtonScore: mergedScores.autonButtonScore1,
                autonClimbersScore: mergedScores.autonClimbersScore1,
                autonMountainScore: mergedScores.autonMountainScore1,
                teleopClimbersScore: mergedScores.teleopClimbersScore1,
                highBucketScore: mergedScores.highBucketScore1,
                midBucketScore: mergedScores.midBucketScore1,
                lowBucketScore: mergedScores.lowBucketScore1,
                floorGoalScore: mergedScores.floorGoalScore1,
                lowZiplineClimberScore: mergedScores.lowZiplineClimberScore1,
                midZiplineClimberScore: mergedScores.midZiplineClimberScore1,
                highZiplineClimberScore: mergedScores.highZiplineClimberScore1,
                allClearScore: mergedScores.allClearScore1,
                endgameMountainScore: mergedScores.endgameMountainScore1,
            }
            return mergedPartialMatchScores;
        }
        else {
            const mergedPartialMatchScores = {
                autonButtonScore: mergedScores.autonButtonScore2,
                autonClimbersScore: mergedScores.autonClimbersScore2,
                autonMountainScore: mergedScores.autonMountainScore2,
                teleopClimbersScore: mergedScores.teleopClimbersScore2,
                highBucketScore: mergedScores.highBucketScore2,
                midBucketScore: mergedScores.midBucketScore2,
                lowBucketScore: mergedScores.lowBucketScore2,
                floorGoalScore: mergedScores.floorGoalScore2,
                lowZiplineClimberScore: mergedScores.lowZiplineClimberScore2,
                midZiplineClimberScore: mergedScores.midZiplineClimberScore2,
                highZiplineClimberScore: mergedScores.highZiplineClimberScore2,
                allClearScore: mergedScores.allClearScore2,
                endgameMountainScore: mergedScores.endgameMountainScore2,
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
        // const sub1 = this.getAverageSubPartialMatchForTeam(team1);
        // const sub2 = this.getAverageSubPartialMatchForTeam(team2);

        if (sub1 == -1 || sub2 == -1) {
            return -1
        }
        else {
            const scores = {
                autonButtonScore1: sub1.autonButtonScore,
                autonClimbersScore1: sub1.autonClimbersScore,
                autonMountainScore1: sub1.autonMountainScore,
                teleopClimbersScore1: sub1.teleopClimbersScore,
                highBucketScore1: sub1.highBucketScore,
                midBucketScore1: sub1.midBucketScore,
                lowBucketScore1: sub1.lowBucketScore,
                floorGoalScore1: sub1.floorGoalScore,
                lowZiplineClimberScore1: sub1.lowZiplineClimberScore,
                midZiplineClimberScore1: sub1.midZiplineClimberScore,
                highZiplineClimberScore1: sub1.highZiplineClimberScore,
                allClearScore1: sub1.allClearScore,
                endgameMountainScore1: sub1.endgameMountainScore,
                autonButtonScore2: sub2.autonButtonScore,
                autonClimbersScore2: sub2.autonClimbersScore,
                autonMountainScore2: sub2.autonMountainScore,
                teleopClimbersScore2: sub2.teleopClimbersScore,
                highBucketScore2: sub2.highBucketScore,
                midBucketScore2: sub2.midBucketScore,
                lowBucketScore2: sub2.lowBucketScore,
                floorGoalScore2: sub2.floorGoalScore,
                lowZiplineClimberScore2: sub2.lowZiplineClimberScore,
                midZiplineClimberScore2: sub2.midZiplineClimberScore,
                highZiplineClimberScore2: sub2.highZiplineClimberScore,
                allClearScore2: sub2.allClearScore,
                endgameMountainScore2: sub2.endgameMountainScore
            };
            return scores;

        }
    }
}

export default DataCalculator;