import React , {Component} from "react";
import Results from "../components/Searchresults";
import Saved from "../components/Saveresults";
import Search from "../components/Searchform";
import axios from "axios";
const searchstyle ={

}
const resultsstyle = {

}
const savedstyle = {

}
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
  this.savedGet();
  }

  search = (x) => {
    this.setState({results:[]})
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=069c74a5b71a445b9e4e78d9653dc559&q=${x}&sort=newest`).then((res)=>{
      this.setState({results : res.data.response.docs})
      // console.log(this.state.results)
    })
  };

  savedGet=()=>{
    axios.get("/api/saved").then(response=>{
      this.setState({
        saved:response.data
      })
    })
  }

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
      // console.log(this.state.save);
      axios.post("/api/saved",this.state.save).then(response=>{ 
        this.setState({save:{}})
        if(response){
          this.savedGet();  
          console.log("Success",response)
        }
      }).catch((error)=>{
        throw error;
      });
    });
  }

  delete = (match) =>{
    axios.delete(`/api/saved/${match}`).then(response=>{
     this.savedGet();
    })
  }

  render(){
  return(
    <div>
     <div style={searchstyle}>
     <Search 
          st={this.state.searchterm}
          ic={this.inputChange}
          sf={this.submitForm}
          />
      </div>
      <div style={savedstyle}>
      
      <Saved 
          saved={this.state.saved} 
          delete={this.delete}/>
      
      </div>
      <div style={resultsstyle}>
      
      <Results 
          save={this.save} 
          results={this.state.results}/>
      
      </div>
    </div>
  )}
}

export default Home;



