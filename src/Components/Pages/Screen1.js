import React from 'react';
import Navbar from '../Navbar';

const Screen1 = () => {
  return (
    <div>
    <Navbar></Navbar>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Screen1</h1>
    </div>
    </div>
  );
};

export default Screen1;
