import "./Navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search..." />
                <SearchOutlinedIcon className="icon" />
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon className="icon" />
                    English
                </div>
                <div className="item">
                    <DarkModeOutlinedIcon className="icon" />
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon className="icon" />
                </div>
                <div className="item">
                    <NotificationsNoneOutlinedIcon className="icon"/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <NightsStayOutlinedIcon className="icon" />
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon className="icon" />
                    <div className="counter">2</div>
                </div>
                <div className="item">
                    <ListOutlinedIcon className="icon" />
                </div>
                <div className="item">
                    <img 
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQGDDH7TwHLMzg/profile-displayphoto-shrink_400_400/0/1645114765561?e=1654732800&v=beta&t=Svcu7TAl1e_eVSXbGCdBLGGQl9VrsJQUsQcNe8UM3bk" 
                        alt="" 
                        className="avatar"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar