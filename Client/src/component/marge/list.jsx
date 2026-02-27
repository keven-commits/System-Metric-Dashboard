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
import { useState } from 'react';

export default function NestedList({ isOpen, active, onClickDashboard, onClickAlerts, onClickLogs, onClickMetrics, onClickSettings }) {

  const [selected, setSelected] = useState(true);
  const textStyle = {
    fontSize: "0.95rem",
    fontWeight: 500,
    letterSpacing: "0.06em",
  }

  const itemStyle = {
    "height": {
      height: 50
    },

    "&.Mui-selected": {
      backgroundColor: theme.customColors.grey,
      "& .MuiListItemIcon-root": {
        color: theme.customColors.blue,
      }, "& .MuiListItemText-primary": {
        color: theme.customColors.white,
      },
    },

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
      <ListItemButton
        selected={active === "dashboard"}
        onClick={onClickDashboard}
        sx={itemStyle}>
        <ListItemIcon>
          <DonutSmallOutlinedIcon />
        </ListItemIcon>
        {isOpen && (<ListItemText
          primary="Dashboard" />)}
      </ListItemButton>
      <ListItemButton
        selected={active === "metrics"}
        onClick={onClickMetrics}
        sx={itemStyle}>
        <ListItemIcon>
          <LegendToggleIcon />
        </ListItemIcon>
        {isOpen && <ListItemText primary="Metrics" />}
      </ListItemButton>
      <ListItemButton
        selected={active === "logs"}
        onClick={onClickLogs}
        sx={itemStyle}>
        <ListItemIcon>
          <FeedOutlinedIcon />
        </ListItemIcon>
        {isOpen && <ListItemText primary="Logs" />}
      </ListItemButton>
      <ListItemButton
        selected={active === "alerts"}
        onClick={onClickAlerts}
        sx={itemStyle}>
        <ListItemIcon>
          <NotificationsNoneIcon />
        </ListItemIcon>
        {isOpen && <ListItemText primary="Alerts" />}
      </ListItemButton>
      <ListItemButton
        selected={active === "settings"}
        onClick={onClickSettings}
        sx={itemStyle}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        {isOpen && <ListItemText primary="Settings" />}
      </ListItemButton>
    </List>
  );
}