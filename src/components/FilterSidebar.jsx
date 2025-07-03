import React from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
  const handleCheckbox = (type, value) => {
    setFilters((prev) => {
      const currentValues = prev[type];
      return {
        ...prev,
        [type]: currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value]
      };
    });
  };

  return (
    <div className="bg-orange-50 p-6 max-h-100 rounded-xl shadow w-full sm:w-64">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="font-semibold text-orange-700 mb-2">CATEGORIES</h3>
        {['Men', 'Women', 'Kids'].map((cat) => (
          <label key={cat} className="block text-gray-700">
            <input
              type="checkbox"
              checked={filters.category.includes(cat)}
              onChange={() => handleCheckbox('category', cat)}
              className="mr-2"
            />
            {cat}
          </label>
        ))}
      </div>

      <div>
        <h3 className="font-semibold text-orange-700 mb-2">TYPE</h3>
        {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
          <label key={type} className="block text-gray-700">
            <input
              type="checkbox"
              checked={filters.type.includes(type)}
              onChange={() => handleCheckbox('type', type)}
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
