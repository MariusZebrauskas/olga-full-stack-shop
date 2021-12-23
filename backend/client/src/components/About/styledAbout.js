import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { CgArrowRightR, CgArrowLeftR } from 'react-icons/cg';

export const Wrapeer = styled.section`
  margin: 0.5rem 0 0 0;
  display: flex;
  flex-direction: column;
`;

export const onRenderText = keyframes`
from  {
  opacity:0;
  transform: translateY(-2rem) scale(1.01) ;


}
to {
  opacity:1;
  transform: translateY(0rem) scale(1) ;
}
`;

export const onCloseText = keyframes`
from  {
  opacity:1;
}

to {
  transform: translateY(-3rem) ;
  opacity:0;
}
`;
export const P = styled.p`
  width: 90%;

  cursor: ${({ comment }) => (comment ? 'auto' : `pointer`)};
  color: black;
  text-align: justify;
  /* padding: 0 1rem; */
  padding: 0;
  margin: 0.5rem 0;
  &:nth-child(1) {
    padding: 1rem 0 0 0;
  }
  font-size: calc(1rem + 1vw);
  text-indent: 2.5em;
  animation: ${({ isOpen }) => (!isOpen ? onCloseText : onRenderText)} ease-in-out 0.3s;
  @media (min-width: 1440px) {
    width: ${(props) => (props.ultrawide ? '90%' : '70%')};
    font-size: calc(1rem + 0.4vw);
  }
`;
export const Wrapper = styled.section`
  @media (max-width: 767px) {
    /* galioja iki plancet wiev */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
`;
export const H1Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

////comments////

export const WrapperCommetns = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  padding: 0 0 3rem 0;
  justify-content: center;
  align-items: center;
`;
export const WrapperCommetn = styled.section`
  box-shadow: 1px 1px 1px 2px #7d7676, 2px 2px 2px 2px #928585, 3px 4px 5px 4px #979da2b5;
  margin: 2rem 1rem;
  background: linear-gradient(217deg, rgb(245 244 244 / 80%), rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, rgb(215 226 215 / 80%), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgb(227 227 239 / 80%), rgba(0, 0, 255, 0) 70.71%);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
  @media (min-width: 1440px) {
    width: 70%;
    /* font-size: calc(1rem + .4vw); */
  }
`;
export const H5 = styled.h5`
  font-size: calc(0.8rem + 0.5vw);
  /* word-spacing: calc(0.6rem + .1vw); */
  line-height: calc(1rem + 1vw);
  text-align: justify;
  padding: 0 1rem;
  width: 90%;
  max-width: 50rem;
  @media (min-width: 1440px) {
    font-size: calc(1rem + 0.12vw);
    line-height: calc(1rem + 0.3vw);
  }
`;
// About headers
export const HederWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 2560px) {
    margin-bottom: 1rem;
  }
`;
export const SubText = styled.p`
  color: ${(props) => props.theme.colors.header};
  height: 1rem;
  font-size: 0.75rem;
  border-top: 2px dotted ${(props) => props.theme.colors.header};
  margin: 0.1rem 0;
  padding: 0.1rem;
  transition: all ease-in-out 0.2s;
`;
export const Header = styled.h1`
  margin: 8rem 0 0 0;
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.h1};
  width: 100%;
  color: ${(props) => props.theme.colors.header};
  @media (min-width: 767px) {
    margin: 10rem 0 0 0;
  }
  @media (min-width: 1440px) {
    margin: 12rem 0 0 0;
  }
  @media (min-width: 2560px) {
    margin: 14rem 0 0 0;
  }
`;
export const Img = styled.img`
  width: 100%;
  background-image: cover;
`;
// FIXME: on hover changhe color + make text in midle all time
// Album SlideWrapper

export const SliderWrapper = styled.section`
  width: 100%;
  margin: 3rem 0;
  height: 30rem;
  /* background: #dbdfe0; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  position: relative;
`;
export const BookAdjuster = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-right: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  pointer-events: none;
`;

export const RightButton = styled(CgArrowRightR)`
  font-size: calc(2em + 1vw);
  margin: 0.7rem;
  position: absolute;
  cursor: ${(props) => (props.right < 0 ? null : 'pointer')};
  color: ${(props) => (props.right < 0 ? '#00000000' : '#dbdfe0')};
  background-color: ${(props) => (props.right < 0 ? '#00000000' : '#676767')};
  right: 0;
  transition: all cubic-bezier(0.69, 0.13, 0.18, 0.5) 1s;
`;
export const LeftButton = styled(CgArrowLeftR)`
  font-size: calc(2rem + 1vw);
  margin: 0.7rem;
  position: absolute;
  cursor: ${(props) => (props.left > 0 ? null : 'pointer')};
  color: ${(props) => (props.left > 0 ? '#00000000' : '#dbdfe0')};
  background-color: ${(props) => (props.left > 0 ? '#00000000' : '#676767')};
  left: 0;
  transition: all cubic-bezier(0.69, 0.13, 0.18, 0.5) 1s;
`;

// SIGLE BOOK CSS

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  transition: height ease-in-out 0.3s;
`;
export const SingleBook = styled.div`
  background-color: #dbdfe0;
  min-width: ${(props) => (props.bookSize ? `${props.bookSize}px` : '15rem')};
  max-width: ${(props) => (props.bookSize ? `${props.bookSize}px` : '15rem')};
  height: 25rem;
  text-align: center;
  position: relative;
  transition: height 0.3s ease-in-out 0.3s;
  margin: 0 0.5rem;
  &:hover ${ImgWrapper} {
    height: ${({ animationActivatedChek }) => (animationActivatedChek ? '100%' : '85%')};
    transition: height 0.3s ease-in-out 0.1s;
  }
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  background-color: #ebf1f5;
`;
export const ReadMoreWrapper = styled.div``;
