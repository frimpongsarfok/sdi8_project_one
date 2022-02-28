import { BrowserRouter as Router, Routes, Route, useParams,useLocation } from 'react-router-dom'; 
import React from "react"; 
import { useNavigate } from "react-router";
import MainSearch from "./Pages/MainSearch";
import AllFish from "./Pages/AllFish";
import Fish from "./Pages/Fish"
import CompareFish from './Pages/CompareFish'
import CatchList from './Pages/CatchList';
import CaughtList from './Pages/CaughtList';
import DonateList from './Pages/DonateList';
import './App.css';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      allFish:[],
      compare:{fishAId:"",fishBId:""},
      currentFish:{},
      searchResult:[],
      catchList:{data:[],selected:[]},
      donateList:{data:[],selected:[]},
      caughtList:{data:[],selected:[]},
      navigation:()=>{
       let navigate= useNavigate()
        return navigate;
      },
      getQuery:(key)=>{
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]).get(key);
      }
    }
  }
   
  componentDidMount=()=>{
   
    fetch('https://acnhapi.com/v1a/fish')
    .then(resp=>resp.json())
    .then(json=>this.setState({allFish:json}));
  }

  handleSearchChange=(value)=>{
    console.log(this.state.allFish.filter(ele=>ele['file-name'].includes(value)));
   if(value.length){
    if(parseInt(value)){
      this.setState({
        searchResult:this.state.allFish.filter(ele=>ele.id===parseInt(value))
      });
    }else{
      this.setState({
        searchResult:this.state.allFish.filter(ele=>ele['file-name'].includes(value))
      });
    }
   
   }else{
    this.setState({
      searchResult:[]
    });
   }   
  console.log(this.state)
    
}
handleAddToList=(to,value)=>{
  switch(to){
    case 'catch_list':{
      const catchList=[...this.state.catchList];
      catchList.data.push(value);
      this.setState({catchList:catchList});
    }break;
    case 'caught_list':{
      const caughtList=[...this.state.caughtList];
      caughtList.data.push(value);
      this.setState({caughtList:caughtList})
    }break;
    case 'donate_list':{
      const donateList=[...this.state.donateList];
      donateList.data.push(value);
      this.setState=({donateList:donateList});

    }break;
    default:{
      throw Error('Wrong Container');
    }
  }
}
handleDeletFromList=(from)=>{
  switch(from){
    case 'catch_list':{
      const catchList=[...this.state.catchList];
      catchList.data=catchList.data.filter(ele=>catchList.selected.includes(ele.id)===false); 
      this.setState({catchList:catchList});
    }break;
    case 'caught_list':{
      const caughtList=[...this.caughtList];
      caughtList.data=caughtList.data.filter(ele=>caughtList.selected.includes(ele.id)===false);
      this.setState({caughtList:caughtList});
    }break;
    case 'donate_list':{
      const donateList=[...this.donateList];
      donateList.data=donateList.data.filter(ele=>donateList.selected.includes(ele.id)===false);
      this.setState({donateList:donateList});

    }break;
    default:{
      throw Error('Wrong Container');
    }
  }
}
handleSelectedList=(from,listArray)=>{
  switch(from){
    case 'catch_list':{
      const catchList=[...this.state.catchList];
      catchList.selected=listArray; 
      this.setState({catchList:catchList});
    }break;
    case 'caught_list':{
      const caughtList=[...this.caughtList];
      caughtList.selected=listArray; 
      this.setState({caughtList:caughtList});
    }break;
    case 'donate_list':{
      const donateList=[...this.donateList];
      donateList.selected=listArray; 
      this.setState({donateList:donateList});

    }break;
    default:{
      throw Error('Wrong Container');
    }
  }
}
handleClearSearchResult=()=>{
  this.setState({searchResult:[]});
}
  render=()=>{

    return (
    <main>
        <Routes>
            <Route path='/allfish' element={<AllFish object={this}/>}></Route>
            <Route path='/search'  element={<MainSearch/>}></Route>
            <Route path='/'  element={<MainSearch object={this}  />}></Route>
            <Route path='/fish' element={<Fish object={this} ></Fish>}></Route>
            <Route path='/compare' element={<CompareFish object={this}/>}></Route>
            <Route path='/donateList' element={<DonateList object={this}/>}></Route>
            <Route path='/caughtList' element={<CaughtList object={this}/>}></Route>
            <Route path='/catchList' element={<CatchList object={this}/>}></Route>

        </Routes>
        
    </main>)
  }
}



export default App;


