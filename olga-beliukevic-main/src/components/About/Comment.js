import React, { useState } from 'react';
import { P, Wrapper, H5 } from './styledAbout';

const Comment = ({ comment }) => {
  const [data, setData] = useState([...comment]);
  // console.log('data', data);
  return (
    <>
      {data.map((comment) => (
        <div key={comment.id}>
          {comment.comment ? (
            <P ultrawide comment={comment}>
              {comment.comment}
            </P>
          ) : null}

          <Wrapper>
            {comment.profesion ? (
              <>
                <H5 comment={comment}>
                  {comment.profesion} {comment.name}{' '}
                </H5>
              </>
            ) : null}
          </Wrapper>
        </div>
      ))}
    </>
  );
};

export default Comment;
