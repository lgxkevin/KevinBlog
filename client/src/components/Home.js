import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import emoji from 'emoji-dictionary'

const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name));

export default function Home(){
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
        <h2>
          Welcome!
        </h2>
        <br/>
        {/*<ReactEcharts option={TreeChart} style={{height: 600}} />*/}
        <ReactMarkdown source={markdownContent} renderers={{ text: emojiSupport }}/>
      </div>
    )

}

