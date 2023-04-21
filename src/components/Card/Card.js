import React from 'react';
import PropTypes from 'prop-types';
import FavBtn from '../FavBtn';

const Card = ({ brand }) => {
  const { id, name, description, logo, isFav } = brand;

  return (
    <article className="card-wrapper">
      <div className="card">
        <picture className="card-picture">
          <img
            src={`assets/images/brands/${logo}`}
            alt={name}
            className="card-logo"
          />
        </picture>
        <main className="card-content">
          <header className="card-name">{name}</header>
          <p className="card-description">{description}</p>
        </main>
        <FavBtn id={id} isFav={isFav} />
      </div>
    </article>
  );
};

Card.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default Card;
