import React from 'react';
import { Link } from 'react-router'

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
    render() {
        return (
            <div style={bodyStyle}>
                <h2 style={headerStyle1}> Taking Scouting to the</h2>
                <h2 style={headerStyle2}> Next Level </h2><br/>
                <p>
                    Collaborate with the FTC community to collect detailed scouting data. <br/><br/>

                    View and Scout matches under the Matches tab. <br/><br/>

                    Change your competition under the Competitions tab to see data on that competition. <br/><br/>

                    View statistics on the whole season and look at specific team's data under the Statistics tab. <br/><br/>

                    Create an account to add your own scouting data. <br/><br/>

                    This account is used only to pair a user name to a scouting entry so that we can get more accurate data.
                    Your email will be used as your username. <br/><br/>

                    The more you scout, the more accurate and detailed the data can get, allowing match results moments after a match ends
                    or even a live match! <br/><br/>

                    Share this website with other FTC community members and revolutionize scouting. <br/><br/>
                </p>
            </div>
        );
    }
});

export default WelcomeTab;