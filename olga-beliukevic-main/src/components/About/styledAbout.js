import styled, { keyframes } from 'styled-components';

export const Wrapeer = styled.section`
  margin: 7rem 0 0 0;
  /* background: red; */
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
  margin: 0;
  padding: 0 0 5rem 0;
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
