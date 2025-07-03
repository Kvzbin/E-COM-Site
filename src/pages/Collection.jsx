import React, { useEffect, useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import { products } from "../utils/productsData";
import { useSearch } from "../context/SearchContext";

function Collection() {
  const { searchTerm, setSearchTerm, showSearch, setShowSearch } = useSearch();

  const [filters, setFilters] = useState({
    category: [],
    type: [],
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [filters, searchTerm]);
  
  // 💥 Run only once on unmount to hide search bar
  useEffect(() => {
    return () => setShowSearch(false);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      filters.category.length === 0 ||
      filters.category.includes(product.category);
    const matchType =
      filters.type.length === 0 || filters.type.includes(product.type);
    const matchSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.artist?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchType && matchSearch;
  });

  return (
    <div className="py-10 px-4 sm:px-10 md:px-16">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        <span className="text-orange-600">All</span> Collections
      </h1>

      {/* ✅ Search Bar */}
      {showSearch && (
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by product or artist name..."
            className="w-full max-w-md px-4 py-2 border border-orange-500 rounded-md shadow-sm focus:outline-none"
            autoFocus
          />
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <FilterSidebar filters={filters} setFilters={setFilters} />

        {/* Products Grid */}
        {/* <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8"> */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">

          {loading ? (
            // 🌀 Shimmer placeholder while loading
            [...Array(8)].map((_, idx) => (
              <div
                key={idx}
                className="h-64 bg-gray-200 animate-pulse rounded-xl"
              />
            ))
          ) : filteredProducts.length > 0 ? (
            // ✅ Render filtered products
            filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))
          ) : (
            // ❌ No match message
            <p className="col-span-full text-center text-gray-500">
              No products match the selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;
