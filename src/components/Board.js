import React, {Component}  from 'react';
import Logo from "./Logo"


class Board extends Component {

  render(){
      return(
        <div className="container niceFont center">
          <Logo/>
          <h2>Board here</h2>
        </div>
      );
  }
}

export default Board;
