import React, {useState, useEffect} from "react";
import axios from 'axios';
import auth from "../../services/auth";
import ArticleTagsComponent from "./ArticleTagsComponent";

type FormElement = React.FormEvent<HTMLFormElement>

export default function AdminComponent(props: any): JSX.Element {
    const [file, setFile] = useState<File>();
    const [tags, setTags] = useState<Array<string>>([]);
    const [tagInput, setTagInput] = useState<string>('');

    useEffect(() => {
        console.log(tags);
    }, [tags]);

    const OnTagInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTagInput(event.target.value)
    };

    const addTags = (event: React.KeyboardEvent): void => {
        if (event.key === 'Enter') {
            let updateTags = tags.concat(tagInput);
            setTags(updateTags);
            setTagInput('');
        }
    };

    const removeTag = (position: number):void => {
        let updatedTags = tags.filter(function (value, index, array) {
            return position!== index;
        });
        setTags(updatedTags);
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (!event.target.files) {
            console.log('No file upload')
        } else {
            setFile(event.target.files[0]);
        }
    };

    const submitFile = (): void => {
        if (!file) {
            console.error('No file submit');
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
            <form>
                <input
                    type='file'
                    onChange={event => handleFileUpload(event)}
                />
                <br/>
                <input placeholder='Title *'/><br/>
                <input placeholder='Subtitle*'/><br/>
                <input placeholder='tags'
                       value={tagInput}
                       onChange={event => OnTagInputChange(event)}
                       onKeyDown={event => addTags(event)}/>
                <br/>

                <ArticleTagsComponent tags={tags} deleteTag={removeTag}/>

                <button type='button'
                        onClick={() => submitFile()}>
                    Submit
                </button>
                <br/>
                <button
                    type='button'
                    onClick={() => {
                        auth.logout(() => {
                            props.history.push("/");
                        });
                    }}
                >
                    Logout
                </button>
            </form>
    )
};

