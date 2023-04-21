import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import CatalogContext from './catalogContext';
import catalogReducer from './catalogReducer';
import {
  GET_CATALOG,
  UPDATE_CATALOG,
  FILTER_BRANDS,
  CLEAR_FILTER,
} from '../types';

import catalogJson from '../../mock/catalog.json';
const catalogJsonBrands = catalogJson.brands;

const CatalogState = (props) => {
  const initialState = {
    brands: [],
    filteredBrands: [],
    isFiltered: false,
    isCatalogLoaded: false,
  };

  const [state, dispatch] = useReducer(catalogReducer, initialState);

  // Get Catalog
  const getCatalog = () => {
    dispatch({
      type: GET_CATALOG,
      payload: { brands: catalogJsonBrands },
    });
  };

  // Toggle isFavorite State of the Brand
  const toggleFav = (id) => {
    const brands = [...state.brands];
    const filteredBrands = [...state.filteredBrands];

    const brandsUpdated = brands.map((brand) =>
      brand.id === id ? { ...brand, isFav: !brand.isFav } : brand,
    );

    const filteredBrandsUpdated = filteredBrands.map((brand) =>
      brand.id === id ? { ...brand, isFav: !brand.isFav } : brand,
    );

    dispatch({
      type: UPDATE_CATALOG,
      payload: { brands: brandsUpdated, filteredBrands: filteredBrandsUpdated },
    });
  };

  // Filter Brands
  const filterBrands = (searchTerm) => {
    dispatch({
      type: FILTER_BRANDS,
      payload: searchTerm,
    });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  return (
    <CatalogContext.Provider
      value={{
        brands: state.brands,
        filteredBrands: state.filteredBrands,
        isFiltered: state.isFiltered,
        isCatalogLoaded: state.isCatalogLoaded,
        getCatalog,
        toggleFav,
        filterBrands,
        clearFilter,
      }}
    >
      {props.children}
    </CatalogContext.Provider>
  );
};

CatalogState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CatalogState;
