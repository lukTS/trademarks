import React, { useContext, useEffect, useRef } from 'react';
import CatalogContext from '../../context/catalog/catalogContext';

const Filter = () => {
  const catalogContext = useContext(CatalogContext);
  const { filteredBrands, filterBrands, clearFilter } = catalogContext;
  const searchTerm = useRef('');

  useEffect(() => {
    if (filteredBrands.length === 0) {
      searchTerm.current.value = '';
    }
  }, []);

  useEffect(() => {
    searchTerm.current.focus();
  }, []);

  const onFilterChange = (e) => {
    if (searchTerm.current.value !== '') {
      filterBrands(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form className="search">
      <i className="search-icon" />
      <input
        ref={searchTerm}
        type="text"
        placeholder="Search..."
        className="search-input"
        onChange={onFilterChange}
      />
    </form>
  );
};

export default Filter;
