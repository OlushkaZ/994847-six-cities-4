import React from 'react';

import {offersListTypes} from '../../types/rental-offers-types';
import OfferCard from '../offer-card/offer-card.jsx';

class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter(activeOffer) {
    this.setState({activeOffer});
  }

  render() {
    const {
      onHeaderClick,
      offers = []
    } = this.props;

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
                onMouseEnter={this.handleMouseEnter}
                onHeaderClick={onHeaderClick}
              />
            )
        )}
      </div>
    );
  }
}

OffersList.propTypes = offersListTypes;

export default OffersList;


