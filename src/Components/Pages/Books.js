import React, { useRef } from 'react';
import '../Styles/Books.css';
import AddBooksModal from './AddBooksModal';
import ViewButton from './ViewButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Books() {

    const dialogRef = useRef(null);

    function ModalOpen() {
        if(!dialogRef.current){
            return
        }
        dialogRef.current.showModal();
    }

    function ModalClose() {
        if(!dialogRef.current){
            return
        }
        dialogRef.current.close();
    }

  return (
    <section className='book-section'>
        <div className='book-section__wrapper'>

            <div className='book-section__controls-wrapper'>
                <div className='book-section__input-field-wrapper'>                  
                    <input type='text' id="book-section__input" className='book-section__input-field' placeholder='Search Items'></input>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='book-section__search-icon'/>
                </div>
                

                <button className='book-section__add-book' onClick={ModalOpen}>
                    <FontAwesomeIcon icon={faPlus} className='book-section__plus-icon'/>
                    Add Item
                </button>
            </div>
            

            <table className='book-section__table'>
                <thead>
                    <tr>
                        <td className='book-section__column-header'>Item</td>
                        <td className='book-section__column-header'>Quantity</td>
                        <td className='book-section__column-header'>Description</td>
                        <td className='book-section__column-header'>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='book-section__table-data'>Flask</td>
                        <td className='book-section__table-data'>13</td>
                        <td className='book-section__table-data'>Lorem ipsum dolor sit amet asddddwasd.</td>
                        <td className='book-section__table-data'>
                            <ViewButton />
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

        <dialog ref={dialogRef} className='book-section__dialog'>
            <AddBooksModal onClick={ModalClose} />   
        </dialog>
    </section>
  )
}

export default Books