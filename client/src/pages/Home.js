import React , {Component} from "react";
import Results from "../components/Searchresults";
import Saved from "../components/Saveresults";

import axios from "axios";

class Home extends Component {
  
  state ={
    searchterm:"",
    results :[]
  };
  

  search = (x) => {
    this.setState({results:[]});
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=069c74a5b71a445b9e4e78d9653dc559&q=${x}&sort=newest`).then((res)=>{
      this.setState({results : res.data.response.docs})
      console.log(this.state.results)
    })
  };

  submitForm = event =>{
    event.preventDefault();
    this.search(this.state.searchterm)
    this.setState({searchterm:""})
  }

  inputChange = event =>{
    this.setState({searchterm : event.target.value});
  };

  save = () =>{
    //do stuff to add article to mongoDB
  }

  delete = () =>{
    //do stuff to delete article from mongoDB
  }

  render(){
  return(
    <div>
      <form className="form" onChange = {this.inputChange}> 
<input
    value={this.state.searchterm}
    name="quantity"
    type="text"
    placeholder="What would you like to search for?"
    className="form-control mt-2"
  />
  <button type="submit" className="btn btn-outline-primary  mt-2 btn-block" onClick={this.submitForm}>Search</button>
</form>
      <ul>
      <Results save={this.save} results={this.state.results}/>
      <Saved delete={this.delete}/>
      </ul>
    </div>
  )}
}

export default Home;



