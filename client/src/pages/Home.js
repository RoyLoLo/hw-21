import React , {Component} from "react";
import Results from "../components/Searchresults";
import Saved from "../components/Saveresults";
import axios from "axios";

class Home extends Component {
  
  state ={
    searchterm:"",
    results :[],
    saved :[],
    save : {
      url:"",
      title:"",
      date:""
    }
  };
  componentDidMount(){
    axios.get("/api/saved").then(response=>{
      this.setState({
        saved:response.data
      })
    })
  }

  search = (x) => {
    this.setState({results:[]},
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=069c74a5b71a445b9e4e78d9653dc559&q=${x}&sort=newest`).then((res)=>{
      this.setState({results : res.data.response.docs})
      console.log(this.state.results)
    }))
  };

  

  submitForm = event =>{
    event.preventDefault();
    this.search(this.state.searchterm)
    this.setState({searchterm:""})
  }

  inputChange = event =>{
    this.setState({searchterm : event.target.value});
  };

  save = (match) =>{
    let savedArticle =  (this.state.results.filter((item)=> item._id ===match))
    let pushArticle = savedArticle[0];
           //console.log(pushArticle);
    //saves articles from search into saved DB
    this.setState({
      save : {
        url: pushArticle.web_url,
        title: pushArticle.headline.main,
        date: pushArticle.pub_date
      }
    }, () => {
      console.log(this.state.save);
      axios.post("/api/saved",this.state.save).then(response=>{
        this.setState({save:{}})
        if(response){
          console.log("Success",response)
        }
      }).catch((error)=>{
        throw error;
      });
    });
  }

  delete = (match) =>{
    axios.delete(`/api/saved/${match}`).then(response=>{
      axios.get("/api/saved").then(response=>{
        this.setState({
          saved:response.data
        })
      })
    })
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
      </ul>
      <Saved saved={this.state.saved} delete={this.delete}/>
      
    </div>
  )}
}

export default Home;



