import React, { useState,useEffect,count} from 'react';
import Navbar from './componenets/Navbar';
import Form from './componenets/Form';
import {Route,Routes} from "react-router-dom";
import Display from './componenets/Display';
import axios from 'axios';

function App() {
const [dbdata, setData] = useState([]);

function Mapping(){
  useEffect(() =>
  {
    axios.get('http://localhost:5000/note/')
    .then((res) => {
        setData(res.data)
    });
  }, [count])

  return dbdata.map(dbdata=> {
    return <Display title={dbdata.title} author={dbdata.author} tags={dbdata.tag} des={dbdata.des} id={dbdata._id} date={dbdata.date} key={dbdata._id}/>;
  })
}

  return (
    <div className='container'>
    <Navbar/>
    <div className='container-flex'>
    <Routes>
          <Route path="/add" element={<Form />} />
          <Route path="/" element={Mapping()} />
    </Routes>
    </div></div>
  );
}

export default App;
