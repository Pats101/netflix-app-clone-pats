import { useEffect, useState } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import "./Home.scss";
import axios from "axios";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async ()=> {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token: 
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGM0MzA0NjZiZjU2YzEwNDdjYmNhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTM2OTEwNSwiZXhwIjoxNjQ5ODAxMTA1fQ.ZfFw5p11CKLyp0KBMueuVyDwMIB_EcCAh9KIzGdjy4I"
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className='home'>
        <Navbar/>
        <Featured type={ type }/>
        {lists.map((list)=> (
          <List list={ list } />
        ))}
    </div>
  )
}

export default Home