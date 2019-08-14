import React, {createContext, useState} from 'react';
import uuid from 'uuid';

export const SupportContext = createContext();

const SupportContextProvider = (props) =>{
  const [supportlist, setSupportData] = useState([
    {staffname: 'VP', ZD_ID: '123', dateworked : '10/06/2019', priority : 'high',
     currentstatus : 'resolved', timespent: 60 ,id: 1}/*,
    {staffname: 'FZ', ZD_ID: '5678', dateworked : '05/07/2019', priority : 'low',
     currentstatus : 'investigating', timespent: 100 ,id: 2},
     {staffname: 'TA', ZD_ID: '2223', dateworked : '10/08/2019', priority : 'normal',
      currentstatus : 'investigating', timespent: 100 ,id: 3}*/
  ]);

  const addSupport = (staffname, ZD_ID, dateworked, priority, currentstatus, timespent) => {
    setSupportData([...supportlist, {staffname, ZD_ID, dateworked, priority, currentstatus, timespent, id: uuid()}]);
  };
  const removeSupport = (id) => {
    setSupportData(supportlist.filter(book => book.id !== id));
  }
    return (
      <SupportContext.Provider value={{ supportlist, addSupport, removeSupport }}>
          {props.children}
      </SupportContext.Provider>
    );
}

export default SupportContextProvider;
