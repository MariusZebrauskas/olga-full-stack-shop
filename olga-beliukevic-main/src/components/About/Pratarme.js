import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { onRenderText, onCloseText, P, Wrapper } from './styledAbout';

const Albums = styled.section`
  @media (min-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Img = styled.img`
  width: 100%;
  padding: 1rem 1rem 2rem 1rem;
  cursor: pointer;
  @media (min-width: 425px) {
    width: 70%;
    max-width: 400px;
  }
  @media (min-width: 1440px) {
    /* background-color: red; */
    width: 25%;
  }
  @media (min-width: 2560px) {
    /* background-color: red; */
    width: 14%;
    padding: 3rem 1rem 2rem 1rem;
  }
`;

const Pratarme = ({
  cirkasPratarmeLt,
  language,
  cirkasPratarmeEng,
  cirkasPratarmeRu,
  valsaiPratarmeLt,
  valsaiPratarmeEng,
  valsaiPratarmeRu,
  muzikinePasakaPratarmeLt,
  muzikinePasakaPratarmeEng,
  muzikinePasakaPratarmeRu,
}) => {
  //obj containers
  const [albumOne, setAlbumOne] = useState([]);
  const [albumTwo, setAlbumTwo] = useState([]);
  const [albumThree, setAlbumThree] = useState([]);
  //for open close text
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen1Main, setIsOpen1Main] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen2Main, setIsOpen2Main] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen3Main, setIsOpen3Main] = useState(false);

  //languageer set up
  useEffect(() => {
    if (language === 'lt') {
      setAlbumOne([...cirkasPratarmeLt]);
      setAlbumTwo([...valsaiPratarmeLt]);
      setAlbumThree([...muzikinePasakaPratarmeLt]);
    }
    if (language === 'eng') {
      setAlbumOne([...cirkasPratarmeEng]);
      setAlbumTwo([...valsaiPratarmeEng]);
      setAlbumThree([...muzikinePasakaPratarmeEng]);
    }
    if (language === 'ru') {
      setAlbumOne([...cirkasPratarmeRu]);
      setAlbumTwo([...valsaiPratarmeRu]);
      setAlbumThree([...muzikinePasakaPratarmeRu]);
    }

    return () => {
      setAlbumOne([]);
      setAlbumTwo([]);
      setAlbumThree([]);
    };
  }, [language]);

  //open text functionality

  const openTextHandler = (id) => {
    if (id === 1) {
      setIsOpen1Main(!isOpen1Main);
    }
    if (id === 2) {
      setIsOpen2Main(!isOpen2Main);
    }
    if (id === 3) {
      setIsOpen3Main(!isOpen3Main);
    }
  };

  useEffect(() => {
    //for open text Cirkas atvažiavo
    if (isOpen1Main) {
      setIsOpen1(true);
    }
    //for close text Cirkas atvažiavo

    if (isOpen1Main === false) {
      setTimeout(() => {
        setIsOpen1(false);
      }, 300);
    }
    //for open text Valsai
    if (isOpen2Main) {
      setIsOpen2(true);
    }
    //for close text Valsai

    if (isOpen2Main === false) {
      setTimeout(() => {
        setIsOpen2(false);
      }, 300);
    }
    //for open text Muzikine pasaka
    if (isOpen3Main) {
      setIsOpen3(true);
    }
    //for close text Muzikine pasaka
    if (isOpen3Main === false) {
      setTimeout(() => {
        setIsOpen3(false);
      }, 300);
    }
  }, [isOpen1Main, isOpen2Main, isOpen3Main]);

  return (
    <Albums>
      {albumOne.map((item, i) => (
        <Wrapper key={i}>
          {item.img ? (
            <Img onClick={() => openTextHandler(item.id)} src={item.img} alt='IMAGE NOT FOUND' />
          ) : null}

          {isOpen1 ? (
            <P isOpen={isOpen1Main} onClick={() => openTextHandler(item.id)}>
              {item.text}
            </P>
          ) : null}
        </Wrapper>
      ))}
      {albumTwo.map((item, i) => (
        <Wrapper key={i}>
          {item.img ? (
            <Img onClick={() => openTextHandler(item.id)} src={item.img} alt='IMAGE NOT FOUND' />
          ) : null}
          {isOpen2 ? (
            <P isOpen={isOpen2Main} onClick={() => openTextHandler(item.id)}>
              {item.text}
            </P>
          ) : null}
        </Wrapper>
      ))}
      {albumThree.map((item, i) => (
        <Wrapper key={i}>
          {item.img ? (
            <Img onClick={() => openTextHandler(item.id)} src={item.img} alt='IMAGE NOT FOUND' />
          ) : null}
          {isOpen3 ? (
            <P isOpen={isOpen3Main} onClick={() => openTextHandler(item.id)}>
              {item.text}
            </P>
          ) : null}
        </Wrapper>
      ))}
    </Albums>
  );
};

export default Pratarme;
