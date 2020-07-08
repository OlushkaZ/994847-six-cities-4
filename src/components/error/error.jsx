import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const Error = ({show}) => {
  if (!show) {
    return null;
  }

  return (
    <div
      style={{
        position: `fixed`,
        top: 0,
        right: `50%`,
        width: `300px`,
        border: `2px solid red`,
        backgroundColor: `white`,
        fontSize: `20px`,
        fontWeight: `bold`,
        textAlign: `center`,
      }}>Что-то пошло не так</div>
  );
};

Error.propTypes = {
  show: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  show: state.data.isError
});

export {Error};
export default connect(mapStateToProps, null)(Error);

