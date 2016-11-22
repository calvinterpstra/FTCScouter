
var FTCResQCalculatorForm = React.createClass({
    getInitialState: function () {
        return {
            scores: {
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
            },
        };
    },
    handleScoreChange: function (score, scoreType) {
        switch (scoreType) {
            case "autonButtonScore1":
                var s = this.state.scores;
                s.autonButtonScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonClimbersScore1":
                var s = this.state.scores;
                s.autonClimbersScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonMountainScore1":
                var s = this.state.scores;
                s.autonMountainScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "teleopClimbersScore1":
                var s = this.state.scores;
                s.teleopClimbersScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "highBucketScore1":
                var s = this.state.scores;
                s.highBucketScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "midBucketScore1":
                var s = this.state.scores;
                s.midBucketScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "lowBucketScore1":
                var s = this.state.scores;
                s.lowBucketScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "floorGoalScore1":
                var s = this.state.scores;
                s.floorGoalScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "lowZiplineClimberScore1":
                var s = this.state.scores;
                s.lowZiplineClimberScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "midZiplineClimberScore1":
                var s = this.state.scores;
                s.midZiplineClimberScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "highZiplineClimberScore1":
                var s = this.state.scores;
                s.highZiplineClimberScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "allClearScore1":
                var s = this.state.scores;
                s.allClearScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "endgameMountainScore1":
                var s = this.state.scores;
                s.endgameMountainScore1 = parseInt(score);
                this.setState({ scores: s });
                break;

            case "autonButtonScore2":
                var s = this.state.scores;
                s.autonButtonScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonClimbersScore2":
                var s = this.state.scores;
                s.autonClimbersScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonMountainScore2":
                var s = this.state.scores;
                s.autonMountainScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "teleopClimbersScore2":
                var s = this.state.scores;
                s.teleopClimbersScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "highBucketScore2":
                var s = this.state.scores;
                s.highBucketScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "midBucketScore2":
                var s = this.state.scores;
                s.midBucketScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "lowBucketScore2":
                var s = this.state.scores;
                s.lowBucketScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "floorGoalScore2":
                var s = this.state.scores;
                s.floorGoalScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "lowZiplineClimberScore2":
                var s = this.state.scores;
                s.lowZiplineClimberScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "midZiplineClimberScore2":
                var s = this.state.scores;
                s.midZiplineClimberScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "highZiplineClimberScore2":
                var s = this.state.scores;
                s.highZiplineClimberScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "allClearScore2":
                var s = this.state.scores;
                s.allClearScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "endgameMountainScore2":
                var s = this.state.scores;
                s.endgameMountainScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            default:
                break;
        }
    },
    render: function () {
        return (
            <div>
                <h1>FTC ResQ Calculator Form</h1>
                <Autonomous scores = {this.state.scores} handleScoreChange = {this.handleScoreChange}/>
                <Teleop scores = {this.state.scores} handleScoreChange = {this.handleScoreChange}/>
                <Endgame scores = {this.state.scores} handleScoreChange = {this.handleScoreChange}/>
                <ScoreLabel scores = {this.state.scores}/>
            </div>
        );
    }
});

