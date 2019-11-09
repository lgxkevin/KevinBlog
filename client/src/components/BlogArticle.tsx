import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import Grid from "@material-ui/core/Grid";

export default function BlogArticle():JSX.Element {
  const [article, setArticle] = useState<string>('');

  useEffect(():void => {
    fetch('https://lgxkevin-blog.s3.us-east-2.amazonaws.com/Set-Array-Map-Object-5f012aec-2b39-442b-b691-828fc0a133a0.md')
        .then(res => {
          return res.text()
        })
        .then(text => {
          setArticle(text);
        })
        .catch(err => {
          console.log('err', err);
        })
  });

  return (
      <div>
        <br/>
        <Grid container item justify="center"
              alignItems="center">
          <Grid item xs={10}>
            <ReactMarkdown source={article}/>
          </Grid>
        </Grid>
      </div>
  )
}
