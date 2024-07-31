import React, { useState } from 'react';

const Search = ({ registrations, highlightUser }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const result = registrations.find(user =>
      user.name.toLowerCase() === searchQuery.toLowerCase() ||
      user.email.toLowerCase() === searchQuery.toLowerCase()
    );
    if (result) {
      highlightUser(result._id);
    } else {
      alert('User not found');
    }
  };

  return (
    <form className="d-flex" onSubmit={handleSearch} role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  );
};

export default Search;
