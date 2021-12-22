import styled, { keyframes } from 'styled-components';
import { FaPlayCircle } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Playlist = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${(props) => props.theme.colors.white};
  position: relative;
  margin: ${({ comment }) => (comment ? `0rem 0 1rem 0` : `5rem 0 1rem 0`)};
  width: 100%;
  @media (min-width: 1440px) {
    width: 95%;
  }
  div {
    position: absolute;
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.grey};
    width: 95%;
  }

  h3 {
    position: absolute;
    top: 5rem;
  }
`;
export const H1 = styled.h1`
  color: ${(props) => props.theme.colors.header};
  background: ${(props) => props.theme.colors.white};
  z-index: 3;
  padding: calc(0.2rem + 0.2vw) calc(1rem + 0.5vw);
  font-size: ${(props) => (props.comment ? `calc(1.3rem + 0.2vw)` : props.theme.fontSize.h1)};
  margin: 0;
`;

export const MainWrapper = styled.main`
  position: relative;
  overflow-x: hidden;
  padding: 0 0 5rem 0;
`;
export const SlideWrapper = styled.main`
  background: white;
  display: flex;
  flex-direction: row;
  margin-left: ${(props) => props.updatedMargin}px;
  transition: margin ease-in-out 1s;

  padding: 0;
  @media (max-width: 768px) {
    overflow-x: auto; //need to set it back
  }
`;

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 17rem;
  height: 17rem;
  position: relative;
  padding: 1rem 0rem 2rem 0rem;
  margin: 0.5rem 1rem 1rem 1rem;
  transition: transform ease-in-out 2s;
  background-color: ${(props) => props.theme.colors.grey};
  box-shadow: 0.25rem 0.25rem 0.5rem 0 rgba(0, 0, 10, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0.5rem 0.5rem 0.625rem 0 rgba(0, 0, 10, 0.2);
    background-color: #d1dbde;
  }
`;

export const Img = styled.img`
  min-width: 70%;
  height: 75%;
  margin: 2rem 0 2rem 0;
  box-shadow: 0.25rem 0.45rem 0.5rem 0 rgba(0, 0, 10, 0.2);
`;

export const Video = styled.video`
  top: 2.2rem;
  width: 100%;
  height: 70%;
  position: absolute;
  outline: none;
  background: black;
`;

export const H5 = styled.h5`
  position: absolute;
  top: -0.6rem;
`;

const Puls = keyframes`
 0% {transform:scale(1)}
 50% {transform:scale(1.1)}
 100% {transform:scale(1)}
 
`;
export const Play = styled(FaPlayCircle)`
  border-radius: 50%;
  animation: ${Puls} 1s infinite;
  transition: transform ease-in-out 2s;
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  cursor: pointer;
  background: ${(props) => props.theme.colors.yellow};
`;

export const Close = styled(AiOutlineCloseCircle)`
  position: absolute;
  color: ${(props) => props.theme.colors.grey};
  z-index: 1;
  font-size: 1.5rem;
  top: 3.7rem;
  right: 0;

  cursor: pointer;
  transition: transform ease-in-out 200ms;
  &:hover {
    transform: scale(1.2);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  margin: 0 0 0 0.3rem;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;
export const AlbumWrapper = styled.div`
  width: min(50rem, 95%);
  background-image: linear-gradient(to bottom, #82549d 61%, rgba(255, 0, 0, 1));
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
`;

export const MainAlbumWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;
const Pop = keyframes`
 0% { transform:scale(1)}
 99% { transform:scale(1.8)  skew(1deg, 1deg) translate(10%, 15%)}
 100% { opacity:0}
`;
export const AlbumPickerHeader = styled.h3`
  margin: 0rem 0 2rem 1.7rem;
  padding: 1rem 0 0 0;
  position: relative;
  z-index: 2;
  font-size: 2rem;
  font-weight: 800;
  color: #092930;
  position: relative;

  &::after {
    content: '${(props) => props.albumHeader}';
    position: absolute;
    left: 0;
    z-index: 3;
  }
`;
export const SelectAlbums = styled.section`
  width: 95%;
  max-width: 50rem;
  background: red;
  margin-bottom: 3rem;
  background-image: url(${(props) => props.backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.4rem;
  position: relative;

  &:hover h3:after {
    animation: ${Pop} 1s 1;
  }
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

export const HeadeWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;
