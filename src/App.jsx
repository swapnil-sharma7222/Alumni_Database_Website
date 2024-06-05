import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filters from './Components/Filters/Filters'
import { User } from "./Components/User";
import { IndividualProfile } from "./Components/Individual-Profiles/IndividualProfile";
import axios from "axios";

const url = 'https://alcom-backend.onrender.com/api/alums/get-all-alum'

function App() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    // axios.get(url).then((res) => {
    //   console.log(res);
    //   console.log(res.data.data[0].name);
    //   setPost(res.data.data);
    // });
    const func = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setPost(data.data);
      console.log("hello");
    }
    func();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' target= 'blank' element={<Filters post={post} />} />
        <Route path=':_id' element={<IndividualProfile post={post} />} />
      </Routes>
    </>
  );
}

export default App;
