import React, { useContext } from 'react';
import { SupportContext } from '../contexts/SupportContext';

const SupportDetails = ({ support }) => {
  const { removeSupport } = useContext(SupportContext);
  return (
    <li onClick={() => removeSupport(support.id)}>
        <div className="title">{support.staffname}</div>
        <div className="author">{support.ZD_ID}</div>
        <div className="author">{support.dateworked}</div>
        <div className="author">{support.priority}</div>
        <div className="author">{support.currentstatus}</div>
        <div className="author">{support.timespent}</div>
    </li>
  );
}

export default SupportDetails;