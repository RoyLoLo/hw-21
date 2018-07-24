//Search Form
import React from 'react';

const Search = props => (
<div>


<form 
  className="form" > 
<input
    value={props.st.searchterm}
    onChange = {props.ic.inputChange}
    name="quantity"
    type="text"
    placeholder="What would you like to search for?"
    className="form-control mt-2"
  />
  <button 
    type="submit" 
    className="btn btn-outline-primary  mt-2 btn-block" 
    onClick={props.sf.submitForm}>Search</button>
</form>

</div>
);

export default Search;