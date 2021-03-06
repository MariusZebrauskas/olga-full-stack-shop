import React, { useState, useEffect } from 'react';
import { Section } from './styles';
import Header from './Header';
const Welcome = ({ language }) => {
  //cheks screen size and put Img dynamicly
  const [screenSizeSmall, setScreenSizeSmall] = useState(true);
  useEffect(() => {
    const chekScreenSize = () => {
      let cheker = window.innerWidth;
      if (cheker >= 768) {
        return setScreenSizeSmall(false);
         
      }
      if (cheker <= 768) {
        return setScreenSizeSmall(true);
         
      }
    };
    chekScreenSize();
    window.addEventListener('resize', chekScreenSize);
    return () => window.removeEventListener('resize', chekScreenSize);
  }, [screenSizeSmall]);

  //header texts in L ENG RU
  const [h1, setH1] = useState('NATOS FORTEPIJONUI');
  const [h12, setH12] = useState('Muzikos mokyklų moksleiviams');
  useEffect(() => {
    if (language === 'lt') {
      setH1('NATOS FORTEPIJONUI');
      setH12('muzikos mokyklų moksleiviams');
    }
    if (language === 'eng') {
      setH1('NOTES OF PIANO');
      setH12('for music school students');
    }
    if (language === 'ru') {
      setH1('НОТЫ ДЛЯ ФОРТЕПИАНО');
      setH12('учащимся детских музыкальных школ');
    }
  }, [language]);

  return (
    <Section screenSizeSmall={screenSizeSmall}>
      <Header language={language} h1={h1} h12={h12}></Header>
    </Section>
  );
};

export default Welcome;