class ScoreCalculator {
    constructor(scores) {
        this.scores = scores;
    }
    getTotalAutonButtonScore(){
        var score = this.scores.autonButtonScore1 + this.scores.autonButtonScore2
        return score;
    }
    getZiplineClimbersScore1(){
        var ziplineClimbersScore = this.scores.lowZiplineClimberScore1 + this.scores.midZiplineClimberScore1
         + this.scores.highZiplineClimberScore1;
        return ziplineClimbersScore;
    }
    getZiplineClimbersScore2(){
        var ziplineClimbersScore = this.scores.lowZiplineClimberScore2 + this.scores.midZiplineClimberScore2
         + this.scores.highZiplineClimberScore2;
        return ziplineClimbersScore;
    }
    getTotalZiplineClimbersScore(){
        var high = 0;
        var mid = 0;
        var low = 0;
        if(this.scores.highZiplineClimberScore1 == 20 || this.scores.highZiplineClimberScore2 == 20){
            high = 20
        }
        if(this.scores.midZiplineClimberScore1 == 20 || this.scores.midZiplineClimberScore2 == 20){
            mid = 20
        }
        if(this.scores.lowZiplineClimberScore1 == 20 || this.scores.lowZiplineClimberScore2 == 20){
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
    getClimbersScore1() {
        var climbersScore = 0;
        switch(this.scores.autonClimbersScore1){
            case 0:
                climbersScore = this.scores.teleopClimbersScore1
                break;
            case 20:
                if(this.scores.teleopClimbersScore1 == 0){
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
        switch(this.scores.autonClimbersScore2){
            case 0:
                climbersScore = this.scores.teleopClimbersScore2
                break;
            case 20:
                if(this.scores.teleopClimbersScore2 == 0){
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
    getTotalAutonMountainScore(){
        var score = this.scores.autonMountainScore1 + this.scores.autonMountainScore2;
        return score;
    }
    getTotalAllClearScore(){
        var score = this.scores.allClearScore1 + this.scores.allClearScore2;
        return score;
    }
    getTotalEndgameMountainScore(){
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
    getTotalScore(){
        var totalScore = this.getTotalAutonButtonScore() + this.getTotalClimbersScore() + this.getTotalAutonMountainScore() + this.getTotalDebrisScore()
         + this.getTotalZiplineClimbersScore() + this.getTotalAllClearScore() + this.getTotalEndgameMountainScore();
        return totalScore;
    }
}

var ScoreLabel = React.createClass({
    getTotalScore: function (scores) {
        var scoreCalculator = new ScoreCalculator(scores);
        return scoreCalculator.getTotalScore();
    },
    getPartialScore1: function (scores) {
        var scoreCalculator = new ScoreCalculator(scores);
        return scoreCalculator.getPartialScore1();
    },
    getPartialScore2: function (scores) {
        var scoreCalculator = new ScoreCalculator(scores);
        return scoreCalculator.getPartialScore2();
    },
    render: function () {
        return (
            <div>
                <MyHeader> Scores </MyHeader>
                <h3> Total: { this.getTotalScore(this.props.scores) }</h3>
                <h3> Partial Target 1: { this.getPartialScore1(this.props.scores) }</h3>
                <h3> Partial Target 2: { this.getPartialScore2(this.props.scores) }</h3>
            </div>
        );
    }
});

var MyHeader = React.createClass({
    render: function () {
        return (
            <h2>{this.props.children}</h2>
        );
    }
});

var Autonomous = React.createClass({
    render: function () {
        return (
            <div>
                <MyHeader> Autonomous </MyHeader>
                <ScoreAutonButton scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
                <ScoreAutonClimbers scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
                <ScoreAutonMountain scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
            </div>
        );
    }
});

var ScoreAutonButton = React.createClass({
    handleChange1: function (event) {
        var isPressed = (event.target.checked);
        var score = 0;
        if (isPressed) {
            score = 20;
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "autonButtonScore1");
    },
    handleChange2: function (event) {
        var isPressed = (event.target.checked);
        var score = 0;
        if (isPressed) {
            score = 20;
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "autonButtonScore2");
    },
    render: function () {
        return (
            <div>
                <h3>Button</h3>
                <form>
                    <h4> Target 1: </h4>
                    <input type="checkbox" name="button1" value="pressed" onChange={this.handleChange1}
                    checked={this.props.scores.autonButtonScore1 == 20}/> Successful Button Press <br/>
                </form>
                <form>
                    <h4> Target 2: </h4>
                    <input type="checkbox" name="button2" value="pressed" onChange={this.handleChange2}
                    checked={this.props.scores.autonButtonScore2 == 20}/> Successful Button Press <br/>
                </form>
            </div>
        );
    }
});

var ScoreAutonClimbers = React.createClass({
    handleChange1: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "autonClimbersScore1");
    },
    handleChange2: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "autonClimbersScore2");
    },
    render: function () {
        return (
            <div>
                <h3>Climbers Delivered</h3>
                <form>
                    <h4> Target 1: </h4>
                    <input type="radio" name="autonClimbersScore1" value={0} onChange={this.handleChange1}
                        checked={this.props.scores.autonClimbersScore1 == 0}/> None <br/>
                    <input type="radio" name="autonClimbersScore1" value={20} onChange={this.handleChange1}
                        checked={this.props.scores.autonClimbersScore1 == 20}/> One <br/>
                    <input type="radio" name="autonClimbersScore1" value={40} onChange={this.handleChange1}
                        checked={this.props.scores.autonClimbersScore1 == 40}/> Both <br/>
                </form>
                <form>
                    <h4> Target 2: </h4>
                    <input type="radio" name="autonClimbersScore2" value={0} onChange={this.handleChange2}
                        checked={this.props.scores.autonClimbersScore2 == 0}/> None <br/>
                    <input type="radio" name="autonClimbersScore2" value={20} onChange={this.handleChange2}
                        checked={this.props.scores.autonClimbersScore2 == 20}/> One <br/>
                    <input type="radio" name="autonClimbersScore2" value={40} onChange={this.handleChange2}
                        checked={this.props.scores.autonClimbersScore2 == 40}/> Both <br/>
                </form>
            </div>
        );
    }
});

var ScoreAutonMountain = React.createClass({
    handleChange1: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "autonMountainScore1");
    },
    handleChange2: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "autonMountainScore2");
    },
    render: function () {
        return (
            <div>
                <h3>Autonomous Mountain Position</h3>
                <form>
                    <h4> Target 1: </h4>
                    <input type="radio" name="autonMountainScore1" value={0} onChange={this.handleChange1}
                        checked={this.props.scores.autonMountainScore1 == 0}/> None <br/>
                    <input type="radio" name="autonMountainScore1" value={5} onChange={this.handleChange1}
                        checked={this.props.scores.autonMountainScore1 == 5}/> Partial or Parking Zone <br/>
                    <input type="radio" name="autonMountainScore1" value={10} onChange={this.handleChange1}
                        checked={this.props.scores.autonMountainScore1 == 10}/> Low Zone <br/>
                    <input type="radio" name="autonMountainScore1" value={20} onChange={this.handleChange1}
                        checked={this.props.scores.autonMountainScore1 == 20}/> MidZone <br/>
                    <input type="radio" name="autonMountainScore1" value={40} onChange={this.handleChange1}
                        checked={this.props.scores.autonMountainScore1 == 40}/> High Zone <br/>
                </form>
                <form>
                    <h4> Target 2: </h4>
                    <input type="radio" name="autonMountainScore2" value={0} onChange={this.handleChange2}
                        checked={this.props.scores.autonMountainScore2 == 0}/> None <br/>
                    <input type="radio" name="autonMountainScore2" value={5} onChange={this.handleChange2}
                        checked={this.props.scores.autonMountainScore2 == 5}/> Partial or Parking Zone <br/>
                    <input type="radio" name="autonMountainScore2" value={10} onChange={this.handleChange2}
                        checked={this.props.scores.autonMountainScore2 == 10}/> Low Zone <br/>
                    <input type="radio" name="autonMountainScore2" value={20} onChange={this.handleChange2}
                        checked={this.props.scores.autonMountainScore2 == 20}/> MidZone <br/>
                    <input type="radio" name="autonMountainScore2" value={40} onChange={this.handleChange}
                        checked={this.props.scores.autonMountainScore2 == 40}/> High Zone <br/>
                </form>
            </div>
        );
    }
});

