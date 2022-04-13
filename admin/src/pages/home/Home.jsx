import React from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';
import Widget from '../../components/widget/Widget';
import "./Home.scss";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import NewUsersTable from '../../components/new-users-table/NewUsersTable';

const Home = () => {
  const MONTHS = useMemo(() => [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    ],[]
    );
    const [userStats, setUserStats] = useState([]);
  
    useEffect(() => {
        const getStats = async () => {
          try {
            const res = await axios.get("/users/stats", {
              Headers: {
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGM0MzA0NjZiZjU2YzEwNDdjYmNhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTU5MTM2MSwiZXhwIjoxNjUwMDIzMzYxfQ.E7OeHcTk6yYBhZAwo0qWZHUjW8LTew3949QOCAyYSGE"
              },
            });
            const statsList = res.data.sort(function (a, b) {
              return a._id - b._id;
            });
            statsList.map(item => setUserStats(prev=>[...prev, {
              name: MONTHS[item._id - 1], 
              "Total User": item.total 
            },]));
          } catch (err) {
            console.log(err)
          }
        }
        getStats();
    }, [MONTHS]);
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured />
            <Chart title="Last 6 Months (Revenue)" aspect={ 2 / 1} data={userStats} />
          </div>
          <div className="listContainer">
            <NewUsersTable />
            <Table />
          </div>
        </div>
    </div>
  );
};

export default Home;