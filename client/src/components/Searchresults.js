//Search Results Here
import React from 'react';

const Result = (props) => (
  
props.results.map((data)=>{
  return(
   <div key={data._id}>
      <li>
      <p>Headline: {data.snippet}</p>
      <p><a href={data.web_url}>URL to Full Article</a></p>
      <p>Published: {data.pub_date}</p>
      <button onClick={()=>props.save(data._id)}>Save</button>
    </li>
    <br/>
    <br/>
    </div>
  )
})

)

export default Result;