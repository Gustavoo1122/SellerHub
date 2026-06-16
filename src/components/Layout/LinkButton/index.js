import React from 'react';

import {Link} from 'react-router-dom'

export default function LinkButton({to, text, className}) {
  return (
    <Link to={to} className={className}>{text}</Link>
  )
}