import React, { Component } from 'react';
import "./Joke.css";
class Joke extends Component{

    getColor() {
        if (this.props.votes >= 15) {
          return "#4CAF50";
        } else if (this.props.votes >= 12) {
          return "#8BC34A";
        } else if (this.props.votes >= 9) {
          return "#CDDC39";
        } else if (this.props.votes >= 6) {
          return "#FFEB3B";
        } else if (this.props.votes >= 3) {
          return "#FFC107";
        } else if (this.props.votes >= 0) {
          return "#FF9800";
        } else {
          return "#f44336";
        }
      }
      getEmoji() {
        if (this.props.votes >= 15) {
          return "em em-rolling_on_the_floor_laughing";
        } else if (this.props.votes >= 12) {
          return "em em-laughing";
        } else if (this.props.votes >= 9) {
          return "em em-smiley";
        } else if (this.props.votes >= 6) {
          return "em em-slightly_smiling_face";
        } else if (this.props.votes >= 3) {
          return "em em-neutral_face";
        } else if (this.props.votes >= 0) {
          return "em em-confused";
        } else {
          return "em em-angry";
        }
      }


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
    <span className="Joke-votes" style={{borderColor:this.getColor()}}> {this.props.votes}</span>
    <i className="fa fa-arrow-down" onClick={this.handleDownvote}/>
</div>
<div className="Joke-text">{this.props.joke}</div>
  <div className="Joke-smiley">
  <i class={this.getEmoji()}></i>
   </div>
</div>


);

}

}


export default Joke;