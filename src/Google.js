import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import HistoryIcon from '@material-ui/icons/History';
import StarIcon from '@material-ui/icons/StarRate';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMore from '@material-ui/icons/ExpandMore';
// logo
import GoogleLogo from './google_trans.jpg';
import SvgIcon from '@material-ui/core/SvgIcon';
import Avatar from '@material-ui/core/Avatar';
import DepAvarta from './dep.jpg';
import Button from '@material-ui/core/Button';
import TextIcon from './ic_translate_googblue600_20dp.svg';
import { Icon } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  root: {
    width: '100%',
  },
  header: {
    color: '#FFFFFF',
  },
  content: {
    color: '#FAFAFA',
    marginLeft: '34px',
    marginRight: '34px',
  },
  wrapper: {
    padding: '16px 0px',
    position: 'relative',
  },
  buttonText: {
    textTransform: 'none',
  },
  table: {
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.37)',
    borderRadius: '8px',
    border: '1px solid rgba(0,0,0,0.12)',
    boxSizing: 'border-box',
    height: '200px',
  },
  headerTable: {
    borderTop: '1px solid rgba(0,0,0,0.12)',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'rgba(0, 0, 0, 0.12)',
    borderBottom: '1px solid rgba(0,0,0,0.12)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    height: '48px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerTableLeft: {
    width: 'min-content',
    // width: 'calc((100vw - 34px - 34px) / 2)',
  },
  input: {
    border: '0',
    //short for..
    borderWidth: '0',
    height: 'calc(100% - 48px)',
    fontSize: '18px',
    width: '100%',
    // borderRight: '1px solid rgba(0,0,0,0.12)',
    '&:focus': {
      border: '0',
      //short for..
      borderWidth: '0',
    }
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  avarta: {
    width: 40,
    height: 40,
    marginLeft: 10,
    // padding: '8px 8px',
  },
});

class GoogleTranslate extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    value: 0,
    valueSecond: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeSecond = (event, valueSecond) => {
    this.setState({ valueSecond });
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );


    return (

      <div className={classes.root}>
        <div className={classes.header}>
          <AppBar position="static" color='inherit'>
            <Toolbar>
              <IconButton className={classes.menuButton} aria-label="Open drawer">
                <MenuIcon />
              </IconButton>
              <img src={GoogleLogo} alt='Google Translate' />
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton>
                  <AppsIcon />
                </IconButton >
                <IconButton>
                  <NotificationsIcon />
                </IconButton>
                <Avatar alt="User" src={DepAvarta} className={classes.avarta} />

              </div>
            </Toolbar>
          </AppBar>
          {renderMenu}
        </div>
        <div className={classes.content}>
          <div className={classes.wrapper}>
            <Button style={{ marginRight: '15px' }} variant="outlined" color="primary" className={classes.buttonText}>
              <svg style={{ marginRight: '8' }} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 48 48" fill="#1A73E8">
                <path d="M0 0h48v48H0z" fill="none" />
                <path d="M25.74 30.15l-5.08-5.02.06-.06c3.48-3.88 5.96-8.34 7.42-13.06H34V8H20V4h-4v4H2v3.98h22.34C22.99 15.84 20.88 19.5 18 22.7c-1.86-2.07-3.4-4.32-4.62-6.7h-4c1.46 3.26 3.46 6.34 5.96 9.12L5.17 35.17 8 38l10-10 6.22 6.22 1.52-4.07zM37 20h-4l-9 24h4l2.25-6h9.5L42 44h4l-9-24zm-5.25 14L35 25.33 38.25 34h-6.5z" />
              </svg>Text
      </Button>
            <Button variant="outlined" color="primary" className={classes.buttonText}>
              <svg style={{ marginRight: '8' }} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="#1A73E8">
                <path fill="none" d="M0 0h20v20H0V0z" />
                <path d="M12 1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6l-5-5zm-1 6V2.5L15.5 7H11z" />
              </svg>
              Documents
      </Button>
          </div>
          <div className={classes.table}>
            <div className={classes.headerTable}>
              <Grid container>
                <Grid item xs={12} md={7}>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  ><Grid item>
                      <Tabs value={this.state.value} onChange={this.handleChange} textColor="primary" indicatorColor="primary"
                      >
                        <Tab label="DETECT LANGUAGE" />
                        <Tab label="VIETNAMESE" />
                        <Tab label="ENGLISH" />
                        <Tab label="SPANISH" />
                      </Tabs></Grid>
                    <Grid item>
                      <IconButton>
                        <ExpandMore />
                      </IconButton></Grid>
                    <Grid item>
                      <IconButton>
                        <SwapHorizIcon />
                      </IconButton></Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Tabs value={this.state.valueSecond} onChange={this.handleChangeSecond} textColor="primary" indicatorColor="primary"
                      >
                        <Tab label="VIETNAMESE" />
                        <Tab label="ENGLISH" />
                        <Tab label="SPANISH" />
                      </Tabs></Grid>
                    <Grid item>
                      <IconButton>
                        <ExpandMore />
                      </IconButton></Grid>
                  </Grid>
                </Grid>
              </Grid>

            </div>
            <Grid container style={{ height: 'calc(200px - 60px)' }}>
              <Grid item xs={12} md={7} style={{ borderRight: '1px solid rgba(0,0,0,0.12)', }}>
                <input className={classes.input} />
              </Grid>
              <Grid item xs={12} md={5}>
                <input className={classes.input} />
              </Grid>
            </Grid>
          </div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={24}
            style={{ bottom: '30px', position: 'fixed' }}
          >
            <Grid item>
              <IconButton style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                <HistoryIcon fontSize='large' />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                <StarIcon fontSize='large' />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                <SupervisorAccountIcon fontSize='large' />
              </IconButton>
            </Grid>
          </Grid>
        </div>

      </div>
    );
  }
}

GoogleTranslate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoogleTranslate);
