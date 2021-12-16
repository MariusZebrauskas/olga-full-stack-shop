import React, { useState, useEffect } from 'react';
import { Wrapper, Right, Copyright, LogoWrapper,P } from './stylesForBottom';
import LogoMZ from './LogoMZ';


const email = 'olgabeliukevich@gmail.com';

const Bottom = ({ language }) => {
  const preventDefaultActions = (event) => {
    return event.preventDefault();
  };

  const [questions, setQuestions] = useState('If You Have Any Questions Contact By Email');
  const [copyRights, setCopyRights] = useState('Copy rights');

  useEffect(() => {
    if (language === 'lt') {
      setQuestions('Jaigu Turite Klausimų rašykite į elektronminį paštą');
      setCopyRights('Autorių teisės');
    }
    if (language === 'eng') {
      setQuestions('If You Have Any Questions Contact By Email');
      setCopyRights('Copy rights');
    }
    if (language === 'ru') {
      setQuestions('Если у вас есть вопросы, обращайтесь по электронной почте');
      setCopyRights('Авторские права');
    }
  }, [language]);
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoMZ />
      </LogoWrapper>
      <Right>
        <P onMouseDown={preventDefaultActions}>{questions}</P>
        <P>
          <strong>{email}</strong>
        </P>
      </Right>
      <Copyright>
        <P>
          {copyRights} © 2020 - {new Date().getFullYear()}
        </P>
      </Copyright>
    </Wrapper>
  );
};

export default Bottom;
