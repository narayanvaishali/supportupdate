import React, { useContext } from 'react';
import { SupportContext } from '../contexts/SupportContext';
import SupportDetails from './SupportDetails';

const SupportList =  () => {
  const { supportlist } = useContext(SupportContext);

  return(
    <div className="book-list">
      <ul>
        {supportlist.map(s => {
          return ( <SupportDetails support={s} key={s.id} /> );
        })}
      </ul>
    </div>
  )
}
 
export default SupportList;