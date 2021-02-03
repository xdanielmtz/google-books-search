import React from "react";

const SearchForm = () => {
  return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Search for a Book" id="search" type="search" className="validate" />
              <label htmlFor="email"></label>
            </div>
          </div>
          <button className="waves-effect waves-light btn">
            Search
          </button>
        </form>
      </div>
  );
};

export default SearchForm;
