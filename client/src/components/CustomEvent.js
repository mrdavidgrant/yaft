import React from 'react';
import {Link} from 'react-router-dom';

const CustomEvent = ({ event, userId }) => {
  
  return (
      <Link to={`/users/${userId}/sessions/`} />
  )
}


export default CustomEvent;