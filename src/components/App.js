import React, {Component} from 'react';
import Header from "./Header"
import Info from "./Info"
import Board from "./Board"


class Game extends Component {
state = {
  gameStarted : false,
  name_0 :"",
  name_X :""

}
startGame =()=>{
  this.setState(prevState =>{
    return{
      gameStarted : !prevState.gameStarted
    }
  })
}
saveNames = (name_0, name_X)=>{
  this.setState(prevState =>{
    return{
      name_0,
      name_X
    }
  })
}
  render(){
    if(this.state.gameStarted){
      if(this.state.name_0 !== "" && this.state.name_0 !== ""){
        return(
          <Board/>
        )
      }else{ // if game started but name didn't set up
        return(
          <Info saveNames={this.saveNames}/>
        )
      }      
    }else { //if game didn't start
      return ( 
        <Header  startGame={this.startGame}/>
        );
    }
    
  }
}

export default Game;
