import { useState, useEffect, useContext } from 'react';
import { CurrenPerson } from './context/AuthContex';
import Home from './components/Home/Home';
import styled from 'styled-components';
import Menu from './components/Menu/Menu';
// import Welcome from './components/WelcomeImg/Welcome';
// import Playlist from './components/PlayList/PlayLIst';
import Contacts from './components/Contacts/Contacts';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Bottom from './components/Bottom/Bottom';
import LoadingComponentsAnimation from './Shared/LoadingCompononetsAnimations/LoadingComponentsAnimation';
import { Switch, Route, useHistory } from 'react-router';
import Register from './components/LogIn/Register';
import ForgotPassword from './components/LogIn/ForgotPassword';

//playlists
import {
  theCirkusHasArivedLt,
  theCirkusHasArivedEng,
  theCirkusHasArivedRu,
} from './components/PlayList/obj-cirkasAtvaziavo';

import { valsaiLt, valsaiEng, valsaiRu } from './components/PlayList/obj-valsai';
import Login from './components/LogIn/Login';
//FIXME: add 3rd album
//FIXME: add React Create new branch for router
//FIXME: add React router
//FIXME:  Grižti pataisyti ta zodi
const BodyWrapper = styled.section`
  width: 100%;
  overflow: hidden;
`;

function App() {
  // React router
  const history = useHistory();

  //set LANGUAGE
  const [language, setLanguage] = useState(localStorage.getItem('mainLanguage') || 'lt');
  const [page, setPage] = useState('home');
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
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //     return () => setLoading(false);
  // },[]);

  //**************************************************** */
  // add to shop cart Album function
  const [shopItems, setShopItems] = useState([]);
  const addToShopCartAlbum = (card) => {
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
    }
  };

  //add to shop card SINGLE SONG*****************************************
  let insidePlaylist = false;
  let mouseClicked;

  const addToShopCartSingleSong = (song) => {
    if (!song.buy) {
      song.buy = true;
      let item = [song];
      setShopItems([...shopItems, [...item]]);
    }
  };

  //to update shop cart number  in menu component
  const shopCardCurrentItems = (card) => {
    return setShopItems([...card]);
  };

  const [loggedIn, setLoggedIn] = useContext(CurrenPerson);
  useEffect(() => {
    if(!loggedIn) {
      history.push('/login')
    }
  })

  return (
    <BodyWrapper>
        <Menu
          pagesSetUp={pagesSetUp}
          language={language}
          changeLanguageGlobal={changeLanguageGlobal}
          shopItems={shopItems}
          history={history}
        />

      <Switch>
        
        {/* HOME */}
        {loggedIn && (
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
            addToShopCartAlbum={addToShopCartAlbum}
            addToShopCartSingleSong={addToShopCartSingleSong}
          ></Home>
        </Route>
        )}

        {/* INFO */}
          {loggedIn && (
        <Route exact path='/info'>
          <About setLoading={setLoading} history={history} loading={loading} language={language} />
        </Route>
          )}

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
          ></Shop>
        </Route>
        )}

        {/* LOGIN */}

        <Route path='/login'>
          <Login history={history} language={language}></Login>
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
