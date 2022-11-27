import React from 'react';
import "./PageTitle.css";

const PageTitle = ({ children, ...rest }) => {
  return (
    <div className='title' {...rest}>{children}</div>
  )
}

export default PageTitle