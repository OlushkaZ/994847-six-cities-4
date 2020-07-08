import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import {appTypes} from '../../types/rental-offers-types';
import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';
import SignIn from '../sign-in/sign-in';

const MAX_REVIEWS_COUNT = 10;
const MAX_OFFERS_NEARBY_COUNT = 3;

class App extends React.PureComponent {
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
        />
      )
      : <Redirect to="/" />;
  }

  render() {
    const {
      offers,
      currentLocation
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              offers={offers}
              currentLocation={currentLocation}
            />
          </Route>
          <Route exact path="/offer-details/:id">
            {({match}) => this._renderOfferDetails(match.params.id)}
          </Route>
          <Route exact path="/sign-in">
            <SignIn/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = appTypes;

const mapStateToProps = (state) => ({
  currentLocation: state.data.currentLocation,
  offers: state.data.currentOffers,
});

export {App};
export default connect(mapStateToProps)(App);
