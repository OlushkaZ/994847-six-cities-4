import * as React from 'react';
import {connect} from "react-redux";

interface Props {
  show: boolean;
}

const Error: React.FC<Props> = ({show}) => {
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

const mapStateToProps = (state) => ({
  show: state.data.isError
});

export {Error};
export default connect(mapStateToProps, null)(Error);

