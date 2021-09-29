import { useState, useEffect } from 'react';
import LtFlag from './flags/LtFlag';
import GbFlag from './flags/GbFlag';
import RuFlag from './flags/RuFlag';
import { A, CheckCircle, SubmenuLi, SubWrapper } from '../Menu/styles';
import { menuLt, menuEng, menuRu } from './objects';


const Submenu = ({
  openSubMenu,
  onMouseLeave,
  changeLanguageGlobal,
  language,
  openSubMenuButton,
}) => {
  const changeLanguage = (global) => {
    changeLanguageGlobal(global);
    setTimeout(() => {
      openSubMenuButton();
    }, 70);
  };
  const [subMenuItems, setsubMenuItems] = useState(menuLt);
  const { languageLt, languageEng, languageRu } = subMenuItems;

  useEffect(() => {
    if (language === 'lt') return setsubMenuItems(menuLt);
    if (language === 'eng') return setsubMenuItems(menuEng);
    if (language === 'ru') return setsubMenuItems(menuRu);
  }, [language]);

  return (
    <SubWrapper className='radius' onMouseLeave={onMouseLeave} openSubMenu={openSubMenu}>
      <LanguagesLt language={language} changeLanguage={changeLanguage}>
        {languageLt}
      </LanguagesLt>
      <LanguagesEng language={language} changeLanguage={changeLanguage}>
        {languageEng}
      </LanguagesEng>
      <LanguagesRu language={language} changeLanguage={changeLanguage}>
        {languageRu}
      </LanguagesRu>
    </SubWrapper>
  );
};

export default Submenu;

//          mini components

const LanguagesLt = ({ children, changeLanguage, language }) => {
  return (
    <SubmenuLi onClick={() => changeLanguage('lt')}>
      <div>
        <LtFlag width={'.8rem'} />
        <A>{children}</A>
      </div>
      {language === 'lt' && <CheckCircle />}
    </SubmenuLi>
  );
};

const LanguagesEng = ({ children, changeLanguage, language }) => {
  return (
    <SubmenuLi onClick={() => changeLanguage('eng')}>
      <div>
        <GbFlag width={'.8rem'} />
        <A>{children}</A>
      </div>
      {language === 'eng' && <CheckCircle />}
    </SubmenuLi>
  );
};

const LanguagesRu = ({ children, changeLanguage, language }) => {
  return (
    <SubmenuLi onClick={() => changeLanguage('ru')}>
      <div>
        <RuFlag width={'.8rem'} />
        <A>{children}</A>
      </div>
      {language === 'ru' && <CheckCircle />}
    </SubmenuLi>
  );
};
