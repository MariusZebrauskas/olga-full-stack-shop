import styled, { css } from 'styled-components';
// import mobile from './backgrounds/9.jpg';
// import plancet from './backgrounds/12.jpg';
import { motion } from 'framer-motion';

let plancet =
  'https://firebasestorage.googleapis.com/v0/b/pianonotes-a108c.appspot.com/o/images%2F12-min.jpg?alt=media&token=953588de-2cf3-42bc-9ad4-29086b1d8625';
let mobile =
  'https://firebasestorage.googleapis.com/v0/b/pianonotes-a108c.appspot.com/o/images%2F9-min.jpg?alt=media&token=fa846e04-1596-4014-a3c7-271ab4f8962a';
export const Section = styled.section`
  /* background-image: url(${mobile}); */
  ${(props) => {
    if (props.screenSizeSmall) {
      return css`
        background-image: url(${mobile});
      `;
    }
    if (!props.screenSizeSmall) {
      return css`
        background-image: url(${plancet});
      `;
    }
  }}
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &::after {
    content: ' ';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background: rgba(36, 188, 223, 0.212);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  z-index: 3;
  top: 23vh;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled(motion.h1)`
  font-family: 'Charm', cursive;
  font-weight: 400;
  font-size: 2.5rem;
  text-shadow: 0px 0.1rem black, 0px 0.125rem 0.5rem black;
  color: ${(props) => props.theme.colors.h1};
  ${(props) => {
    if (props.primary) {
      return css`
        margin-top: 5rem;
        font-size: calc(2rem + 3vw);
        margin-bottom: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        text-align: center;
      `;
    }
  }}
  ${(props) => {
    if (props.secondary) {
      return css`
        font-size: calc(1.5rem + 2vw);
        margin-top: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        text-align: center;
      `;
    }
  }}
`;

//img not working
