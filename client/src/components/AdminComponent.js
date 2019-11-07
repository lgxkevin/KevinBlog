import React, {useState} from "react";
import axios from 'axios';

const AdminComponent = (props) => {
  const [file, setFile] = useState();


  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    axios.post('http://localhost:5000/blog', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
  };

  return (
      <form onSubmit={event => submitFile(event)}>
        <input
            type='file'
            onChange={event => handleFileUpload(event)}
        />
        <button type='submit'>Send</button>
      </form>
  )
};

export default AdminComponent;
