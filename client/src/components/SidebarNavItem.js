import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// MUI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const SidebarNavItem = props => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let content;
  if (props.items) {
    content =
      <Grid item>
        <Button aria-controls={props.name} aria-haspopup="true" onClick={handleClick} >
          {props.name}
        </Button>
        <Menu
          id={props.name}
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {props.items.map((item) =>
            <MenuItem key={item}
              onClick={handleClose}
            > {item}
            </MenuItem>
          )}
        </Menu>
      </Grid>

  } else {
    content = 
    <Grid item>
    <Button component={Link} to={props.routerLink}>
      {props.name}
    </Button>
  </Grid>

  }

  return content;
};

export default SidebarNavItem;