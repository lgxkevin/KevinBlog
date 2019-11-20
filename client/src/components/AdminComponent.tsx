import React, {useState} from "react";
import axios from 'axios';
import MarkdownPreview from './MarkdownPreview'
import auth from "../services/auth";

type FormElement = React.FormEvent<HTMLFormElement>

export default function AdminComponent(props: any): JSX.Element {
    const [file, setFile] = useState<File>();

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (!event.target.files) {
            console.log('No file selected')
        } else {
            setFile(event.target.files[0]);
        }
    };

    const submitFile = (event: FormElement): void => {
        event.preventDefault();
        if (!file) {
            console.error('No file selected');
        } else {
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
        }
    };

    return (
        <form onSubmit={event => submitFile(event)}>
            <input
                type='file'
                onChange={event => handleFileUpload(event)}
            />
            <button type='submit'>Send</button>
            <button
                onClick={() => {
                    auth.logout(() => {
                        props.history.push("/");
                    });
                }}
            >
                Logout
            </button>
        </form>

        // <MarkdownPreview/>
    )
};

