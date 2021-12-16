import { useState, useEffect, useContext } from 'react';
import { CurrenPerson } from './context/AuthContex';
import Home from './components/Home/Home';
import styled from 'styled-components';
import Menu from './components/Menu/Menu';
import Contacts from './components/Contacts/Contacts';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Bottom from './components/Bottom/Bottom';
import LoadingComponentsAnimation from './Shared/LoadingCompononetsAnimations/LoadingComponentsAnimation';
import { Switch, Route, useHistory } from 'react-router';
import Register from './components/LogIn/Register';
import ForgotPassword from './components/LogIn/ForgotPassword';
import axios from 'axios';
import { LoadingContext } from './context/LoadingContext';

//playlists
import {
  theCirkusHasArivedLt,
  theCirkusHasArivedEng,
  theCirkusHasArivedRu,
} from './components/PlayList/obj-cirkasAtvaziavo';

import { valsaiLt, valsaiEng, valsaiRu } from './components/PlayList/obj-valsai';
import {
  muzikinePasakaLt,
  muzikinePasakaEng,
  muzikinePasakaRu,
} from './components/PlayList/obj-musikinePasaka';
import Login from './components/LogIn/Login';
//FIXME: add 3rd album

const BodyWrapper = styled.section`
  width: 100%;
  overflow: hidden;
`;
// FIXME:add linear gradient to white space then
// FIXME: add animation when wisible
function App() {
  // loading logic
  const [loadingDb, setLoadingDb] = useContext(LoadingContext);
  // React router
  const history = useHistory();
  const [loggedIn] = useContext(CurrenPerson);

  //set LANGUAGE
  const [language, setLanguage] = useState(localStorage.getItem('mainLanguage') || 'lt');
  const [setPage] = useState('home');
  const pagesSetUp = (params) => {
    setPage(params);
  };
  useEffect(() => {
    localStorage.setItem('mainLanguage', language);
  }, [language]);
  const changeLanguageGlobal = (parameter) => {
    setLanguage(parameter);
  };
  //Loading logic
  const [loading] = useState(false);

  //**************************************************** */
  //FIXME: fech shop items from data base on login
  const [shopItemsDb, setShopItemsDb] = useState([]);
  const [shopItems, setShopItems] = useState([]);

  const fechCartData = async () => {
    let id = loggedIn._id;
    axios
      .post('/cart/', { _id: id })
      .then((res) => {
        setShopItemsDb([...res.data.shopItemsDb]);
        setLoadingDb(false);
      })
      .catch((err) => {
        setLoadingDb(false);
        console.log(`response from db ${err}`);
      });
  };
  // FIXME make logged out person shop item to 0 items
  useEffect(() => {
    if (loggedIn) {
      setLoadingDb(true);
      fechCartData();
    } else if (!loggedIn) {
      setShopItems([]);
    }
  }, [loggedIn]);

  // FIXME: data base functionality

  const sendDataToDB = (params) => {
    let id = loggedIn._id;

    axios
      .post('/cart/add', { _id: id, shopItemsDb: [params] })
      .then((res) => {
        setLoadingDb(false);
        fechCartData();
      })
      .catch((err) => {
        fechCartData();
        setLoadingDb(false);
        console.log(err.message);
      });
  };
  // add to shop cart Album function
  const addToShopCartAlbum = (card) => {
    if (!loggedIn) {
      popEror();
      return history.push('/login');
    }
    // loading logic
    if (loadingDb === true || card[0].holealbumsold === true) {
      return;
    }
    setLoadingDb(true);

    if (!card[0].holealbumsold) {
      //makes all songs in object sold to prevent buying twise
      card.forEach((item) => {
        item.buy = true;
      });
      //add item to shop  card
      setShopItems([...shopItems, [...card]]);

      //function created for prevent to buy twice
      const changeItemToSold = (item) => {
        return (item[0].holealbumsold = true);
      };
      //function activation to stop buying twise
      changeItemToSold(card);
      // send data to db and
      //FIXME: need to make axios send data
      sendDataToDB(card);
    }
  };

  //add to shop card SINGLE SONG*****************************************
  let insidePlaylist = false;
  let mouseClicked;

  const addToShopCartSingleSong = (song) => {
    if (!loggedIn) {
      popEror();
      return history.push('/login');
    }
    if (loadingDb === true || song.buy === true) {
      return;
    }
    setLoadingDb(true);
    if (!song.buy) {
      song.buy = true;
      let item = [song];
      setShopItems([...shopItems, [...item]]);
      // send data to db and
      //FIXME: need to make axios send data
      sendDataToDB(item);
    }
  };

  //to update shop cart number  in menu component
  const shopCardCurrentItems = (card) => {
    return setShopItems([...card]);
  };
  // menu slider
  const [slideMenu, setSlideMenu] = useState(false);
  //X animation in burger
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    const { pathname } = history.location;
    if ((pathname === '/shop' && !loggedIn) || (pathname === '/contact' && !loggedIn)) {
      setOpenMenu(false);
      setSlideMenu(false);
      history.push('/login');
    }
  });
  // warning message
  const [pleaseLogIN, setPleaseLogIN] = useState(null);
  const popEror = () => {
    const pleaseLogInToYourAccount = (params) => {
      setPleaseLogIN(params);
    };
    if (language === 'eng') {
      pleaseLogInToYourAccount('Please logIn To Your Account');
    } else if (language === 'ru') {
      pleaseLogInToYourAccount('Пожалуйста, войдите в свою учетную запись');
    } else if (language === 'lt') {
      pleaseLogInToYourAccount('Prašome Prisijungti Prie Savo Paskyros');
    }
  };
  return (
    <BodyWrapper>
      <Menu
        pagesSetUp={pagesSetUp}
        language={language}
        changeLanguageGlobal={changeLanguageGlobal}
        shopItems={shopItemsDb}
        history={history}
        setShopItemsDb={setShopItemsDb}
        setShopItems={setShopItems}
        slideMenu={slideMenu}
        setSlideMenu={setSlideMenu}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        popEror={popEror}
      />

      <Switch>
        {/* HOME */}
        <Route exact path='/'>
          <Home
            language={language}
            insidePlaylist={insidePlaylist}
            mouseClicked={mouseClicked}
            theCirkusHasArivedLt={theCirkusHasArivedLt}
            theCirkusHasArivedRu={theCirkusHasArivedRu}
            theCirkusHasArivedEng={theCirkusHasArivedEng}
            valsaiLt={valsaiLt}
            valsaiEng={valsaiEng}
            valsaiRu={valsaiRu}
            muzikinePasakaLt={muzikinePasakaLt}
            muzikinePasakaRu={muzikinePasakaRu}
            muzikinePasakaEng={muzikinePasakaEng}
            addToShopCartAlbum={addToShopCartAlbum}
            addToShopCartSingleSong={addToShopCartSingleSong}
          ></Home>
        </Route>

        {/* INFO */}

        <Route exact path='/info'>
          <About language={language} />
        </Route>

        {/* CONTACT */}
        {loggedIn && (
          <Route path='/contact'>
            <Contacts language={language}></Contacts>
          </Route>
        )}

        {/* SHOP */}
        {loggedIn && (
          <Route path='/shop'>
            <Shop
              language={language}
              shopCardCurrentItems={shopCardCurrentItems}
              pagesSetUp={pagesSetUp}
              shopItems={shopItems}
              shopItemsDb={shopItemsDb}
              fechCartData={fechCartData}
            ></Shop>
          </Route>
        )}

        {/* LOGIN */}

        <Route path='/login'>
          <Login
            history={history}
            language={language}
            pleaseLogIN={pleaseLogIN}
            setPleaseLogIN={setPleaseLogIN}
          ></Login>
        </Route>

        {/* REGISTER */}

        <Route path='/register'>
          <Register history={history} language={language}></Register>
        </Route>
        {/* RECOVER */}

        <Route path='/recover'>
          <ForgotPassword history={history} language={language}></ForgotPassword>
        </Route>

        {/* BOTTOM */}
      </Switch>
      {loading ? <LoadingComponentsAnimation /> : <Bottom language={language} />}
    </BodyWrapper>
  );
}

export default App;
