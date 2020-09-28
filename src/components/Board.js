import React, {Component}  from 'react';
import Logo from "./Logo"
import Players from "./Players"
import Buttons from "./Buttons"
import Cell from "./Cell"

class Board extends Component {

  render(){
      return(
        <div className="container niceFont center">
          <Logo/>
          <section className="board">
            <Players name_X = {this.props.name_X} name_0={this.props.name_0}/>
             <Cell  
                board={this.props.board} 
                handelClick= {this.props.handelClick}
              />               
            <Buttons 
              startNewGame={this.props.startNewGame}
              resetBoard = {this.props.resetBoard}
              />
          </section>
        </div>
      );
  }
}

export default Board;
