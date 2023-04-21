import {
  GET_CATALOG,
  UPDATE_CATALOG,
  FILTER_BRANDS,
  CLEAR_FILTER,
} from '../types';

const catalogReducer = (state, action) => {
  switch (action.type) {
    case GET_CATALOG:
      return {
        ...state,
        brands: action.payload.brands,
        isCatalogLoaded: true,
      };
    case UPDATE_CATALOG:
      return {
        ...state,
        brands: action.payload.brands,
        filteredBrands: action.payload.filteredBrands,
      };
    case FILTER_BRANDS:
      return {
        ...state,
        filteredBrands: state.brands.filter((brand) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return brand.name.match(regex) || brand.description.match(regex);
        }),
        isFiltered: true,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filteredBrands: [],
        isFiltered: false,
      };
    default:
      return state;
  }
};

export default catalogReducer;
