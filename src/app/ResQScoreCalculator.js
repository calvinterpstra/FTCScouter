
class ScoreCalculator {
    constructor(scores) {
        this.scores = scores;
    }
    getTotalAutonButtonScore() {
        var score = this.scores.autonButtonScore1 + this.scores.autonButtonScore2
        return score;
    }
    getZiplineClimbersScore1() {
        var ziplineClimbersScore = this.scores.lowZiplineClimberScore1 + this.scores.midZiplineClimberScore1
            + this.scores.highZiplineClimberScore1;
        return ziplineClimbersScore;
    }
    getZiplineClimbersScore2() {
        var ziplineClimbersScore = this.scores.lowZiplineClimberScore2 + this.scores.midZiplineClimberScore2
            + this.scores.highZiplineClimberScore2;
        return ziplineClimbersScore;
    }
    getTotalZiplineClimbersScore() {
        var high = 0;
        var mid = 0;
        var low = 0;
        if (this.scores.highZiplineClimberScore1 == 20 || this.scores.highZiplineClimberScore2 == 20) {
            high = 20
        }
        if (this.scores.midZiplineClimberScore1 == 20 || this.scores.midZiplineClimberScore2 == 20) {
            mid = 20
        }
        if (this.scores.lowZiplineClimberScore1 == 20 || this.scores.lowZiplineClimberScore2 == 20) {
            low = 20
        }
        return high + mid + low;
    }
    getDebrisScore1() {
        var debrisScore = this.scores.highBucketScore1 + this.scores.midBucketScore1 + this.scores.lowBucketScore1
            + this.scores.floorGoalScore1;
        return debrisScore;
    }
    getDebrisScore2() {
        var debrisScore = this.scores.highBucketScore2 + this.scores.midBucketScore2 + this.scores.lowBucketScore2
            + this.scores.floorGoalScore2;
        return debrisScore;
    }
    getTotalDebrisScore() {
        var debrisScore = this.getDebrisScore1() + this.getDebrisScore2();
        return debrisScore;
    }
    getTotalHighBucketScore() {
        if ((this.scores.highBucketScore1 + this.scores.highBucketScore2) >= 240) {
            return 240;
        }
        if ((this.scores.highBucketScore1 + this.scores.highBucketScore2) < 240) {
            return this.scores.highBucketScore1 + this.scores.highBucketScore2;
        }
        return 0;
    }
    getClimbersScore1() {
        var climbersScore = 0;
        switch (this.scores.autonClimbersScore1) {
            case 0:
                climbersScore = this.scores.teleopClimbersScore1
                break;
            case 20:
                if (this.scores.teleopClimbersScore1 == 0) {
                    climbersScore = 20;
                }
                else {
                    climbersScore = 30;
                }
                break;
            case 40:
                climbersScore = 40;
                break;
            default:
                break;
        }
        return climbersScore;
    }
    getClimbersScore2() {
        var climbersScore = 0;
        switch (this.scores.autonClimbersScore2) {
            case 0:
                climbersScore = this.scores.teleopClimbersScore2
                break;
            case 20:
                if (this.scores.teleopClimbersScore2 == 0) {
                    climbersScore = 20;
                }
                else {
                    climbersScore = 30;
                }
                break;
            case 40:
                climbersScore = 40;
                break;
            default:
                break;
        }
        return climbersScore;
    }
    getTotalClimbersScore() {
        var score = this.getClimbersScore1() + this.getClimbersScore2();
        return score;
    }
    getTotalAutonMountainScore() {
        var score = this.scores.autonMountainScore1 + this.scores.autonMountainScore2;
        return score;
    }
    getTotalAllClearScore() {
        var score = this.scores.allClearScore1 + this.scores.allClearScore2;
        return score;
    }
    getTotalEndgameMountainScore() {
        var score = this.scores.endgameMountainScore1 + this.scores.endgameMountainScore2;
        return score;
    }
    getPartialScore1() {
        var totalScore = this.scores.autonButtonScore1 + this.getClimbersScore1() + this.scores.autonMountainScore1 + this.getDebrisScore1()
            + this.getZiplineClimbersScore1() + this.scores.allClearScore1 + this.scores.endgameMountainScore1;
        return totalScore;
    }
    getPartialScore2() {
        var totalScore = this.scores.autonButtonScore2 + this.getClimbersScore2() + this.scores.autonMountainScore2 + this.getDebrisScore2()
            + this.getZiplineClimbersScore2() + this.scores.allClearScore2 + this.scores.endgameMountainScore2;
        return totalScore;
    }
    getTotalScore() {
        var totalScore = this.getTotalAutonButtonScore() + this.getTotalClimbersScore() + this.getTotalAutonMountainScore() + this.getTotalDebrisScore()
            + this.getTotalZiplineClimbersScore() + this.getTotalAllClearScore() + this.getTotalEndgameMountainScore();
        return totalScore;
    }
}

export default ScoreCalculator;