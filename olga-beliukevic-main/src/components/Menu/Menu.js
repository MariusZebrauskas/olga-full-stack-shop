import { useState, useEffect, useContext } from 'react';
import Submenu from './Submenu';
import Burger from './Burger';
import Logo from './Logo';
import { CurrenPerson } from '../../context/AuthContex.js';
import {
  MenuRapper,
  List,
  Li,
  A,
  User,
  Home,
  ShoppingCart,
  Globe,
  ArrowDoubleDown,
  Shop,
  ShopItems,
} from './styles';
import { menuLt, menuEng, menuRu } from './objects';

///reeal styling

const Menu = ({ changeLanguageGlobal, language, pagesSetUp, shopItems, history }) => {
  //open sub menu
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const openSubMenuButton = () => {
    setOpenSubMenu(!openSubMenu);
  };
  const onMouseLeave = () => {
    if (openSubMenu === false) return;
    setOpenSubMenu(false);
  };
  // menu slider
  const [slideMenu, setSlideMenu] = useState(false);
  //X animation in burger
  const [openMenu, setOpenMenu] = useState(false);

  const slideLeft = () => {
    setSlideMenu(!slideMenu);
  };
  //change page if menu clicked
  const pageChanger = (params) => {
    pagesSetUp(params); //render page wich selected
    setSlideMenu(false); //turn on or off menu slider
    setOpenMenu(false); //mini animation in burger X trigger
  };
  //remove menu if resize
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const trackWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', trackWidth);
    if (width >= 768) {
      setSlideMenu(false);
    }
    return () => {
      window.removeEventListener('resize', trackWidth);
    };
  }, [width]);

  const [menuItems, setmenuItems] = useState(menuLt);
  const { logout, contact, information, languages, home } = menuItems;
  useEffect(() => {
    if (language === 'lt') return setmenuItems(menuLt);
    if (language === 'eng') return setmenuItems(menuEng);
    if (language === 'ru') return setmenuItems(menuRu);
  }, [language]);

  const [loggedIn, setLoggedIn] = useContext(CurrenPerson);
  const logoutUser = () => {
    setLoggedIn(null);
    history.push('/login');
    return;
  };
  return (
    <MenuRapper>
      <Burger slideLeft={slideLeft} setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <Logo onClick={() => history.push('/')} desktop='desktop' />
      <Shop onClick={() => history.push('/shop')}>
        <ShoppingCart />
        <ShopItems>{shopItems.length}</ShopItems>
      </Shop>
      <List slideMenu={slideMenu}>
        <Li onClick={logoutUser} upperLine>
          <User />
          <A href='#'>{logout}</A>
        </Li>
        <Li desktop='desktop' onClick={() => history.push('/')}>
          <Home />
          <A href='#'>{home}</A>
        </Li>
        <Li onClick={() => history.push('/contact')}>
          <A href='#'>{contact}</A>
        </Li>
        <Li onClick={() => history.push('/info')}>
          <A href='#'>{information}</A>
        </Li>
        <Li information onClick={openSubMenuButton}>
          <Globe />
          <A className='tablet' href='#'>
            {languages}
          </A>
          <ArrowDoubleDown />
        </Li>
        <Submenu
          language={language}
          changeLanguageGlobal={changeLanguageGlobal}
          openSubMenu={openSubMenu}
          onMouseLeave={onMouseLeave}
          openSubMenuButton={openSubMenuButton}
        />

        <Logo onClick={() => history.push('/')} mobile='mobile' />
      </List>
    </MenuRapper>
  );
};

export default Menu;
