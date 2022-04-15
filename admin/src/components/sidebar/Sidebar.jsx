import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
                <span className="logo">Netflix Admin</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/users" style={{ textDecoration: "none" }}>
                    <li>
                        <PersonOutlineOutlinedIcon className="icon" />
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/movies" style={{ textDecoration: "none" }}>
                    <li>
                        <PlayCircleOutlineIcon className="icon" />
                        <span>Movies</span>
                    </li>
                </Link>
                <Link to="/lists" style={{ textDecoration: "none" }}>
                    <li>
                        <FormatListBulletedOutlinedIcon className="icon" />
                        <span>Lists</span>
                    </li>
                </Link>
                <li>
                    <LocalShippingIcon className="icon" />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <AssessmentIcon className="icon" />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className="icon" />
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className="icon" />
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon" />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsOutlinedIcon className="icon" />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppOutlinedIcon className="icon" />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
            <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar