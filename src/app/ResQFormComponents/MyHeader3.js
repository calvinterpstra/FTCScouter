import React from 'react';

const headerStyle3 = {
    fontSize: 16,
    fontWeight: 300,
    margin: 0,
};

var MyHeader3 = React.createClass({
    render: function () {
        return (
            <div>
                <h2 style={headerStyle3}>{this.props.children}</h2> 
            </div>
        );
    }
});

export default MyHeader3;