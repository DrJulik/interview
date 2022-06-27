import React from "react";

const Filters = ({ filters, setFilters }: any) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // I don't know what the bug here is. Instead of returning an array it returns a number
    // I would love more time to figure out what's wrong
    if (filters.includes(event.target.name)) {
      const newFilters = filters.filter((fil: any) => {
        return fil != event.target.name;
      });
      //   setFilters(newFilters);
      console.log(newFilters);
    } else {
      const newFilters = filters.push(event.target.name);
      //   setFilters(newFilters);
      console.log(newFilters);
    }
  };

  return (
    <div className="filters">
      <span>Filter by: </span>
      <label>
        Hiking
        <input
          name="hiking"
          type="checkbox"
          //   checked={filters.includes("hiking")}
          onChange={handleFilterChange}
        />
      </label>
      <label>
        Running
        <input
          name="running"
          type="checkbox"
          //   checked={filters.includes("running")}
          onChange={handleFilterChange}
        />
      </label>
      <label>
        Biking
        <input
          name="biking"
          type="checkbox"
          //   checked={filters.includes("biking")}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};

export default Filters;
