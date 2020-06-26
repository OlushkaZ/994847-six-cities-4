import React from 'react';

import {offerShape, mapTypes} from '../../types/rental-offers-types';
import {reviewsListTypes} from '../../types/review-types';
import {OFFER_TYPES_DISPLAY} from '../../mocks/offers';
import ReviewsList from '../reviews-list/reviews-list';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';

const MAX_COUNT_IMAGES = 6;
const ACTIVE_CLASS_NAME = `property__bookmark-button--active`;
const onMouseEnter = () => {};

const OfferDetails = (props) => {
  const {
    reviews,
    reviewsTotalCount,
    offers,
    offer,
  } = props;

  const {
    price,
    imgDetails,
    name,
    ratingDetails,
    type,
    roomCountDetails,
    maxGuestsDetails,
    featuresDetails,
    host: {photo, hostName, isSuper},
    description,
    isPremium,
    isBookmark,
  } = offer;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {imgDetails
              .slice(0, MAX_COUNT_IMAGES)
              .map((image) => (
                <div key={image} className="property__image-wrapper">
                  <img
                    className="property__image"
                    src={image}
                    alt="Photo studio"
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="property__name-wrapper">
              <h1 className="property__name">{name}</h1>
              <button className={`property__bookmark-button button ${isBookmark ? ACTIVE_CLASS_NAME : ``}`} type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `80%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{ratingDetails}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {OFFER_TYPES_DISPLAY[type]}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {roomCountDetails} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                  Max {maxGuestsDetails} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {featuresDetails.map((feature, index) => (
                  <li key={index} className="property__inside-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper user__avatar-wrapper ${isSuper ? `property__avatar-wrapper--pro` : ``}`}>
                  <img className="property__avatar user__avatar" src={photo} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {hostName}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <ReviewsList reviewsTotalCount={reviewsTotalCount} reviews={reviews} />
          </div>
        </div>
        <section className="property__map map" style={{display: `flex`}}>
          <Map
            activeOffer={offer}
            offers={offers}
          />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {offers.map((itemOffer, index) => (
              <OfferCard key={index} {...itemOffer} onMouseEnter={onMouseEnter} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

OfferDetails.propTypes = {
  offer: offerShape.isRequired,
  reviews: reviewsListTypes.reviews,
  reviewsTotalCount: reviewsListTypes.reviewsTotalCount,
  offers: mapTypes.offers
};

export default OfferDetails;
