import React, { useContext, useState } from 'react';
import { SupportContext } from '../contexts/SupportContext';

const NewSupportForm = () => {
  const { addSupport } = useContext(SupportContext);
  const [staffname, setstaffname] = useState('');
  const [ZD_ID, setZD_ID] = useState('');
  const [dateworked, setDateworked] = useState('');
  const [currentstatus, setCurrentstatus] = useState('');
  const [priority, setPriority] = useState('');
  const [timespent, setTimespent] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(title, author);
    addSupport(staffname, ZD_ID, dateworked, currentstatus, priority, timespent);

    setstaffname('');
    setZD_ID('');
    setDateworked('');
    setCurrentstatus('');
    setPriority('');
    setTimespent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="staffname" value={staffname}
        onChange={(e) => setstaffname(e.target.value)} />

      <input type="text" placeholder="ZD ID" value={ZD_ID}
        onChange={(e) => setZD_ID(e.target.value)} />

      <input type="text" placeholder="date worked" value={dateworked}
        onChange={(e) => setDateworked(e.target.value)} />

         <input type="text" placeholder="current status" value={currentstatus}
        onChange={(e) => setCurrentstatus(e.target.value)} />

         <input type="text" placeholder="priority" value={priority}
        onChange={(e) => setPriority(e.target.value)} />

         <input type="text" placeholder="time spent" value={timespent}
        onChange={(e) => setTimespent(e.target.value)} />

      <input type="submit" value="add support" />
    </form>
  );
}
 
export default NewSupportForm;