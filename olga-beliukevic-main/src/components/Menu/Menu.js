import { useState, useEffect, useContext } from 'react';
import Submenu from './Submenu';
import Burger from './Burger';
import Logo from './Logo';
import { CurrenPerson } from '../../context/AuthContex.js';
import { LoadingContext } from '../../context/LoadingContext';
import { ClipLoader } from 'react-spinners';

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

const Menu = ({
  changeLanguageGlobal,
  language,
  pagesSetUp,
  shopItems,
  setShopItems,
  setShopItemsDb,
  shopItemsDb,
  history,
}) => {
  // loading logic
  const [loadingDb, setLoadingDb] = useContext(LoadingContext);

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
  const { logged, toLogoutMessage, sayYes, contact, information, languages, home, disconected } =
    menuItems;
  useEffect(() => {
    if (language === 'lt') return setmenuItems(menuLt);
    if (language === 'eng') return setmenuItems(menuEng);
    if (language === 'ru') return setmenuItems(menuRu);
  }, [language]);

  const [loggedIn, setLoggedIn] = useContext(CurrenPerson);
  const logoutUser = () => {
    if (!loggedIn) {
      return history.push('/login');
    }
    const person = loggedIn.username.charAt(0).toUpperCase() + loggedIn.username.slice(1);
    let cheker = prompt(`
    ${toLogoutMessage} ${person}  
    ${sayYes}
    `);
    if (cheker) {
      setLoggedIn(null);
      setShopItems([]);
      setShopItemsDb([]);
      history.push('/login');
      return;
    } else {
      return;
    }
  };
  const blocker = (params) => {
    if (params === '/') {
      if (loggedIn && !loadingDb) {
        return history.push(`${params}`);
      } else if (!loggedIn && !loadingDb) {
        return history.push(`${params}`);
      }
    } else if (params === '/shop') {
      if (loggedIn && !loadingDb) {
        return history.push(`${params}`);
      } else if (!loggedIn && !loadingDb) {
        return history.push(`/login`);
      }
    } else if (params === '/contact') {
      if (loggedIn && !loadingDb) {
        return history.push(`${params}`);
      } else if (!loggedIn && !loadingDb) {
        return history.push(`/login`);
      }
    } else if (params === '/info') {
      if (loggedIn && !loadingDb) {
        return history.push(`${params}`);
      } else if (!loggedIn && !loadingDb) {
        return history.push(`${params}`);
      }
    }
  };

  return (
    <MenuRapper>
      <Burger slideLeft={slideLeft} setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <Logo onClick={() => blocker(`/`)} desktop='desktop' />
      <Shop onClick={() => blocker(`/shop`)}>
        <ShoppingCart />
        <ShopItems>{loadingDb ? <ClipLoader size='1.3rem' /> : shopItems.length}</ShopItems>
      </Shop>
      <List loggedIn={loggedIn} slideMenu={slideMenu}>
        <>
          <Li upperLine onClick={() => blocker(`/`)}>
            <Home />
            <A href='#'>{home}</A>
          </Li>
          <Li onClick={() => blocker('/contact')}>
            <A href='#'>{contact}</A>
          </Li>
          <Li onClick={() => blocker('/info')}>
            <A href='#'>{information}</A>
          </Li>

          <Li loggedIn={loggedIn} onClick={logoutUser}>
            <User color={loggedIn} className='color' />
            <A className='tablet color' color={loggedIn} href='#'>
              {loggedIn ? logged : disconected}
            </A>
          </Li>
        </>
        <Li upperLine={loggedIn ? null : true} information onClick={openSubMenuButton}>
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

        <Logo onClick={() => blocker(`/`)} mobile='mobile' />
      </List>
    </MenuRapper>
  );
};

export default Menu;
