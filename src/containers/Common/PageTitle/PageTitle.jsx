import React from 'react';

const PageTitle = ({ label = '' }) => {
  return (
    <div className='sq-page-title'>
      <h2>{label}</h2>
    </div>
  )
}

export default PageTitle;