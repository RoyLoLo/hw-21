//Saved Results Here
import React from 'react';

const Saved = (props) => (
  
  props.saved.map((item)=>
      <div key={item._id}>
      <p>Headline : {item.title}</p>
      <p><a href={item.url}>Click for Full Article</a></p>
      <button onClick={()=>props.delete(item._id)}>Delete</button>
      </div>
    )
  
)

export default Saved;




