import React from 'react'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Menu,styled} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const MenuOption = styled(MenuItem)`
    font-size : 14px;
    padding : 15px 60px 5px 24px;
    color : #4A4A4A;
`

const HeaderMenu = ({setOpenDrawer}) => {
    const [open, setopen] = React.useState(null);
    const handleClick = (event) => {
        setopen(event.currentTarget);
    };
    const handleClose = (e) => {
        setopen(null);
    };
    return (
        <>
            <MoreVertIcon onClick={handleClick}/>
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal:'center'
                }}
                transformOrigin={{
                    vertical : 'top',
                    horizontal : 'right'
                }}
            >
                <MenuOption onClick={()=>{handleClose(); setOpenDrawer(true);}}>Profile</MenuOption>
            </Menu>
        </>
    )
}

export default HeaderMenu