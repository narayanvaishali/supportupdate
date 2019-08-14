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

    const stafflist = [
      { 'id': 0, 'staffname': '--select staff--'}, 
      { 'id': 1, 'staffname': 'VP' }, 
      { 'id': 2, 'staffname': 'TA' }, 
      { 'id': 3, 'staffname': 'SKT' }, 
      { 'id': 4, 'staffname': 'FZ' }, 
      { 'id': 5, 'staffname': 'KT' }]

   let optionItems = stafflist.map((s) =>
              <option key={s.id}>{s.staffname}</option>
            );
  
    const currentstatuslist = [
      { 'id': 0, 'status': '--select status--'}, 
      { 'id': 1, 'status': 'passed to ps' }, 
      { 'id': 2, 'status': 'resolved' }, 
      { 'id': 3, 'status': 'investigating' }, 
      { 'id': 4, 'status': 'on hold' }]

   let statusItems = currentstatuslist.map((s) =>
              <option key={s.id}>{s.status}</option>
            );

    const prioritylist = [
      { 'id': 0, 'priority': '--select priority--'}, 
      { 'id': 1, 'priority': 'high' }, 
      { 'id': 2, 'priority': 'urgent' }, 
      { 'id': 3, 'priority': 'low' }, 
      { 'id': 4, 'priority': 'normal' }]

   let priorityItems = prioritylist.map((s) =>
              <option key={s.id}>{s.priority}</option>
            );            

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
      <div>
          <select onChange={(e) => setstaffname(e.target.value)}>
              {optionItems}
          </select>
      </div> 
      <div>
        <input type="text" placeholder="ZD ID" value={ZD_ID}
          onChange={(e) => setZD_ID(e.target.value)} />
      </div>
      <div>
            <input type="text" placeholder="date worked" value={dateworked}
            onChange={(e) => setDateworked(e.target.value)} />
       </div>
      <div>
              <select onChange={(e) => setCurrentstatus(e.target.value)}>
                {statusItems}
              </select>
        </div>
        <div>
            <select onChange={(e) => setPriority(e.target.value)}>
              {priorityItems}
        </select>
      </div>    
      <div>
         <input type="text" placeholder="time spent" value={timespent}
        onChange={(e) => setTimespent(e.target.value)} />
      </div>    
      <div>
      <input type="submit" value="add support" />
      </div>  
    </form>
  );
}
 
export default NewSupportForm;