import React from 'react';
import styled from 'styled-components';
// import { valsaiLt, valsaiRu, valsaiEng } from '../components/PlayList/obj-valsai';
// import {
//   theCirkusHasArivedLt,
//   theCirkusHasArivedEng,
//   theCirkusHasArivedRu,
// } from '../components/PlayList/obj-cirkasAtvaziavo';

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
  &:hover {
    background-color: #08282f;
    box-shadow: 0px 5px 10px #08282f;
    color: #fff;
  }
  @media (min-width: 768px) {
    font-size: calc(.85rem + .1vw);
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
      console.log('working MUZIKINĖ PASAKA ButtonAlbumJs compnent go to shared  button album');
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
  return (
    <>
      <ButtonForAlbums onClick={() => albumOnShowingOnScreen(album)}>{children}</ButtonForAlbums>
    </>
  );
};

export default ButtonAlum;
