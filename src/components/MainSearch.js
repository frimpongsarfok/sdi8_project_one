import React from "react";
function MainSearch(){
    return (
        <section>    
            <article>   
                <h1> Animal Crossing Fishing Index</h1>
                <form>
                    <input type='search' placeholder='Search for fish here'/>
                    <input type='submit' value='Search'/>
                </form>
                <button>See All</button>
            </article>
        </section>
    );
    
}
export default MainSearch;