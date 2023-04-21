import React, { useContext, useEffect } from 'react';
import CatalogContext from '../../context/catalog/catalogContext';
import Card from '../Card';

const Catalog = () => {
  const catalogContext = useContext(CatalogContext);
  const { brands, filteredBrands, isFiltered, isCatalogLoaded, getCatalog } =
    catalogContext;

  useEffect(() => {
    if (brands.length === 0) {
      getCatalog();
    }
  }, [brands]);

  const brandList = isFiltered ? filteredBrands : brands;

  return (
    <>
      {isCatalogLoaded && brands.length > 0 && (
        <section className="catalog">
          {brandList.map((brand) => (
            <Card brand={brand} key={brand.id} />
          ))}
          {isFiltered && filteredBrands.length === 0 && (
            <div className="no-results">
              Apologies, but no entries were found...
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Catalog;
