import "./Single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img 
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQHi4MBhenPOhw/profile-displayphoto-shrink_400_400/0/1580543436863?e=1654732800&v=beta&t=0zapkWdgdniNLDWvJA-9sN33d8e67fK-ZQ9U-ClLt0k" 
                  alt="" 
                  className="itemImg" />
                  <div className="details">
                    <h1 className="itemTitle">Aphelele Mapuko</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">aphelelempk@gmail.com</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Phone:</span>
                      <span className="itemValue">+27 69 584 6912</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Adress:</span>
                      <span className="itemValue">Mfuleni Cape Town</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Country:</span>
                      <span className="itemValue">South Africa</span>
                    </div>
                  </div>
              </div>
            </div>
            <div className="right">
              <Chart aspect={ 3 / 1 } title="User Spending (Last 6 Months)" />
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Last Transactions</h1>
            <List />
          </div>
        </div>
    </div>
  );
};

export default Single