var Teleop = React.createClass({
    render: function () {
        return (
            <div>
                <MyHeader> Teleop </MyHeader>
                <ScoreTeleopClimbers scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
                <Debris scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>    
                <ScoreZiplineClimbers scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
            </div>
        );
    }
});

var ScoreTeleopClimbers = React.createClass({
    handleChange1: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "teleopClimbersScore1");
    },
    handleChange2: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "teleopClimbersScore2");
    },
    render: function () {
        return (
            <div>
                <h3>Climbers Delivered</h3>
                <form>
                    <h4> Target 1: </h4>
                    <input type="radio" name="teleopClimbersScore1" value={0} onChange={this.handleChange1}
                        checked={this.props.scores.teleopClimbersScore1 == 0}/> None <br/>
                    <input type="radio" name="teleopClimbersScore1" value={10} onChange={this.handleChange1}
                        checked={this.props.scores.teleopClimbersScore1 == 10}/> One <br/>
                    <input type="radio" name="teleopClimbersScore1" value={20} onChange={this.handleChange1}
                        checked={this.props.scores.teleopClimbersScore1 == 20}/> Both <br/>
                </form>
                <form>
                    <h4> Target 2: </h4>
                    <input type="radio" name="teleopClimbersScore2" value={0} onChange={this.handleChange2}
                        checked={this.props.scores.teleopClimbersScore2 == 0}/> None <br/>
                    <input type="radio" name="teleopClimbersScore2" value={10} onChange={this.handleChange2}
                        checked={this.props.scores.teleopClimbersScore2 == 10}/> One <br/>
                    <input type="radio" name="teleopClimbersScore2" value={20} onChange={this.handleChange2}
                        checked={this.props.scores.teleopClimbersScore2 == 20}/> Both <br/>
                </form>
            </div>
            
        );
    }
});

