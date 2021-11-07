import React, { useState, useEffect, useContext } from 'react';
import {
  Wrapper,
  ButtonX,
  ShopItem,
  GapToMakeSomeSpace,
  ItemsWrapper,
  ShopMainWrapper,
  LeftWrapper,
  RightWrapper,
  InfoPanel,
  Item,
  Song,
  Price,
  H5,
  Img,
  LeftBag,
  MidleBag,
  RightBag,
  Button,
  TotalPrice,
  ButtonWrapper,
  ButtonSecureChekOut,
} from './stylesShop';
import { RenderingStyles } from '../../Shared/renderingStyles';
import { useHistory } from 'react-router';
import axios from 'axios';
import { CurrenPerson } from '../../context/AuthContex';

const Shop = ({ shopItems,shopItemsDb,  pagesSetUp, shopCardCurrentItems, language, fechCartData }) => {
  const [itemsInBag, setItemsInBag] = useState(shopItems < shopItemsDb ? shopItemsDb : shopItems);
  const [album, setAlbum] = useState('Albums');
  const [albumSongNumber, setAlbumSongNumber] = useState('Songs');
  const [songs, setSongs] = useState('Songs');
  const [price, setPrice] = useState('Price');
  const [totalPrice, setTotalPrice] = useState('Total Price');
  const [backToTheShop, setBackToTheShop] = useState('Back To The Shop');
  const [chekoutsecurity, setChekoutsecurity] = useState('chekoutsecurity');
  const history = useHistory();

  const [loggedIn] = useContext(CurrenPerson);

  useEffect(() => {
    if (language === 'lt') {
      setAlbum('Albumai');
      setSongs('Dainos / Nr Albume');
      setAlbumSongNumber('Dainų');
      setPrice('Kaina');
      setTotalPrice('Bendra kaina');
      setBackToTheShop('Gryžti Į Parduotuvę');
      setChekoutsecurity('Sumokėti Už Prekes');
    }
    if (language === 'eng') {
      setAlbum('Albums');
      setSongs('Song name / Index In Album');
      setAlbumSongNumber('Songs');

      setPrice('Price');
      setTotalPrice('Total Price');
      setBackToTheShop('Back To The Shop');
      setChekoutsecurity('chekout securly');
    }
    if (language === 'ru') {
      setAlbum('Альбомы');
      setSongs('Песни / Nr B Aльбоме');
      setAlbumSongNumber('Песни');

      setPrice('Цена');
      setTotalPrice('Итоговая цена');
      setBackToTheShop('Вернуться в магазин');
      setChekoutsecurity('безопасность на кассе');
    }
  }, [language]);

  let sum = 0;

  itemsInBag.forEach((item, i) => {
    const addPrice = (a) => {
      sum += a;
      return sum;
    };
    if (item.length > 1) {
      return addPrice(parseInt(item[i].albumprice));
    } else {
      return addPrice(parseInt(item[0].songprice));
    }
  });

  const deleteFromDb = async (params) => {
    //FIXME: delete from DB
    axios
      .post('/cart/delete/', { _id: loggedIn._id, deleteId: params })
      .then((res) => {
        fechCartData();
        console.log(res);
        // FIXME: add spinners
      })
      .catch((err) => {
          console.log(err.message);
          fechCartData();
      });

  };
// FIXME: item in the bagh need to change on main obj i gues not in a bag :O
  const deleteItems = (id) => {
    //if deleting first song wich control album as well
   
    
    if (
      (itemsInBag[id][0].song === 'The Circus March' && itemsInBag[id].length === 1) ||
      (itemsInBag[id][0].song === 'Cirko maršas' && itemsInBag[id].length === 1) ||
      (itemsInBag[id][0].song === 'Цирковой марш' && itemsInBag[id].length === 1) ||
      // note Valsai pirma daina su tarpu yra del to kad dainu pavadinimai vienodi ,
      //o pirma daina reguliuoja albumus krepsyje
      (itemsInBag[id][0].song === 'Valsas ' && itemsInBag[id].length === 1) ||
      (itemsInBag[id][0].song === 'Vals ' && itemsInBag[id].length === 1) ||
      (itemsInBag[id][0].song === 'Вальс ' && itemsInBag[id].length === 1)
    ) {
      itemsInBag[id][0].buy = false;
      itemsInBag.splice(id, 1);
      setItemsInBag([...itemsInBag]);
      shopCardCurrentItems([...itemsInBag]);
      return deleteFromDb(id);
    }

    //if deleting album
    if (itemsInBag[id].length > 1) {
      let album = itemsInBag[id];

      album.forEach((item) => {
        item.buy = false;
      });
      itemsInBag[id][0].holealbumsold = false;
      itemsInBag.splice(id, 1);

      //change back to true to items wich left in a bag

      let whatsLeft = itemsInBag;
      whatsLeft.forEach((item) => {
        if (item.length === 1) {
          item[0].buy = true;
        }
      });

      setItemsInBag([...itemsInBag]);
      shopCardCurrentItems([...itemsInBag]);
      return deleteFromDb(id);
    }
    //deleteing single song
    if (itemsInBag[id].length === 1) {
      itemsInBag[id][0].buy = false;
      itemsInBag.splice(id, 1);

      let whatsLeft = itemsInBag;
      whatsLeft.forEach((item) => {
        if (item.length > 1) {
          item.forEach((song) => {
            song.buy = true;
          });
        }
      });
      setItemsInBag([...itemsInBag]);
      shopCardCurrentItems([...itemsInBag]);
      return deleteFromDb(id);
    }
  };

  return (
    <RenderingStyles>
      <Wrapper>
        <GapToMakeSomeSpace />
        <ButtonX onClick={() => history.push('/')}>{backToTheShop}</ButtonX>
        <ShopMainWrapper>
          <LeftWrapper>
            {/* kaire */}
            {itemsInBag.length > 0 ? (
              <InfoPanel>
                <Item>
                  <H5>{album}</H5>
                </Item>
                <Song>
                  <H5 songs>{songs}</H5>
                </Song>
                <Price>
                  <H5>{price}</H5>
                </Price>
              </InfoPanel>
            ) : null}
            <ItemsWrapper>
              {/* items */}
              {itemsInBag.map((item, i) => (
                <ShopItem key={i}>
                  <LeftBag>
                    <Img src={itemsInBag[i][0].picture} alt='img' />
                  </LeftBag>
                  <MidleBag>
                    <h4>
                      {item.length === 1 ? item[0].song : `${item.length} ${albumSongNumber}`}{' '}
                      {item.length === 1 && <>({item[0].id})</>}
                    </h4>
                  </MidleBag>
                  <RightBag>
                    <Button onClick={() => deleteItems(i)}>X</Button>
                    <h4>{item.length === 1 ? item[0].songprice : item[0].albumprice}€</h4>
                  </RightBag>
                </ShopItem>
              ))}
            </ItemsWrapper>
          </LeftWrapper>

          <RightWrapper>
            {/* desine */}
            <TotalPrice>
              <h2>{totalPrice}:</h2>
              <h2>{sum} €</h2>
            </TotalPrice>
            {itemsInBag.length > 0 ? (
              <ButtonWrapper>
                <ButtonSecureChekOut>{chekoutsecurity.toUpperCase()}</ButtonSecureChekOut>
              </ButtonWrapper>
            ) : null}
          </RightWrapper>
        </ShopMainWrapper>
      </Wrapper>
    </RenderingStyles>
  );
};

export default Shop;
