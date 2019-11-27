import React from 'react';
import Chip from '@material-ui/core/Chip'

interface ArticleTagsComponentProps {
    tags: Array<string>,
    deleteTag: Function
}

export default function ArticleTagsComponent(props: ArticleTagsComponentProps) {
    const handleDelete = (index: number) => {
        props.deleteTag(index);
    };

    return (
        <div>
           { props.tags.map((value, index) => <Chip key={index} size="small" onDelete={(index) => handleDelete(index)}/>)}
        </div>
    )
}
