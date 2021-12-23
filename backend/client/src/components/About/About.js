import react, { useRef, useState, useEffect } from 'react';
import { RenderingStyles } from '../../Shared/renderingStyles';
import {
  SliderWrapper,
  Wrapeer,
  BookAdjuster,
  ButtonWrapper,
  LeftButton,
  RightButton,
  Header,
  SubText,
  HederWrapper,
} from './styledAbout';
import Pratarme from './Pratarme';
import SingleAlbum from './SingleAlbum';

import { cirkasLt, cirkasEng, cirkasRu } from './obj-about';
import { valsaiLt, valsaiRu, valsaiEng } from './obj-about';
import { muzikineLt, muzikineEng, muzikineRu } from './obj-about';

import { commentsLt, commentsEng, commentsRu } from './obj-about';
import Comments from './Comments';
import SliderJs from './cubic/SliderJs';

const About = ({ language }) => {
  const [cirkas, setCirkas] = useState(null);
  const [muzikinePasaka, setMuzikinePasaka] = useState(null);
  const [valsai, setValsai] = useState(null);
  const [animationActivatedChek, setAnimationActivatedChek] = useState(false);

  useEffect(() => {
    if (language === 'lt') {
      setCirkas(cirkasLt);
      setMuzikinePasaka(muzikineLt);
      setValsai(valsaiLt);
    } else if (language === 'eng') {
      setCirkas(cirkasEng);
      setMuzikinePasaka(muzikineEng);
      setValsai(valsaiEng);
    } else if (language === 'ru') {
      setCirkas(cirkasRu);
      setMuzikinePasaka(muzikineRu);
      setValsai(valsaiRu);
    }
  }, [language]);

  let bookSize = 256;
  let total = useRef(0);
  const [move, setMove] = useState(0);
  const variants = {
    hidden: { x: 0 },
    show: {
      x: move,
      transition: { type: 'spring', stiffness: 170, damping: 10, delay: 0.3 },
    },
  };
  const moveBooks = (params) => {
    setAnimationActivatedChek(true);
    setTimeout(() => {
      setAnimationActivatedChek(false);
    }, 1000);
    if (params === 'minus') {
      if (total.current < 0) {
        return;
      }
      setMove((prev) => prev - bookSize - 20);
      total.current = total.current - 1;
      return total;
    } else if (params === 'add') {
      if (total.current > 0) {
        return;
      }
      setMove((prev) => prev + bookSize + 20);
      total.current = total.current + 1;
      return total;
    }
  };
  const [info, setInfo] = useState('Please click on image to see more info')
  const [header, setHeader] = useState('ALBUM DESCRIPTION')
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    return setHover(true);
  };
  const onMouseLeave = () => {
    return setHover(false);
  };
  return (
    <>
      <RenderingStyles>
        <HederWrapper>
          <Header>{header}</Header>
          <SubText className="hoverClass" >{info}</SubText>
        </HederWrapper>
        <Wrapeer>
          <SliderJs  language={language} />

          <Comments
            commentsRu={commentsRu}
            language={language}
            commentsLt={commentsLt}
            commentsEng={commentsEng}
          ></Comments>
        </Wrapeer>
      </RenderingStyles>
    </>
  );
};

export default About;
