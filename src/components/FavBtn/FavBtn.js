import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CatalogContext from '../../context/catalog/catalogContext';

const FavBtn = ({ id, isFav }) => {
  const catalogContext = useContext(CatalogContext);
  const { toggleFav } = catalogContext;

  const handleFavClick = (brandId) => (e) => {
    e.stopPropagation();
    toggleFav(brandId);
  };

  return (
    <button className="fav-btn" type="button" onClick={handleFavClick(id)}>
      <i className={`fav-icon is-fav ${isFav ? '__active' : ''}`} />
      <i className={`fav-icon not-fav ${!isFav ? '__active' : ''}`} />
    </button>
  );
};

FavBtn.propTypes = {
  id: PropTypes.string.isRequired,
  isFav: PropTypes.bool.isRequired,
};

export default FavBtn;
