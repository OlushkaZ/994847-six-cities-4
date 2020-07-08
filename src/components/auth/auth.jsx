import React from 'react';
import {connect} from "react-redux";

import {authorizationTypes} from '../../types/rental-offers-types';

const Auth = ({authorizationStatus}) => {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {(authorizationStatus === `NO_AUTH`)
            ? (
              <a className="header__nav-link header__nav-link--profile" href="#">
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__login">Sign in</span>
              </a>
            )
            : (
              <a
                className="header__nav-link header__nav-link--profile"
                href="#"
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                </span>
              </a>
            )}
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.user.authorizationStatus,
});

Auth.propTypes = authorizationTypes;

export {Auth};
export default connect(mapStateToProps)(Auth);

