import React from 'react';
import '../Styles/AddBooksModal.css';

function AddBooksModal({onClick}) {
  return (
    <div className='modal-wrapper'>
      <hi className='modal-wrapper__title' >Add Item</hi>
      
      <div className='modal-wrapper__controls-wrapper'>
        <div className='modal-wrapper__inputs-wrapper'>
          <input type = "text" className='modal-wrapper__input-field' placeholder='Item..'></input>
          <input type = "text" className='modal-wrapper__input-field' placeholder='Quantity'></input>
          <textarea className='modal-wrapper__input-field' placeholder='Description'></textarea>
        </div>
        <button onClick={onClick} className='modal-wrapper__insert'>Insert</button>
      </div>
       
    </div>
  )
}

export default AddBooksModal