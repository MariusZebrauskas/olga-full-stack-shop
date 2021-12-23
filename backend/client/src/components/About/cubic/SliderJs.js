import React, { useState, useEffect } from 'react';
import { cirkasLt, cirkasEng, cirkasRu } from '../obj-about';
import { valsaiLt, valsaiRu, valsaiEng } from '../obj-about';
import { muzikineLt, muzikineEng, muzikineRu } from '../obj-about';
// import album description txt
import { cirkasPratarmeLt, cirkasPratarmeEng, cirkasPratarmeRu } from '../obj-about';
import { valsaiPratarmeLt, valsaiPratarmeEng, valsaiPratarmeRu } from '../obj-about';
import {
  muzikinePasakaPratarmeLt,
  muzikinePasakaPratarmeEng,
  muzikinePasakaPratarmeRu,
} from '../obj-about';
// Import Swiper React components
import { SwiperSlide } from 'swiper/react';
// Import Swiper styles

import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/effect-cube/effect-cube.min.css';
import 'swiper/components/navigation/navigation.min.css';
// Import Swiper styles
import 'swiper/swiper.min.css';
// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination, Navigation } from 'swiper';
import {
  DescriptionButton,
  DescriptionText,
  DescriptionWraapper,
  P,
  SwiperChanged,
  Wrapper,
} from './styles';
import { Header, HederWrapper, Img, SubText } from '../styledAbout';

// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Navigation]);

const SliderJs = ({ language }) => {
  // images
  const [cirkas, setCirkas] = useState(null);
  const [muzikinePasaka, setMuzikinePasaka] = useState(null);
  const [valsai, setValsai] = useState(null);
  // texts
  const [cirkasTxt, setCirkasTxt] = useState(null);
  const [muzikinePasakaTxt, setMuzikinePasakaTxt] = useState(null);
  const [valsaiTxt, setValsaiTxt] = useState(null);

  // logic boolean
  const [cirkasOpen, setCirkasOpen] = useState(false);
  const [muzikinePasakaOpen, setMuzikinePasakaOpen] = useState(false);
  const [valsaiOpen, setValsaiOpen] = useState(false);
  const [destriptiontext, setDestriptiontext] = useState(null);

  useEffect(() => {
    if (language === 'lt') {
      // images
      setCirkas(cirkasLt);
      setMuzikinePasaka(muzikineLt);
      setValsai(valsaiLt);
      // description txt
      setCirkasTxt(cirkasPratarmeLt);
      setMuzikinePasakaTxt(muzikinePasakaPratarmeLt);
      setValsaiTxt(valsaiPratarmeLt);
    } else if (language === 'eng') {
      // images
      setCirkas(cirkasEng);
      setMuzikinePasaka(muzikineEng);
      setValsai(valsaiEng);
      // description txt
      setCirkasTxt(cirkasPratarmeEng);
      setMuzikinePasakaTxt(muzikinePasakaPratarmeEng);
      setValsaiTxt(valsaiPratarmeEng);
    } else if (language === 'ru') {
      // images
      setCirkas(cirkasRu);
      setMuzikinePasaka(muzikineRu);
      setValsai(valsaiRu);
      // description txt
      setCirkasTxt(cirkasPratarmeRu);
      setMuzikinePasakaTxt(muzikinePasakaPratarmeRu);
      setValsaiTxt(valsaiPratarmeRu);
    }
  }, [language]);

  const variantsDescriptionWrapper = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut', delay: 0.3, delayChildren: 0.8 },
    },
  };
  const variantsText = {
    hidden: {
      opacity: 0,
      scale: 0.7,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 10 },
    },
  };

  const descriptionHandler = (props) => {
    if (props === 'valsai') {
      setValsaiOpen(!valsaiOpen);
      setDestriptiontext(valsaiTxt);
    } else if (props === 'muzikinePasaka') {
      setMuzikinePasakaOpen(!muzikinePasakaOpen);
      setDestriptiontext(muzikinePasakaTxt);
    } else if (props === 'cirkas') {
      setCirkasOpen(!cirkasOpen);
      setDestriptiontext(cirkasTxt);
    }
  };

  const closeHandler = () => {
    setValsaiOpen(false);
    setCirkasOpen(false);
    setMuzikinePasakaOpen(false);
  };

  const [clientFullHeight, setClientFullHeight] = useState(null);
  useEffect(() => {
    setClientFullHeight(window.document.body.offsetHeight);
    return () => {
      setClientFullHeight(null);
    };
  });

  return (
    <Wrapper>
      {/* description pop up valsai */}
      {valsaiOpen && clientFullHeight && (
        <DescriptionWraapper
          variants={variantsDescriptionWrapper}
          initial='hidden'
          animate='animate'
          clientFullHeight={clientFullHeight}
        >
          <DescriptionText variants={variantsText}>
            {destriptiontext.map((item) => (
              <P key={Math.random(999999)}>{item.text}</P>
            ))}
          </DescriptionText>
          <DescriptionButton onClick={closeHandler}></DescriptionButton>
        </DescriptionWraapper>
      )}
      {/* description pop up muzikinePasaka */}
      {muzikinePasakaOpen && clientFullHeight && (
        <DescriptionWraapper
          variants={variantsDescriptionWrapper}
          initial='hidden'
          animate='animate'
          clientFullHeight={clientFullHeight}
        >
          <DescriptionText variants={variantsText}>
            {destriptiontext.map((item) => (
              <P key={Math.random(999999)}>{item.text}</P>
            ))}
          </DescriptionText>
          <DescriptionButton onClick={closeHandler}></DescriptionButton>
        </DescriptionWraapper>
      )}
      {/* description pop up Cirkas */}
      {cirkasOpen && clientFullHeight && (
        <DescriptionWraapper
          variants={variantsDescriptionWrapper}
          initial='hidden'
          animate='animate'
          clientFullHeight={clientFullHeight}
        >
          <DescriptionText variants={variantsText}>
            {destriptiontext.map((item) => (
              <P key={Math.random(999999)}>{item.text}</P>
            ))}
          </DescriptionText>
          <DescriptionButton onClick={closeHandler}></DescriptionButton>
        </DescriptionWraapper>
      )}
      {/* swiper */}
      <SwiperChanged
        effect={'cube'}
        grabCursor={true}
        navigation={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.87,
        }}
        pagination={true}
        className='mySwiper'
      >
        <SwiperSlide>
          <Img src={valsai && valsai.img} onClick={() => descriptionHandler('valsai')} />
        </SwiperSlide>
        <SwiperSlide>
          <Img
            src={muzikinePasaka && muzikinePasaka.img}
            onClick={() => descriptionHandler('muzikinePasaka')}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={cirkas && cirkas.img} onClick={() => descriptionHandler('cirkas')} />
        </SwiperSlide>
      </SwiperChanged>
    </Wrapper>
  );
};

export default SliderJs;
