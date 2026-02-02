const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      className="form-control mb-4"
      placeholder="Search cars..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
