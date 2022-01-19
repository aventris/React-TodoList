import React from 'react';

import '@styles/Loading.scss';

const Loading = () => {
  return (
    <div className='loading'>

      <div className='animation'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span>Loading...</span>
    </div>
  );
}

export default Loading;