import React from 'react';

import {mainTypes} from '../../types/rental-offers-types';
import OffersList from '../offers-list/offers-list.jsx';
import Sorting from '../sorting/sorting.jsx';
import Map from '../map/map.jsx';
import CitiesList from '../cities-list/cities-list';
import NoOffers from '../no-offers/no-offers';
import Error from '../error/error';

const Main = (props) => {
  const {offers, currentLocation} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          {offers.length
            ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {`${offers.length} places to stay in ${currentLocation.city}`}
                  </b>
                  <Sorting />
                  <OffersList offers={offers} />
                </section>
                <div className="cities__right-section">
                  <Map />
                </div>
              </div>
            )
            : <NoOffers/>
          }
        </div>
        <Error />
      </main>
    </div>
  );
};

Main.propTypes = mainTypes;

export default Main;
