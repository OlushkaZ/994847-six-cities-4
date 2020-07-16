import * as React from 'react';

import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/offer';

interface Props {
    offers: Offer[];
}

class OffersList extends React.PureComponent<Props> {
  render() {
    const {
      offers = []
    } = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map(
            (offer) => (
              <OfferCard
                key={offer.id}
                {...offer}
              />
            )
        )}
      </div>
    );
  }
}

export default OffersList;
