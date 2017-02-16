import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


var AllianceColorInputField = React.createClass({
    handleChange: function (event, index, obj) {
        this.props.updateAllianceColor(obj)
    },
    render() {
        return (
            <div>
                <DropDownMenu value={this.props.currentAllianceColor} onChange={this.handleChange} style={{marginTop:20}}>
                    <MenuItem value="Red" primaryText="Red" />
                    <MenuItem value="Blue" primaryText="Blue" />
                </DropDownMenu>
            </div>
        );
    }
});
export default AllianceColorInputField;