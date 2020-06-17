import React from 'react';
import Main from '../main/main.jsx';
import {rentalOffersTypes} from '../../types/rental-offers-types';
import OfferDetails from '../offer-details/offer-details.jsx';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: -1,
    };
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(id) {
    this.setState({id});
  }

  _renderOfferDetails(offerId) {
    const {offers} = this.props;
    const offer = offers.find(({id}) => id === Number(offerId));

    return offer
      ? <OfferDetails offer={offer} />
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
