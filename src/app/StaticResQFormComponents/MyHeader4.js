import React from 'react';

const headerStyle4 = {
    fontSize: 14,
    fontWeight: 300,
    margin: 0,
};

var MyHeader4 = React.createClass({
    render: function () {
        return (
            <div>
                <h2 style={headerStyle4}>{this.props.children}</h2> 
                <br/>
            </div>
        );
    }
});

export default MyHeader4;