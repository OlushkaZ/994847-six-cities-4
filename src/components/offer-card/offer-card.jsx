import React from 'react';
import {Link} from 'react-router-dom';

import {offerCardTypes} from '../../types/rental-offers-types';

const ACTIVE_CLASS_NAME = `place-card__bookmark-button--active`;

const OfferCard = (props) => {
  const {
    id,
    img,
    price,
    rating,
    name,
    type,
    isPremium,
    isBookmark,
    onMouseEnter,
    onHeaderClick,
  } = props;

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => onMouseEnter(id)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={img} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isBookmark ? ACTIVE_CLASS_NAME : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={() => onHeaderClick(id)}>
          <Link to={{pathname: `/offer-details/${id}`}}>
            {name}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = offerCardTypes;

export default OfferCard;
