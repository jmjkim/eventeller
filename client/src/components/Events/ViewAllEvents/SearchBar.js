const SearchBar = ({setSearchedInput}) => {
    return (
        <div>
            <label>Search By: </label>
            <input type="search" onChange={e => setSearchedInput(e.target.value)} placeholder="Host Last Name"></input>
        </div>
    )
}

export default SearchBar;