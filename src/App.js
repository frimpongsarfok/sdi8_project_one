import { BrowserRouter as Router, Routes, Route, useParams,useLocation } from 'react-router-dom'; 
import React from "react"; 
import { useNavigate } from "react-router";
import MainSearch from "./Pages/MainSearch";
import AllFish from "./Pages/AllFish";
import Fish from "./Pages/Fish";
import CompareFish from './Pages/CompareFish';
import CatchList from './Pages/CatchList';
import CaughtList from './Pages/CaughtList';
import DonateList from './Pages/DonateList';
import './App.css';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      allFish:[],
      compare:{fishAId:null,fishBId:null},
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
  
    
}
handleAddToList=(to,value)=>{
  this.handleSelectedFish(value);
  switch(to){
    case 'catch_list':{
      const catchList={...this.state.catchList};
      catchList.data.includes(value)?false:catchList.data.push(value);
      this.setState({catchList:catchList});
    }break;
    case 'caught_list':{
      const caughtList={...this.state.caughtList};
      caughtList.data.includes(value)?false:caughtList.data.push(value);
      this.setState({caughtList:caughtList});
    }break;
    case 'donate_list':{
      const donateList={...this.state.donateList};
      donateList.data.includes(value)?false:donateList.data.push(value);
      this.setState({donateList:donateList});

    }break;
    default:{
      throw Error('Wrong Container');
    }
  }
}
handleDeleteFromList=(from)=>{
  switch(from){
    case 'catch_list':{
      const catchList={...this.state.catchList};
      catchList.data=catchList.data.filter(ele=>catchList.selected.includes(ele.id)===false); 
      this.setState({catchList:catchList});
    }break;
    case 'caught_list':{
      const caughtList={...this.state.caughtList};
      caughtList.data=caughtList.data.filter(ele=>caughtList.selected.includes(ele.id)===false);
      this.setState({caughtList:caughtList});
    }break;
    case 'donate_list':{
      const donateList={...this.state.donateList};
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
      const catchList={...this.state.catchList}; 
      catchList.selected=listArray; 
      this.setState({catchList:catchList});
    }break;
    case 'caught_list':{
      const caughtList={...this.state.caughtList}; 
      caughtList.selected=listArray; 
      this.setState({caughtList:caughtList});
    }break;
    case 'donate_list':{
      const donateList={...this.state.donateList}; 
      donateList.selected=listArray; 
      this.setState({donateList:donateList});

    }break;
    default:{
      throw Error('Wrong Container');
    }
  }
}
handleSelectedFish=(fish)=>{
  this.setState({currentFish:fish});
}
handleClearSearchResult=()=>{
  this.setState({searchResult:[]});
}
handleCompare=(value)=>{
   let compare={...this.state.compare};
   let Aid=compare.fishAId;
   compare.fishAId=value;
   compare.fishBId=Aid;
   this.setState({compare:compare})
}
  render=()=>{

    return (
    <main>
        <Routes>
            <Route path='/allfish' element={<AllFish object={this}/>}></Route>
            <Route path='/search'  element={<MainSearch/>}></Route>
            <Route path='/'  element={<MainSearch object={this}  />}></Route>
            <Route path='/fish' element={<Fish  object={this} ></Fish>}></Route>
            <Route path='/compare' element={<CompareFish object={this}/>}></Route>
            <Route path='/donatelist' element={<DonateList object={this}/>}></Route>
            <Route path='/caughtlist' element={<CaughtList object={this}/>}></Route>
            <Route path='/catchlist' element={<CatchList object={this}/>}></Route>

        </Routes>
        
    </main>)
  }
}

//move context to context.js folder
const AppContext=React.createContext({currentFish:{}})
App.contextType=AppContext;
export default App;


