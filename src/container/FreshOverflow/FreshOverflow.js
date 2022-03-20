import React from 'react'
import './FreshOverflow.css';
import FreshOverflowList from '../../components/FreshOverflowList/FreshOverflowList';

function FreshOverflow() {
  return (
    <div className="fresh">
      <div className="container">
        <FreshOverflowList />
      </div>
    </div>
  )
}

export default FreshOverflow