var Debris = React.createClass({
    render: function () {
        return (
            <div>
                <h3>Debris Scored</h3>
                <ScoreHighBucket scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
                <ScoreMidBucket scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
                <ScoreLowBucket scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
                <ScoreFloorGoal scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
            </div>
        );
    }
});

var ScoreHighBucket = React.createClass({
    handleChange1: function (event) {
        var score = (event.target.value) * 15;
        this.props.handleScoreChange(score, "highBucketScore1");
    },
    handleChange2: function (event) {
        var score = (event.target.value) * 15;
        this.props.handleScoreChange(score, "highBucketScore2");
    },
    render: function () {
        return (
            <div>
                <form>
                    <h4> High Bucket Target 1: </h4>
                    <input type="number" name="high1" min="0" max="16" value={(this.props.scores.highBucketScore1)/15} onChange={this.handleChange1}/><br/>
                </form>
                <form>
                    <h4> High Bucket Target 2: </h4>
                    <input type="number" name="high2" min="0" max="16" value={(this.props.scores.highBucketScore2)/15} onChange={this.handleChange2}/><br/>
                </form>
            </div>
        );
    }
});

var ScoreMidBucket = React.createClass({
    handleChange1: function (event) {
        var score = (event.target.value) * 10;
        this.props.handleScoreChange(score, "midBucketScore1");
    },
    handleChange2: function (event) {
        var score = (event.target.value) * 10;
        this.props.handleScoreChange(score, "midBucketScore2");
    },
    render: function () {
        return (
            <div>
                <form>
                    <h4> Mid Bucket Target 1: </h4>
                    <input type="number" name="mid1" min="0" max="16" value={(this.props.scores.midBucketScore1)/10} onChange={this.handleChange1}/><br/>
                </form>
                <form>
                    <h4> Mid Bucket Target 2: </h4>
                    <input type="number" name="mid2" min="0" max="16" value={(this.props.scores.midBucketScore2)/10} onChange={this.handleChange2}/><br/>
                </form>
            </div>
        );
    }
});

var ScoreLowBucket = React.createClass({
    handleChange1: function (event) {
        var score = (event.target.value) * 5;
        this.props.handleScoreChange(score, "lowBucketScore1");
    },
    handleChange2: function (event) {
        var score = (event.target.value) * 5;
        this.props.handleScoreChange(score, "lowBucketScore2");
    },
    render: function () {
        return (
            <div>
                <form>
                    <h4> Low Bucket Target 1: </h4>
                    <input type="number" name="low1" min="0" max="16" value={(this.props.scores.lowBucketScore1)/5} onChange={this.handleChange1}/>
                </form>
                <form>
                    <h4> Low Bucket Target 2: </h4>
                    <input type="number" name="low2" min="0" max="16" value={(this.props.scores.lowBucketScore2)/5} onChange={this.handleChange2}/>
                </form>
            </div>
        );
    }
});

