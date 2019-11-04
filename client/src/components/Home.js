import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import emoji from 'emoji-dictionary'

import Grid from '@material-ui/core/Grid';

// import backgroundImage from '../assets/Images/laptopAndGlasses.jpg'

const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name));

// let styles = {
//   HomeBackGround: {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundPosition: 'center bottom',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     paddingBottom: '40%'
//   }
// };

export default function Home() {
  const [markdownContent, setMarkdownContent] = useState('');

  const selfIntroMd = require('../assets/self-introduction.md');
  useEffect(() => {
    fetch(selfIntroMd)
        .then(res => {
          return res.text()
        })
        .then(text => {
          setMarkdownContent(text);
        })
        .catch(err => {
          console.log('err', err);
        })
  });
  return (
      <div>

        <br/>
        <Grid container justify="center"
              alignItems="center">
          <Grid item xs={12} md={8} lg={6}>
            <ReactMarkdown source={markdownContent} renderers={{text: emojiSupport}}/>
          </Grid>
        </Grid>
      </div>
  )

}

