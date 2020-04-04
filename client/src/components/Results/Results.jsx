import React, { Component } from 'react';

class Results extends Component {
    
    state = { saved:[{id:1, name:"Book 1", author:"Jacob"}, {id:2, name:"Book 2", author:"Habtemariam"}] }
    render() { 



        if(this.state.saved.length === 0){
            return(
                <div id="results-div">
                    <h1>No Results to Display</h1>
                </div>
            )
        }
        else{
            return ( 

                <div id="results-div">
                <h1>Results</h1>
                {this.state.saved.map((result, i)=>{
                    return (
                      <div>
                          <button  style={{float:"right"}}>Save</button>
                          <button  style={{float:"right", marginRight:".3em"}}>View</button>
                          
                        <h5>{result.name}</h5>
                        <p>Written by {result.author}</p>
                      </div>
                    );
                 
                })}
            
    
                
                
            </div>
             );
        }
        
    }
}
 
export default Results;