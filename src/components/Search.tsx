import "./Search.css";

interface Props {
  search: string;
  onSearchChange: (search: string) => void;
}

function Search({ search, onSearchChange }: Readonly<Props>) {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search for a country..." value={search} onChange={(e) => onSearchChange(e.target.value)} />
    </div>
  );
}

export default Search;
