import React from 'react';
import PropTypes from 'prop-types';
import {StyledError} from './error.style';

const Error = (props) => {
    let message=props.error!==null?props.error.message:'';
    return (<StyledError>{message}</StyledError>);
}

Error.propTypes={
  error: PropTypes.object.isRequired
}

Error.defaultProps={
  error:{message:''}
}

export default Error;