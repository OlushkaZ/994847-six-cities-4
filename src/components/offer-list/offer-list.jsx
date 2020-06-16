import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';

const OfferList = ({offers = []}) => {
  const onMouseDown = () => {};

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map(
          ({
            id,
            img,
            price,
            rating,
            name,
            type,
            isPremium,
            isBookmark
          }) => (
            <OfferCard
              key={id}
              id={id}
              img={img}
              price={price}
              rating={rating}
              name={name}
              type={type}
              isPremium={isPremium}
              isBookmark={isBookmark}
              onMouseDown={onMouseDown}
            />
          )
      )}
    </div>
  );
};

OfferList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        isBookmark: PropTypes.bool.isRequired
      })
  ).isRequired,
};

export default OfferList;


