import './App.css';
import React, { useState } from 'react';
import { menuData } from "./data";
import {List} from './Composant/List'



const App = () =>{
const [data, setData] = useState(menuData)
const handelDelete=(id)=>setData(data.filter(el=>el.id!==id))
// console.log(data)
  return (
    <div className="App">
      <List list={data} deleteMovie={handelDelete}/>
    </div>
  );
}

export default App;
