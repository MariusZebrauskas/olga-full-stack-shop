import React, { useState, useEffect } from 'react';
import { Image, SingleBook, ButtonWrapper, ImgWrapper } from './styledAbout';

const SingleAlbum = ({ bookSize, data, language, animationActivatedChek }) => {
  const [clicked, setClicked] = useState(false);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    if (data) {
      return setImageData([data]);
    }
  }, [data, language]);

  return (
    <>
      {imageData &&
        imageData.map((book) => (
          <SingleBook animationActivatedChek={animationActivatedChek} key={book.id} >
            <ImgWrapper bookSize={bookSize} >
              <Image src={book.img}></Image>
            </ImgWrapper>
            <ButtonWrapper>
              <button>read more</button>
            </ButtonWrapper>
          </SingleBook>
        ))}
    </>
  );
};

export default SingleAlbum;
