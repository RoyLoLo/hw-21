//Search Results Here
import React from 'react';

const Result = (props) => (

props.results.map((data)=>{
  return(
    <li>
      <div>Headline: {data.snippet}</div>
      <div>URL: {data.web_url}</div>
      <div>Published: {data.pub_date}</div>
      <button onClick={props.save}>Save</button>
    </li>
  )
})

)

export default Result;