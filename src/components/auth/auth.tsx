import * as React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

interface Props {
  authorizationStatus: string;
  email: string;
}

const Auth: React.FC<Props> = ({authorizationStatus, email}) => {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {(authorizationStatus === `NO_AUTH`)
            ? (
              <Link to={{pathname: `/sign-in`}} className="header__nav-link header__nav-link--profile">
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__login">Sign in</span>
              </Link>
            )
            : (
              <Link
                className="header__nav-link header__nav-link--profile"
                to={{pathname: `/favorites`}}
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">
                  {email}
                </span>
              </Link>
            )}
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.user.authorizationStatus,
  email: state.user.email,
});

export {Auth};
export default connect(mapStateToProps)(Auth);

