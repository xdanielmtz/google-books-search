import React, { useState } from "react";

const SearchForm = () => {
  const [search, setSearch] = useState("");

 const handleFormSubmit = (e) => {
   e.preventDefault();
   
 } 
 
 
  return (
    <div className="row">
      <form className="col s12" onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Search for a Book"
              id="search"
              type="text"
              className="validate"
              name="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <label htmlFor="email"></label>
          </div>
        </div>
        <button className="waves-effect waves-light btn">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
