import React from 'react';
import renderer from 'react-test-renderer';

import {RentalFeature} from '../../mocks/offers';
import OfferDetails from './offer-details';

const OFFER = {
  id: 1,
  img: `img/apartment-01.jpg`,
  imgDetails: [
    `/img/apartment-01.jpg`,
    `/img/apartment-02.jpg`,
    `/img/apartment-03.jpg`,
    `/img/apartment-small-03.jpg`,
    `/img/apartment-small-04.jpg`,
    `/img/room.jpg`
  ],
  price: 116,
  rating: `30%`,
  ratingDetails: 2.3,
  name: `Beautiful luxurious apartment at great location`,
  type: `house`,
  roomCountDetails: 10,
  maxGuestsDetails: 10,
  featuresDetails: [RentalFeature.WASHINGMACHINE, RentalFeature.KITCHEN],
  host: {
    hostName: `Ann`,
    photo: `/img/avatar-angelina.jpg`,
    isSuper: true,
  },
  isPremium: true,
  isBookmark: false,
  description: ``,
};

it(`Should render Property correctly`, () => {
  const tree = renderer.create((
    <OfferDetails
      reviewsTotalCount={0}
      offer={OFFER}
      offers={[]}
      reviews={[]}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
