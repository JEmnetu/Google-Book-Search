import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
class Results extends Component {
    
    state = this.props.books;
    render() { 

    //    let deleteBook = () =>{
    //         console.log(`deleted the # $.id} book`);
    //     }

        if(this.state.length === 0){
            return(
                <div id="results-div">
                    <h1>No Results to Display</h1>
                </div>
            )
        }
        else{
            return ( 

                <Container id="results-div">
                <h1>Results</h1>
                {this.state.map((result, i)=>{
                    return (
                      <Row id="book-div">
                          <Row id="first-row" className="flex" style={{marginTop:"1em"}} key={i}>
                              <Col xs={3} >
                                <h3>{result.volumeInfo.title}</h3>
                                <h6>{result.volumeInfo.authors[0]}</h6>
                                <img src={result.volumeInfo.imageLinks.smallThumbnail} alt="book image"/>
                              </Col>
                              <Col xs={5}>
                                <p>{result.volumeInfo.description}</p>
                              </Col>
                              <Col xs={2} className="d-flex justify-content-between">
                                <a href={result.accessInfo.webReaderLink} target="_blank"> <button>View</button></a>
                                <button style={{marginLeft:0}}>Save</button>
                                
                              </Col>
                          </Row>

                          
                        </Row>
    
                      
                    );
                 
                })}
                {console.log(this.state)}
    
                
                
            </Container>
             );
        }
        
    }
}
 
export default Results;