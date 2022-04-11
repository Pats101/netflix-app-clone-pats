import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">R520</p>
            <p className="desc">Previous transactions processing. Last payments may not be included.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize="small"/>
                        <div className="resultAmount">R18.7k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                        <div className="resultAmount">R18.7k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                        <div className="resultAmount">R18.7k</div>
                    </div>
                </div>
            </div>
            <div className="netflix_featured">
                <div className="featuredItemNetflix">
                    <span className="featureTitle">Revenue</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">R120.00</span>
                        <div className="itemResult negative">
                            <span className="featuredMoneyRate">-11.4 <KeyboardArrowDownIcon className="featuredIcon negative" /> </span>
                        </div>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
                </div>
                <div className="featuredItemNetflix">
                    <span className="featureTitle">Sales</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">R200.00</span>
                        <div className="itemResult negative">
                            <span className="featuredMoneyRate">-1.4 <KeyboardArrowDownIcon className="featuredIcon negative" /> </span>
                        </div>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
                </div>
                <div className="featuredItemNetflix">
                    <span className="featureTitle">Cost</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">R300.00</span>
                        <div className="itemResult positive">
                            <span className="featuredMoneyRate">+2.4 <KeyboardArrowUpOutlinedIcon className="featuredIcon positive" /> </span>
                        </div>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured