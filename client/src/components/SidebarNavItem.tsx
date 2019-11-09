import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {ThemeContext} from '../contexts/ThemeContext'

// MUI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

interface ISidebarNavItemProps {
    name: string,
    routerLink: string,
    imageUrl: string,
    items?: string[]
}
interface IThemeContext {
    theme: string,
    onThemeChange: (arg0: string) => void
}

export default function SidebarNavItem (props: ISidebarNavItemProps): JSX.Element {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();

  const value: IThemeContext = useContext(ThemeContext);

  const handleClick = (imageUrl:string) => {
    // setAnchorEl(event.currentTarget);
    value.onThemeChange(imageUrl);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let content;
  if (props.items) {
    content =
        <Grid item>
          <Button aria-controls={props.name} aria-haspopup="true" onClick={()=> handleClick(props.imageUrl)}>
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
          <Button component={Link} to={props.routerLink} onClick={()=> handleClick(props.imageUrl)}>
            {props.name}
          </Button>
        </Grid>

  }
  return content;
};
