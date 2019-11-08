import React, {useState} from "react";
import axios from 'axios';
import MarkdownPreview from './MarkdownPreview'

type FormElement = React.FormEvent<HTMLFormElement>

export default function AdminComponent ():JSX.Element {
  const [file, setFile] = useState();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>):void => {
      if (!event.target.files) {
          console.log('No file selected')
      } else {
        setFile(event.target.files[0]);
      }
  };

  const submitFile = (event: FormElement):void => {
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

      // <MarkdownPreview/>
  )
};

