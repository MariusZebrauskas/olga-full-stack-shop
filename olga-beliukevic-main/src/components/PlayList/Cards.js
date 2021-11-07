import React, { useState, useEffect, useRef, useContext } from 'react';
import { Card, Video, Img, H5, Play, Close } from './styles';
import { ClipLoader } from 'react-spinners';
import { LoadingContext } from '../../context/LoadingContext';
import ButtonBuy from '../../Shared/ButtonBuy';

const Cards = ({ id, song, picture, video, language, addToShopCartSingleSong, albumOne }) => {
  const [videoIsOpen, setVideoIsOpen] = useState(false);
  const [loadingDb, setLoadingDb] = useContext(LoadingContext);

  let ref = useRef(null);

  //open close video
  const openVideo = (e) => {
    e.preventDefault();
    setVideoIsOpen(true);
    return;
  };
  const closeVideo = (e) => {
    e.preventDefault();
    setVideoIsOpen(false);
    return;
  };
  const onTouchMove = (e) => {
    // onTouchStart(e);
    if (e.target.parentNode.parentNode.clientWidth < '769') {
      return (ref.current.style.marginLeft = `0px`);
    }
  };

  // //1) languages
  //  1.1 button language
  const [buy, setBuy] = useState('pirkti');
  //  1.2 update button text
  useEffect(() => {
    if (language === 'lt') {
      setBuy(`dėti į krepšelį ${albumOne.songprice}€`);
    } else if (language === 'eng') {
      setBuy(`add to cart ${albumOne.songprice}€`);
    } else if (language === 'ru') {
      setBuy(`добавить в корзину  ${albumOne.songprice}€`);
    }
  }, [language]);

  return (
    <Card ref={ref} onTouchMove={onTouchMove} key={id}>
      <H5>
        {id}. {song.toUpperCase()}
      </H5>
      <Img onClick={openVideo} src={picture} alt='img' />
      <Play onClick={openVideo} />
      <ButtonBuy
        language={language}
        albumOne={albumOne}
        id={id}
        addToShopCartSingleSong={addToShopCartSingleSong}
      >
        {loadingDb ? <ClipLoader size={"1rem"}/> : buy}
      </ButtonBuy>
      {videoIsOpen ? (
        <>
          <Close onClick={closeVideo}></Close>
          <Video videoIsOpen={videoIsOpen} src={video} controls></Video>
        </>
      ) : null}
    </Card>
  );
};

export default Cards;
