import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import FileSaver from 'file-saver';
import './Newsletter.css';

const Newsletter = () => {
  const [user, setUser] = useState([]);
  const [clickindex, setClickindex] = useState(null);

  const fetchSubscribers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/all_newsletters');
      setUser(response.data.mail);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const delSub = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/newsletter/${id}`);
      setUser((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handlesave = () => {
    const worksheet = XLSX.utils.json_to_sheet(user);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    const filename = 'data.xlsx';
    const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    FileSaver.saveAs(blob, filename);
  };

  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xff;
    }
    return buf;
  };

  return (
    <div className="ViewUsers user">
      <h1>Newsletter</h1>
      <button onClick={handlesave}>Export</button>
      <ul className="headers">
        <li>Name</li>
        <li>Email</li>
      </ul>
      {user.map((item, index) => (
        <ul key={index} style={{ display: clickindex === index ? 'none' : 'flex' }}>
          <li>{item.fullname}</li>
          <li>{item.email}</li>
          <li
            className="delL"
            onClick={() => {
              delSub(item._id);
              setClickindex(index);
            }}
          >
            <img alt="delete" src="/images/del.png" />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Newsletter;
