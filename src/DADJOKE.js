// import React, { useState } from 'react';
import React, { Component } from 'react';
import axios from "axios";
import "./DADJOKE.css";
import Joke from './Joke';
// import uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';
class DADJOKE extends Component{

    static defaultProps={
         totalJokes:10
    }

    constructor(props){
        super(props);
        this.state={
             jokes:[]
        }
        this.handleVote=this.handleVote.bind(this);
    }

  async componentDidMount(){
      
    var data=[];

    while(data.length<this.props.totalJokes){
         var element=await axios.get("https://icanhazdadjoke.com",{
             headers:{Accept:"application/json"}
         });
         var joke_element=element.data.joke;
         data.push({id:uuidv4(),joke:joke_element,votes:0});
        //  console.log(element.data.joke);
    }
  

    this.setState({jokes:data});

  }

handleVote(id,delta){



this.setState(state=>({
  jokes:state.jokes.map(j=>
    j.id===id?{...j,votes:j.votes+delta}:j
  )
}));
   
}


render(){

return(

  <div className="JokeList">


    <div className="JokeList-sidebar">
      {/* <div > */}
            <h1 className="JokeList-title"><span>Dad's</span> Jokes</h1>
      {/* </div> */}
      <img src="data:image/jpeg;base64,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"/>
      <button className="JokeList-getmore">New Jokes</button>
    </div>
     
    {/* <div>{j.joke+" "+j.votes}</div> */}
        <div className="JokeList-jokes">
           <ul>
              {this.state.jokes.map(j=>(
               <Joke id={j.id} votes={j.votes} joke={j.joke} upvalue={1} upvote={this.handleVote} downvalue={-1} downvote={this.handleVote}/>
                ))}
            </ul>     
        </div>
        
    </div>

);

}


}

export default DADJOKE;
