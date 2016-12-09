import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar'
import * as Colors from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

var MainAppBar = React.createClass({

    leftNavToggle: function () {
        var newNavOpen = this.props.navOpen;
        newNavOpen = !this.props.navOpen;
        this.props.handleNavOpenChange(newNavOpen)
    },

    handleChangeCompetitionSelected: function () {
        this.props.handleOpenSelectCompetition();
    },

    render() {
        return (
            <div style={{ textAlign: 'left' }}>
                <AppBar
                    style={{ position: 'fixed', height: 58 }}
                    zDepth={3}
                    title="FTC Scouter"
                    onLeftIconButtonTouchTap = {this.leftNavToggle}
                    />
            </div>
        );
    }
});

export default MainAppBar;


                    // iconElementRight={
                    //     <IconMenu
                    //         iconButtonElement={
                    //             <IconButton><MoreVertIcon /></IconButton>
                    //         }
                    //         targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    //         anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    //         >
                    //         <MenuItem primaryText="Change competition" onTouchTap={this.handleChangeCompetitionSelected}/>
                    //     </IconMenu>
                    // }