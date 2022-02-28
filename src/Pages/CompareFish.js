//http://localhost:3000/compare?fishA=1&fishB=2

import React from "react";
import {useLocation} from 'react-router-dom'
import FishCard from "./Fish";

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
export default  function CompareFish(props){
    let fishAId=parseInt(useQuery().get('fishA'));
    let fishBId=parseInt(useQuery().get('fishB'));
    let fishA=props.object.state.allFish.filter(ele=>ele.id===fishAId)[0];
    let fishB=props.object.state.allFish.filter(ele=>ele.id===fishBId)[0];

    const Fish=(props)=>(
    <article>
              <h1>Name:<span>{props.fish['file-name']}</span></h1>
            <h2> ID: <span> {props.fish.id}</span></h2>
            <h2> Selling Price: </h2> 
             <h3> Tom Nook's Cranny Shop: <span> {props.fish.price} </span> </h3>
            <h3> CJ: <span> {props.fish['price-cj']} </span> </h3>
            <h3> Location/Weather: <span> {props.fish.availability.location} </span> </h3>
            <h3> Time of Day: <span> {props.fish.availability['time-array']} </span> </h3>
            <h3> Shadow Size: <span> {props.fish.shadow} </span> </h3>
            <h3>Rarity: <span> {props.fish.availability.rarity} </span> </h3>
            <h3> Season: <span> {props.fish.availability['month-array-northern'], props.fish.availability['month-array-southern']} </span> </h3>   *
            <h3> Image: <span> {props.fish.image_uri} </span> </h3>
    </article>
    );

    console.log(fishA,fishB)
    return (
    <section>
        {fishA ?(<Fish fish={fishA}/>):<p>Fish A  is empty</p>};
        {fishB ?(<Fish fish={fishB}/>):<p>Fish B is empty</p>};
        
    
    </section>);
  
}

