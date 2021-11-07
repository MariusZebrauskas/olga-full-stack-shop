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
import axios from 'axios';

//playlists
import {
  theCirkusHasArivedLt,
  theCirkusHasArivedEng,
  theCirkusHasArivedRu,
} from './components/PlayList/obj-cirkasAtvaziavo';

import { valsaiLt, valsaiEng, valsaiRu } from './components/PlayList/obj-valsai';
import Login from './components/LogIn/Login';
//FIXME: add 3rd album

const BodyWrapper = styled.section`
  width: 100%;
  overflow: hidden;
`;

function App() {
  // React router
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useContext(CurrenPerson);

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

  //**************************************************** */
  //FIXME: fech shop items from data base on login
  const [shopItemsDb, setShopItemsDb] = useState([]);

  const fechCartData = async () => {
    let id = loggedIn._id;
    axios
    .post('/cart/', { _id: id })
    .then((res) => {
        setShopItemsDb([...res.data.shopItemsDb]);
      })
      .catch((err) => {
        console.log(`response from db ${err}`);
      });
    };
    
  useEffect(() => {
    if (loggedIn) {
        fechCartData();
    }
  }, [loggedIn]);
  
  // FIXME: data base functionality

  const sendDataToDB = (params) => {
    let id = loggedIn._id;

    axios
      .post('/cart/add', { _id: id, shopItemsDb: [params] })
      .then((res) => {
        fechCartData();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
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
      // send data to db and
      //FIXME: need to make axios send data
      sendDataToDB(card);
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
      // send data to db and
      //FIXME: need to make axios send data
      sendDataToDB(item);
    }
  };

  //to update shop cart number  in menu component
  const shopCardCurrentItems = (card) => {
    return setShopItems([...card]);
  };

  useEffect(() => {
    if (!loggedIn) {
      history.push('/login');
    }
  });
 
  return (
    <BodyWrapper>
      <Menu
        pagesSetUp={pagesSetUp}
        language={language}
        changeLanguageGlobal={changeLanguageGlobal}
        shopItems={shopItemsDb}
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
            <About
              setLoading={setLoading}
              history={history}
              loading={loading}
              language={language}
            />
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
              shopItemsDb={shopItemsDb}
              fechCartData={fechCartData}
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
