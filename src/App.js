import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'; 
import React from "react"; 

import MainSearch from "./components/MainSearch";
import AllFish from "./components/AllFish";
import FishCard from "./components/FishCard"
import CompareFish from './components/CompareFish'
import './App.css';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      allFish:[],
      compare:{fishAId:"",fishBId:""},
      currentFish:{}
    }
  }
   
  componentDidMount(){
    fetch('https://acnhapi.com/v1a/fish')
    .then(resp=>resp.json())
    .then(json=>this.setState({allFish:json}));
  }
  render=()=>{
    
    return (<main>
        <Routes>
            <Route path='/allfish' element={<AllFish allFish={this.state.allFish}/>}></Route>
            <Route path='/search'  element={<MainSearch/>}></Route>
            <Route path='/'  element={<MainSearch/>}></Route>
            <Route path='/fish/:id' element={<FishCard ></FishCard>}></Route>
            <Route path='/compare' element={<CompareFish object={this}/>}></Route>
        </Routes>
        
    </main>)
  }
}



export default App;
