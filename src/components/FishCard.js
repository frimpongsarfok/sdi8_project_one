import React from "react";
import {useParams} from 'react-router-dom'
function FishCard(props){
    let {id}=useParams();
       
    console.log(id);
    return (<article></article>);
}
export default FishCard;
