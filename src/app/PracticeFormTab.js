import React from 'react';
import PracticeResQForm from './PracticeResQForm'
import PracticeVelVortexForm from './PracticeVelVortexForm'

const headerStyle = {
    fontSize: 24,
    fontWeight: 400,
    paddingTop: 90,
    margin: 0,
};
const bodyStyle = {
    paddingLeft: 20,
    paddingRight: 20,
    margin: 0,
};

var PracticeFormTab = React.createClass({

    render() {
        return (
            <div style={bodyStyle}>
                <h2 style={headerStyle}> Practice Form </h2> <br/>
                <PracticeVelVortexForm/>
            </div>
        );
    }
});

export default PracticeFormTab;