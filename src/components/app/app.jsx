import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import {rentalOffersTypes} from '../../types/rental-offers-types';
import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';

const MAX_REVIEWS_COUNT = 10;
const MAX_OFFERS_NEARBY_COUNT = 3;

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: -1,
    };
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(id) {
    this.setState({id}, () => {
      window.scrollTo({
        top: 0,
        behavior: `smooth`,
      });
    });
  }

  _renderOfferDetails(offerId) {
    const {offers, reviews} = this.props;
    const offer = offers.find(({id}) => id === Number(offerId));

    const sortedReviews = reviews
      .slice()
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .slice(0, MAX_REVIEWS_COUNT);

    return offer
      ? (
        <OfferDetails
          offers={offers.filter(({id}) => id !== offer.id).slice(0, MAX_OFFERS_NEARBY_COUNT)}
          reviewsTotalCount={reviews.length}
          reviews={sortedReviews}
          offer={offer}
          onHeaderClick={this.handleHeaderClick}
        />
      )
      : <Redirect to="/" />;
  }

  render() {
    const {
      rentalOffersCount,
      rentalOffersNames,
      offers
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              offers={offers}
              rentalOffersCount={rentalOffersCount}
              rentalOffersNames={rentalOffersNames}
              onHeaderClick={this.handleHeaderClick}
            />
          </Route>
          <Route exact path="/offer-details/:id">
            {({match}) => this._renderOfferDetails(match.params.id)}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = rentalOffersTypes;

export default App;
