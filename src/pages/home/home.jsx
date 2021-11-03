import React,{useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { pink } from '@material-ui/core/colors';
import { blue, grey,lightBlue, orange } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { withStyles } from '@material-ui/core/styles';
orange
const ListItem = styled('ul')(({ theme }) => ({
    margin: theme.spacing(0.1),
}));

const useStyles = makeStyles(theme =>({
    appbar:{
        height: 15,
        minHeight:10,
        backgroundColor:'white',

    },
    toolbar: {
        background: '#344955',
        minHeight: 12,

    },
    tags:{
        backgroundColor: grey[400],
        background:alpha(theme.palette.common.white, 0.5),
        minHeight: '1px',
        width:'100%',
        paddingTop:0,
        paddingBottom:0,
        margin:0,
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        alignTracks:'center',
    },

}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('xs')]: {
    marginLeft: '50em',
    width: '30%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
        width: '20ch',
    },
    },
}));

const StyledChip = withStyles({
    root: {
        "&&:hover": {
            backgroundColor: '#4A6572',
            color:'white',
            transition:'0.20s'
        },
        "&&:focus": {
            backgroundColor: '#4A6572',
            color:'white',
            transition:'0.20s'
        }
    }
})(Chip);

export const Home = () => {
    const classes = useStyles();
    const [chipData, setChipData] = useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
        { key: 5, label: 'Flutter' },
        { key: 6, label: 'Python' },
        { key: 7, label: 'C++' },
    ]);

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };


    return (
        <div>
            <AppBar variant="dense" position="static" className={classes.appbar}>
                <Toolbar  variant="dense" className={classes.toolbar}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    >
                    <AccountCircle />
                    </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"

                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
                <Toolbar variant="dense" className={classes.tags}>
                {chipData.map((data) => {
                    let icon;

                    if (data.label === 'React') {
                        icon = <TagFacesIcon />;
                    }

                    return (
                        <ListItem key={data.key}>
                            <StyledChip
                                sx={{ bgcolor: '#F9AA33', color: 'black' }}
                                icon={icon}
                                size="small"
                                label={data.label}
                                onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                                onClick={handleClick}

                            />
                        </ListItem>
                    );
                })}
                </Toolbar>
            </AppBar>
        </div>
    )
}