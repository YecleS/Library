import React from 'react';
import { Link } from 'react-router-dom';

function ItemPage() {
  return (
    <div>DITO MO ILAGAY UNG PAGE NG ITEM LAGYAN KO NALANG NG DESIGN LATUR, 
        <Link to='/'>
            <button>Home</button>
        </Link>
    </div>
  )
}

export default ItemPage