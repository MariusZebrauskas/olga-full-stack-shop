import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonForAlbums = styled.button`
  margin: 0rem 0.5rem 1rem 0;
  padding: 0.5em 0.7em;
  position: relative;
  z-index: 10;
  border: none;
  padding: 0.75em 1em;
  border-radius: 0.3rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease 0s;
  font-weight: bold;
  background-color: ${(props) => (props.click ? 'cyan' : "#fff")};
  &:hover {
    background-color: ${(props) => (props.click ? 'cyan' : '#08282f')};
    box-shadow:  ${(props) => (props.click ? '0px 1px 4px cyan' : '0px 5px 10px #08282f')};
    color: ${(props) => (props.click ? '#08282f' : '#fff')};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    font-size: calc(0.85rem + 0.1vw);
  }
`;
// let albumScreen;

const ButtonAlum = ({
  children,
  album,
  changeAlbum,
  valsaiLt,
  valsaiEng,
  valsaiRu,
  theCirkusHasArivedLt,
  theCirkusHasArivedEng,
  theCirkusHasArivedRu,
  muzikinePasakaLt,
  muzikinePasakaRu,
  muzikinePasakaEng,
}) => {
  const albumOnShowingOnScreen = (props) => {
    //this logic turn on album on screen
    //it opends by changing words by poprs albumScreen takes album props
    //cirkas atvaziavo
    if (props === 'CIRKAS ATVAŽIAVO!') {
      changeAlbum(theCirkusHasArivedLt);
    }
    if (props === 'CIRCUS HAS ARRIVED! ') {
      changeAlbum(theCirkusHasArivedEng);
    }
    if (props === 'ЦИРК ПРИЕХАЛ!') {
      changeAlbum(theCirkusHasArivedRu);
    }
    //muzikine pasaka
    if (props === 'MUZIKINĖ PASAKA') {
      changeAlbum(muzikinePasakaLt);
    }
    if (props === 'MUSIC FAIRY STORIES') {
      changeAlbum(muzikinePasakaEng);
    }
    if (props === 'МУЗЫКАЛЬНЫЕ СКАЗКИ') {
      changeAlbum(muzikinePasakaRu);
    }

    //valsai
    if (props === 'VALSAI BALETO PAMOKOMS') {
      changeAlbum(valsaiLt);
    }
    if (props === 'WALTZES FOR BALLET LESSONS') {
      changeAlbum(valsaiEng);
    }
    if (props === 'ВАЛЬСЫ ДЛЯ УРОКОВ БАЛЕТА') {
      changeAlbum(valsaiRu);
    }
  };

  const [click, togler] = useState(false);
  const handler = () => {
    togler(() => !click);
  };
  const leave = () => {
    if (click) {
      return togler(false);
    }
  };

  return (
    <>
      <ButtonForAlbums
        onMouseLeave={leave}
        click={click}
        onMouseDown={handler}
        onMouseUp={handler}
        onClick={() => albumOnShowingOnScreen(album)}
      >
        {children}
      </ButtonForAlbums>
    </>
  );
};

export default ButtonAlum;
