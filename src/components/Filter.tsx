import "./Filter.css";

interface Props {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

export const Filter = ({ selectedRegion, onRegionChange }: Props) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <div className="filter-container">
      <select name="filter" id="" value={selectedRegion} onChange={(e) => onRegionChange(e.target.value)}>
        <option value="">All</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};
