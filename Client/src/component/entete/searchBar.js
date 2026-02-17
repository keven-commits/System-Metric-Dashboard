import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import theme from "../theme"
import ImageAvatars from './avatar';

const Search = styled('div')(() => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: (theme.customColors.lightgrey),
    '&:hover': {
        backgroundColor: (theme.customColors.hover),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '300px',
    },
}));

const SearchIconWrapper = styled('div')(() => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.customColors.grey
}));

const StyledInputBase = styled(InputBase)(() => ({
    color: theme.customColors.grey,
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ height: "56px", backgroundColor: theme.customColors.white }}>
                <Toolbar
                    sx={{
                        minHeight: "56px !important",
                        height: "56px",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 8px",
                        gap: 3
                    }}
                >
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="open drawer"
                        sx={{
                            mr: 2,
                            color: theme.customColors.darkgrey
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >

                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{
                                'aria-label': 'search',
                                color: theme.customColors.grey
                            }}
                        />
                    </Search>
                    <ImageAvatars />
                </Toolbar>
            </AppBar>
        </Box>
    );
}