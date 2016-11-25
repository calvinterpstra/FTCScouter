
class ScoreCalculator {
    constructor(scores) {
        this.scores = scores;
    }
    getAutonParkingScore1() {
        var s = this.scores.autonParkingScore1;
        return s;
    }
    getAutonParkingScore2() {
        var s = this.scores.autonParkingScore2;
        return s;
    }
    getTotalAutonParkingScore() {
        var s = this.getAutonParkingScore1() + this.getAutonParkingScore2();
        return s;
    }
    getAutonCapBallScore1() {
        var s = this.scores.autonCapBallScore1;
        return s;
    }
    getAutonCapBallScore2() {
        var s = this.scores.autonCapBallScore2;
        return s;
    }
    getTotalAutonCapBallScore() {
        if(this.getAutonCapBallScore1() > 0){
            return this.getAutonCapBallScore1()
        }
        else if(this.getAutonCapBallScore2() > 0){
            return this.getAutonCapBallScore2()
        }
        else {
            return 0;
        }
    }
    getAutonButtonsScore1() {
        var s = this.scores.autonButtonsScore1;
        return s;
    }
    getAutonButtonsScore2() {
        var s = this.scores.autonButtonsScore2;
        return s;
    }
    getTotalAutonButtonsScore() {
        var s = 0;
        switch (this.getAutonButtonsScore1()) {
            case 0:
                s = this.getAutonButtonsScore2();
                break;
            case 30:
                if (this.getAutonButtonsScore2() > 0) {
                    s = 60;
                }
                else {
                    s = 30;
                }
                break;
            case 60:
                s = 60;
                break;
            default:
                break;
        }
        return s;
    }
    getAutonCornerVortexScore1() {
        var s = this.scores.autonCornerVortexScore1;
        return s;
    }
    getAutonCornerVortexScore2() {
        var s = this.scores.autonCornerVortexScore2;
        return s;
    }
    getTotalAutonCornerVortexScore() {
        var s = this.getAutonCornerVortexScore1() + this.getAutonCornerVortexScore2();
        return s;
    }
    getAutonCenterVortexScore1() {
        var s = this.scores.autonCenterVortexScore1;
        return s;
    }
    getAutonCenterVortexScore2() {
        var s = this.scores.autonCenterVortexScore2;
        return s;
    }
    getTotalAutonCenterVortexScore() {
        var s = this.getAutonCenterVortexScore2() + this.getAutonCenterVortexScore1();
        return s;
    }
    getTeleopCenterVortexScore1() {
        var s = this.scores.centerVortexScore1;
        return s;
    }
    getTeleopCenterVortexScore2() {
        var s = this.scores.centerVortexScore2;
        return s;
    }
    getTotalTeleopCenterVortexScore() {
        var s = this.getTeleopCenterVortexScore1() + this.getTeleopCenterVortexScore2();
        return s;
    }
    getTeleopCornerVortexScore1() {
        var s = this.scores.cornerVortexScore1;
        return s;
    }
    getTeleopCornerVortexScore2() {
        var s = this.scores.cornerVortexScore2;
        return s;
    }
    getTotalTeleopCornerVortexScore() {
        var s = this.getTeleopCornerVortexScore1() + this.getTeleopCornerVortexScore2();
        return s;
    }
    getCapBallScore1() {
        var s = this.scores.capBallScore1;
        return s;
    }
    getCapBallScore2() {
        var s = this.scores.capBallScore2;
        return s;
    }
    getTotalCapBallScore() {
        switch (this.getCapBallScore1()) {
            case 0:
                if (this.getCapBallScore2() > 0) {
                    return this.getCapBallScore2();
                }
                else {
                    return 0;
                }
            case 10:
                if (this.getCapBallScore2() > 10) {
                    return this.getCapBallScore2();
                }
                else {
                    return 10;
                }
            case 20:
                if (this.getCapBallScore2() > 20) {
                    return this.getCapBallScore2();
                }
                else {
                    return 20;
                }
            case 40:
                return 40;
            default:
                return 0;
        }
    }
    getTeleopButtonsScore1() {
        var s = this.scores.teleopButtonAllianceNearScore1 + this.scores.teleopButtonAllianceFarScore1 + this.scores.teleopButtonOpponentNearScore1
         + this.scores.teleopButtonOpponentFarScore1;
        return s;
    }
    getTeleopButtonsScore2() {
        var s = this.scores.teleopButtonAllianceNearScore2 + this.scores.teleopButtonAllianceFarScore2 + this.scores.teleopButtonOpponentNearScore2
         + this.scores.teleopButtonOpponentFarScore2;
        return s;
    }
    getTotalTeleopButtonsScore() {
        var a1 = 0;
        var a2 = 0;
        var o1 = 0;
        var o2 = 0;
        if (this.scores.teleopButtonAllianceNearScore1 > this.scores.teleopButtonAllianceNearScore2){
            a1 = this.scores.teleopButtonAllianceNearScore1;
        }
        else {
            a1 = this.scores.teleopButtonAllianceNearScore2;
        }
        if (this.scores.teleopButtonAllianceFarScore1 > this.scores.teleopButtonAllianceFarScore2){
            a2 = this.scores.teleopButtonAllianceFarScore1;
        }
        else {
            a2 = this.scores.teleopButtonAllianceFarScore2;
        }
        if (this.scores.teleopButtonOpponentNearScore1 > this.scores.teleopButtonOpponentNearScore2){
            o1 = this.scores.teleopButtonOpponentNearScore1;
        }
        else {
            o1 = this.scores.teleopButtonOpponentNearScore2;
        }
        if (this.scores.teleopButtonOpponentFarScore1 > this.scores.teleopButtonOpponentFarScore2){
            o2 = this.scores.teleopButtonOpponentFarScore1;
        }
        else {
            o2 = this.scores.teleopButtonOpponentFarScore2;
        }
        return a1 + a2 + o1 + o2;
    }
    getPartialScore1() {
        var totalScore = this.getTeleopCenterVortexScore1() + this.getAutonCenterVortexScore1() + this.getTeleopCornerVortexScore1()
            + this.getAutonCornerVortexScore1() + this.getAutonButtonsScore1() + this.getAutonParkingScore1() + this.getAutonCapBallScore1()
            + this.getTeleopButtonsScore1() + this.getCapBallScore1();
        return totalScore;
    }
    getPartialScore2() {
        var totalScore = this.getTeleopCenterVortexScore2() + this.getAutonCenterVortexScore2() + this.getTeleopCornerVortexScore2()
            + this.getAutonCornerVortexScore2() + this.getAutonButtonsScore2() + this.getAutonParkingScore2() + this.getAutonCapBallScore2()
            + this.getTeleopButtonsScore2() + this.getCapBallScore2();
        return totalScore;
    }
    getTotalScore() {
        var totalScore = this.getTotalTeleopCenterVortexScore() + this.getTotalAutonCenterVortexScore() + this.getTotalTeleopCornerVortexScore()
            + this.getTotalAutonCornerVortexScore() + this.getTotalAutonButtonsScore()  + this.getTotalAutonParkingScore() + this.getTotalAutonCapBallScore()
            + this.getTotalTeleopButtonsScore() + this.getTotalCapBallScore();
        return totalScore;
    }
}

export default ScoreCalculator;