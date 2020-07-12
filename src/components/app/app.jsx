import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import {ActionCreator} from '../../reducer/data';
import {appTypes} from '../../types/rental-offers-types';
import Main from '../main/main';
import OfferDetails from '../offer-details/offer-details';
import SignIn from '../sign-in/sign-in';

const MAX_OFFERS_NEARBY_COUNT = 3;

class App extends React.PureComponent {
  _renderOfferDetails(offerId) {
    const {offers, onGetReviews} = this.props;
    const offer = offers.find(({id}) => id === Number(offerId));

    if (!offer) {
      return <Redirect to="/" />;
    }

    onGetReviews(offer.id);

    return (
      <OfferDetails
        offers={offers.filter(({id}) => id !== offer.id).slice(0, MAX_OFFERS_NEARBY_COUNT)}
        offer={offer}
      />
    );
  }

  render() {
    const {
      offers,
      currentLocation,
      authorizationStatus
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
            {authorizationStatus === `AUTH` && <Redirect to="/" />}
            <SignIn />
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
  authorizationStatus: state.user.authorizationStatus,
});

const mapDispatchToProps = {
  onGetReviews: ActionCreator.getReviews
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
