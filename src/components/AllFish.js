import React from "react";
function AllFish(props){
    console.log();
    return(
        <section>
            <header>
               
            </header>    
            <article>
                <ul>
                    {props.allFish.map(ele=><li>{ele.name['name-USen']}</li>)}
                </ul>
             
             </article>
       </section>    
    );
}


export default AllFish;