var ScoreFloorGoal = React.createClass({
    handleChange1: function (event) {
        var score = (event.target.value) * 1;
        this.props.handleScoreChange(score, "floorGoalScore1");
    },
    handleChange2: function (event) {
        var score = (event.target.value) * 1;
        this.props.handleScoreChange(score, "floorGoalScore2");
    },
    render: function () {
        return (
            <div>
                <form>
                    <h4> Floor Goal Target 1: </h4>
                    <input type="number" name="floor1" min="0" max="40" value={this.props.scores.floorGoalScore1} onChange={this.handleChange1}/>
                </form>
                <form>
                    <h4> Floor Goal Target 2: </h4>
                    <input type="number" name="floor2" min="0" max="40" value={this.props.scores.floorGoalScore2} onChange={this.handleChange2}/>
                </form>
            </div>
        );
    }
});

var ScoreZiplineClimbers = React.createClass({
    handleChange1: function (event) {
        var isPressed = (event.target.checked);
        switch(event.target.name){
            case "low1":
                if(isPressed){
                    this.props.handleScoreChange(20, "lowZiplineClimberScore1");
                }
                else {
                    this.props.handleScoreChange(0, "lowZiplineClimberScore1");
                }
                break;
            case "mid1":
                if(isPressed){
                    this.props.handleScoreChange(20, "midZiplineClimberScore1");
                }
                else {
                    this.props.handleScoreChange(0, "midZiplineClimberScore1");
                }
                break;
            case "high1":
                if(isPressed){
                    this.props.handleScoreChange(20, "highZiplineClimberScore1");
                }
                else {
                    this.props.handleScoreChange(0, "highZiplineClimberScore1");
                }
                break;
            default:
                break;
        }
    },
    handleChange2: function (event) {
        var isPressed = (event.target.checked);
        switch(event.target.name){
            case "low2":
                if(isPressed){
                    this.props.handleScoreChange(20, "lowZiplineClimberScore2");
                }
                else {
                    this.props.handleScoreChange(0, "lowZiplineClimberScore2");
                }
                break;
            case "mid2":
                if(isPressed){
                    this.props.handleScoreChange(20, "midZiplineClimberScore2");
                }
                else {
                    this.props.handleScoreChange(0, "midZiplineClimberScore2");
                }
                break;
            case "high2":
                if(isPressed){
                    this.props.handleScoreChange(20, "highZiplineClimberScore2");
                }
                else {
                    this.props.handleScoreChange(0, "highZiplineClimberScore2");
                }
                break;
            default:
                break;
        }
    },
    render: function () {
        return (
            <div>
                <h3>Zipline Climbers Triggered Target 1:</h3>
                <form>
                    <input type="checkbox" name="low1" value="pressed" onChange={this.handleChange1}
                    checked={this.props.scores.lowZiplineClimberScore1 == 20}/> Low Zone Trigger <br/>
                    <input type="checkbox" name="mid1" value="pressed" onChange={this.handleChange1}
                    checked={this.props.scores.midZiplineClimberScore1 == 20}/> Mid Zone Trigger <br/>
                    <input type="checkbox" name="high1" value="pressed" onChange={this.handleChange1}
                    checked={this.props.scores.highZiplineClimberScore1 == 20}/> High Zone Trigger
                </form>
                <h3>Zipline Climbers Triggered Target 2:</h3>
                <form>
                    <input type="checkbox" name="low2" value="pressed" onChange={this.handleChange2}
                    checked={this.props.scores.lowZiplineClimberScore2 == 20}/> Low Zone Trigger <br/>
                    <input type="checkbox" name="mid2" value="pressed" onChange={this.handleChange2}
                    checked={this.props.scores.midZiplineClimberScore2 == 20}/> Mid Zone Trigger <br/>
                    <input type="checkbox" name="high2" value="pressed" onChange={this.handleChange2}
                    checked={this.props.scores.highZiplineClimberScore2 == 20}/> High Zone Trigger
                </form>
            </div>
        );
    }
});


