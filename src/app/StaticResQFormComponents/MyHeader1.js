import React from 'react';

const headerStyle1 = {
    fontSize: 24,
    fontWeight: 400,
    margin: 0,
};

var MyHeader1 = React.createClass({
    render: function () {
        return (
            <div>
                <h2 style={headerStyle1}>{this.props.children}</h2> 
                <br/>
            </div>
        );
    }
});

export default MyHeader1;