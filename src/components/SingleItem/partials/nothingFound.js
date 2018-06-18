import React from 'react';

import BackHomeButton from '../../Utils/backHomeButton';

const nothingFound = () => {
  return (
      <div className='nothing-found'>
          <BackHomeButton/>
          <h2>Nothing found.</h2>
          <p>
              Probably you haven't selected anything. Please go back to homepage and select character to
              see
              details.
          </p>
      </div>
  )
};

export default nothingFound;