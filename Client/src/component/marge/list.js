import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import theme from '../theme';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';


export default function NestedList() {

  const handleClick = () => {
    console.log("open");
  };

  const itemStyle = {

    "& .MuiListItemIcon-root": {
      minWidth: 34,
      color: theme.customColors.lightgrey
    },

    "& .MuiListItemText-primary": {
      color: theme.customColors.lightgrey,
      fontSize: "0.95rem"
    },

    "&:hover": {
      backgroundColor: theme.customColors.grey,
      "& .MuiListItemIcon-root": {
        color: theme.customColors.blue,
      }, "& .MuiListItemText-primary": {
        color: theme.customColors.white,
      },
    },
  };

  return (
    <List
      sx={{
        paddingTop: "35px",
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.customColors.darkgrey,
        color: theme.customColors.white
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick} sx={itemStyle}>
        <ListItemIcon>
          <DonutSmallOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={handleClick} sx={itemStyle}>
        <ListItemIcon>
          <LegendToggleIcon />
        </ListItemIcon>
        <ListItemText primary="Metrics" />
      </ListItemButton>
      <ListItemButton onClick={handleClick} sx={itemStyle}>
        <ListItemIcon>
          <FeedOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Logs" />
      </ListItemButton>
      <ListItemButton onClick={handleClick} sx={itemStyle}>
        <ListItemIcon>
          <NotificationsNoneIcon />
        </ListItemIcon>
        <ListItemText primary="Alerts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick} sx={itemStyle}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </List>
  );
}