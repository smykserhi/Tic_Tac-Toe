import React from 'react';
import Header from "./Header"
import Info from "./Info"
import Board from "./Board"
import { Route} from "react-router-dom"


const Game = ()=>{
    return(
      <>
        <Route exact path="/" component={Header}/>
        <Route path="/name" component={Info}/>
        <Route path="/game" component={Board}/>        
      </>
    )    
  }

export default Game;
