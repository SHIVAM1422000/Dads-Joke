import React, { Component } from 'react';
import "./Joke.css";
class Joke extends Component{

constructor(props){
    super(props);
    this.handleUpvote=this.handleUpvote.bind(this);
    this.handleDownvote=this.handleDownvote.bind(this);
}

handleDownvote(){
    var id=this.props.id;
    var value=this.props.downvalue;
    this.props.downvote(id,value);
}

handleUpvote(){ 
    var id=this.props.id;
    var value=this.props.upvalue;
    this.props.upvote(id,value);
}


render(){

return(

<div className="Joke">
<div className="Joke-button">
    <i className="fa fa-arrow-up" onClick={this.handleUpvote}/>
    <span className="Joke-votes"> {this.props.votes}</span>
    <i className="fa fa-arrow-down" onClick={this.handleDownvote}/>
</div>
<div className="Joke-text">{this.props.joke}</div>
  <div className="Joke-smiley">
  <i class="em em-rolling_on_the_floor_laughing" aria-role="presentation" aria-label="ROLLING ON THE FLOOR LAUGHING"></i>
   </div>
</div>


);

}

}


export default Joke;