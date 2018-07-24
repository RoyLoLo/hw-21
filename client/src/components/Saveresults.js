//Saved Results Here
import React from 'react';

const styles={
  border : "1px solid dodgerblue",
  margin : "5px",
  listStyle : "none"

}
const Saved = (props) => (
  
  props.saved.map((item)=>
      <div key={item._id}>
      <li style={styles}>
        <h6 style={{textAlign:"center"}}>Saved Articles</h6>
      <p>Headline : {item.title}</p>
      <p><a href={item.url}>Click for Full Article</a></p>
      <button onClick={()=>props.delete(item._id)}>Delete</button>
      </li>
      </div>
    )
  
)

export default Saved;




