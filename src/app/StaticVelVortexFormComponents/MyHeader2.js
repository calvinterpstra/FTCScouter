import React from 'react';

const headerStyle2 = {
    fontSize: 18,
    fontWeight: 400,
    margin: 0,
};

var MyHeader2 = React.createClass({
    render: function () {
        return (
            <div>
                <h2 style={headerStyle2}>{this.props.children}</h2> 
                <br/>
            </div>
        );
    }
});

export default MyHeader2;