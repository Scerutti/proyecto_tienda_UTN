import React from 'react';
import "./searchbar.css"


const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = React.useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar productos..."
                value={query}
                onChange={handleInputChange}
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default SearchBar;
