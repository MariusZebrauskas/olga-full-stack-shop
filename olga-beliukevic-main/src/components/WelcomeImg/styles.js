import styled, { css, keyframes } from 'styled-components';
import mobile from './backgrounds/9.jpg';
import plancet from './backgrounds/12.jpg';

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
const fadeIn = keyframes`
0%{
    opacity: 0;
    transform: translateY(1rem);
    
} 50%{
    opacity: 0.3;
}
100%{
    opacity: 1;
    transform: translateY(0);
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
  transition: all ease-in-out 300ms;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1s forwards 1;
`;

export const H1 = styled.h1`
  font-family: 'Charm', cursive;
  font-weight: 400;
  font-size: 2.5rem;
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
