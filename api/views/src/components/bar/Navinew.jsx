import React, { useEffect } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Button, NavLink } from 'reactstrap';
import alertfy from 'alertifyjs';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
  menuPaper: {
    backgroundColor: "lightblue"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Navinew(props) {
  const [username, setUsername] = React.useState(null);

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const LogOut = () => {

    localStorage.removeItem('token');

    localStorage.removeItem('username');

    alertfy.warning('cixis etdiniz');

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
  useEffect(() => {

    setUsername(localStorage.getItem('username'));

  }, [])

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      classes={{ paper: classes.menuPaper }}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
    </Menu>
  );
    const openLogin =()=>{
      
    }
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    
      username ? 
    <Menu
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
    >
       <MenuItem className="mobile-menu">
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <span className="navbarUsername">@{username ? username : ''}</span>
      </MenuItem>
      <MenuItem className="mobile-menu">
        <NavLink className="Nav-main black" href="/addpost">
        <AddIcon/>
        </NavLink>
      </MenuItem>
      <MenuItem className="mobile-menu ">
        <NavLink className="Nav-main black" href="/">Home</NavLink>
      </MenuItem>
      <MenuItem className="mobile-menu ">
        <NavLink className="Nav-main black" href="/profile">Profile</NavLink>
      </MenuItem>
      <MenuItem className="mobile-menu ">
        <Button color="danger" style={{ width: '400px' }} onClick={() => LogOut()} >Log Out</Button>
      </MenuItem>
     </Menu>
     :
    <Menu anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}>
      <MenuItem className="mobile-menu ">
        <NavLink onClick={openLogin} className="Nav-main black" href="#">Login</NavLink>
      </MenuItem>
      <MenuItem className="mobile-menu ">
        <NavLink  className="Nav-main black" href="/register">Register</NavLink>
      </MenuItem>
    </Menu>
   
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <NavLink className="Nav-Brand-main" href="/">Dev-how</NavLink>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          {username ?
            <div className={classes.sectionDesktop}>

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
                <span className="usernamespan">{username}</span>
              </IconButton>
              <span className="logoutbtn" onClick={() => LogOut()}>Cixis</span>
            </div>

            :
            <div className={classes.sectionDesktop}>

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <NavLink style={{ color: 'white' }} href="/login">Login</NavLink>
                <NavLink style={{ color: 'white' }} href="/register">Register</NavLink>
              </IconButton>
            </div>
          }
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