var Endgame = React.createClass({
    render: function () {
        return (
            <div>
                <MyHeader> Endgame </MyHeader>
                <ScoreEngameMountain scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
                <ScoreAllClearSignal scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
            </div>
        );
    }
});

var ScoreAllClearSignal = React.createClass({
    handleChange1: function (event) {
        var isSignaled1 = (event.target.checked);
        var score = 0;
        if (isSignaled1) {
            score = 20;
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "allClearScore1");
    },
    handleChange2: function (event) {
        var isSignaled2 = (event.target.checked);
        var score = 0;
        if (isSignaled2) {
            score = 20;
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "allClearScore2");
    },
    render: function () {
        return (
            <div>
                <h3>All Clear Signal Target 1</h3>
                <form>
                    <input type="checkbox" name="isSignaled1" value="signaled" onChange={this.handleChange1}
                    checked={this.props.scores.allClearScore1 == 20}/> All Clear Signaled
                </form>
                <h3>All Clear Signal Target 2</h3>
                <form>
                    <input type="checkbox" name="isSignaled2" value="signaled" onChange={this.handleChange2}
                    checked={this.props.scores.allClearScore2 == 20}/> All Clear Signaled
                </form>
            </div>
        );
    }
});

var ScoreEngameMountain = React.createClass({
    handleChange1: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "endgameMountainScore1");
    },
    handleChange2: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "endgameMountainScore2");
    },
    render: function () {
        return (
            <div>
                <h3>Endgame Mountain Position</h3>
                <form>
                    <input type="radio" name="endgameMountainScore1" value={0} onChange={this.handleChange1}
                        checked={this.props.scores.endgameMountainScore1 == 0}/> None <br/>
                    <input type="radio" name="endgameMountainScore1" value={5} onChange={this.handleChange1}
                        checked={this.props.scores.endgameMountainScore1 == 5}/> Partial <br/>
                    <input type="radio" name="endgameMountainScore1" value={10} onChange={this.handleChange1}
                        checked={this.props.scores.endgameMountainScore1 == 10}/> Low Zone <br/>
                    <input type="radio" name="endgameMountainScore1" value={20} onChange={this.handleChange1}
                        checked={this.props.scores.endgameMountainScore1 == 20}/> MidZone <br/>
                    <input type="radio" name="endgameMountainScore1" value={40} onChange={this.handleChange1}
                        checked={this.props.scores.endgameMountainScore1 == 40}/> High Zone <br/>
                    <input type="radio" name="endgameMountainScore1" value={80} onChange={this.handleChange1}
                        checked={this.props.scores.endgameMountainScore1 == 80}/> Hanging
                </form>
                <h3>Endgame Mountain Position</h3>
                <form>
                    <input type="radio" name="endgameMountainScore2" value={0} onChange={this.handleChange2}
                        checked={this.props.scores.endgameMountainScore2 == 0}/> None <br/>
                    <input type="radio" name="endgameMountainScore2" value={5} onChange={this.handleChange2}
                        checked={this.props.scores.endgameMountainScore2 == 5}/> Partial <br/>
                    <input type="radio" name="endgameMountainScore2" value={10} onChange={this.handleChange2}
                        checked={this.props.scores.endgameMountainScore2 == 10}/> Low Zone <br/>
                    <input type="radio" name="endgameMountainScore2" value={20} onChange={this.handleChange2}
                        checked={this.props.scores.endgameMountainScore2 == 20}/> MidZone <br/>
                    <input type="radio" name="endgameMountainScore2" value={40} onChange={this.handleChange2}
                        checked={this.props.scores.endgameMountainScore2 == 40}/> High Zone <br/>
                    <input type="radio" name="endgameMountainScore2" value={80} onChange={this.handleChange2}
                        checked={this.props.scores.endgameMountainScore2 == 80}/> Hanging
                </form>
            </div>
        );
    }
});