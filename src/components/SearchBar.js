import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState(props.searchValue);

  const { onHandleSearch } = props;

  const onFormSubmit = (event) => {
    event.preventDefault();
    onHandleSearch(term);
  };

  return (
    <div className="ui segment" style={{ marginTop: "10px" }}>
      <form action="" className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <input
            type="text"
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
            placeholder="Enter your keyword..."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
