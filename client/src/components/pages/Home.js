import React , {Component} from "react";
import Search from "../Search";
import Results from "../Results";
import Saved from "../Saved";
class Home extends Component {
  
  // state ={

  // };
  
  render(){
  return(
    <div>
      <Search />
      <Results />
      <Saved />
    </div>
  )}
}

export default Home;