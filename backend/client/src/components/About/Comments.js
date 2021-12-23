import React, { useState, useEffect } from 'react';
import Header from '../PlayList/Header';
import Comment from './Comment';
import FadeIN from '../../Shared/FadeIN';
import { WrapperCommetns, WrapperCommetn } from './styledAbout';

const Comments = ({ commentsLt, language, commentsEng, commentsRu }) => {
  const [comments, setComments] = useState([...commentsLt]);
  const [comment, setComment] = useState('ATSILIEPIMAI');

  useEffect(() => {
    if (language === 'lt') {
      setComment('ATSILIEPIMAI');
      setComments([...commentsLt]);
    }
    if (language === 'eng') {
      setComment('COMMENTS');
      setComments([...commentsEng]);
    }
    if (language === 'ru') {
      setComment('КОММЕНТАРИИ');
      setComments([...commentsRu]);
    }
  }, [language]);
  return (
    <FadeIN>
      <WrapperCommetns>
        <Header comment={comment}></Header>

        {comments.map((comment) => (
          <WrapperCommetn key={Math.random() * 1000}>
            <Comment comment={comment}></Comment>
          </WrapperCommetn>
        ))}
      </WrapperCommetns>
    </FadeIN>
  );
};

export default Comments;
