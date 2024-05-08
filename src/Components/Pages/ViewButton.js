import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/ViewButton.css';
import { Link } from 'react-router-dom';

function ViewButton(props) {
  return (
    <Link to='/item/'>
      <button className='view-button'>View</button>
    </Link>
    
  )
}

ViewButton.propTypes = {}

export default ViewButton
