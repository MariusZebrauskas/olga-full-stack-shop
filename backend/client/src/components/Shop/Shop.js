import React, { useState, useEffect, useContext } from 'react';
import { ClipLoader } from 'react-spinners';
import { LoadingContext } from '../../context/LoadingContext';
import StripeCheckout from 'react-stripe-checkout';
import PurchaseDetails from './PurchaseDetails';

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
import Warning from '../../Shared/warning/Warning';

const Shop = ({
  shopItems,
  shopItemsDb,
  pagesSetUp,
  shopCardCurrentItems,
  language,
  fechCartData,
}) => {
  // loading logic
  const [loadingDb, setLoadingDb] = useContext(LoadingContext);

  //
  const [itemsInBag, setItemsInBag] = useState(shopItems < shopItemsDb ? shopItemsDb : shopItems);
  const [album, setAlbum] = useState('Albums');
  const [albumSongNumber, setAlbumSongNumber] = useState('Songs');
  const [songs, setSongs] = useState('Songs');
  const [price, setPrice] = useState('Price');
  const [totalPrice, setTotalPrice] = useState('Total Price');
  const [backToTheShop, setBackToTheShop] = useState('Back To The Shop');
  const [chekoutsecurity, setChekoutsecurity] = useState('chekoutsecurity');
  const history = useHistory();
  // errors
  const [errorHandler, setErrorHandler] = useState();

  const [loggedIn] = useContext(CurrenPerson);

  useEffect(() => {
    if (language === 'lt') {
      setAlbum('Albumai');
      setSongs('Pjesės pavadinimas / Nr Albume');
      setAlbumSongNumber('Dainų');
      setPrice('Kaina');
      setTotalPrice('Bendra kaina su pvm');
      setBackToTheShop('Gryžti Į Parduotuvę');
      setChekoutsecurity('Sumokėti Už Prekes');
    }
    if (language === 'eng') {
      setAlbum('Albums');
      setSongs('Title  / Index In Album');
      setAlbumSongNumber('Songs');
      setPrice('Price');
      setTotalPrice('Total Price with vat');
      setBackToTheShop('Back To The Shop');
      setChekoutsecurity('chekout securly');
    }
    if (language === 'ru') {
      setAlbum('Альбомы');
      setSongs('Песни / Nr B Aльбоме');
      setAlbumSongNumber('Песни');
      setPrice('Цена');
      setTotalPrice('общая цена с пвм');
      setBackToTheShop('Вернуться в магазин');
      setChekoutsecurity('ОПЛАТИТЬ ТОВАР');
    }
  }, [language]);

  let sum = 0.75;
  itemsInBag.forEach((item, i) => {
    const addPrice = (a) => {
      sum += a;
      return sum;
    };
    if (item.length > 1) {
      return addPrice(parseFloat(item[i].albumprice));
    } else {
      return addPrice(parseFloat(item[0].songprice));
    }
  });

  const deleteFromDb = async (params) => {
    axios
      .post('/api/cart/delete/', { _id: loggedIn._id, deleteId: params })
      .then((res) => {
        fechCartData();
        setLoadingDb(false);
      })
      .catch((err) => {
        console.log(err.message);
        fechCartData();
      });
  };

  const deleteItems = (id) => {
    // loading logic
    if (loadingDb === true) {
      return;
    }
    setLoadingDb(true);
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
  const [purchaseDetales, setPurchaseDetales] = useState(null);
  const [puchaseCompleate, setpuchaseCompleate] = useState(false);
  const handleStripe = async (token) => {
    setLoadingDb(true);
    setErrorHandler(null);
    const id = loggedIn._id;
    const email = loggedIn.email;
    axios
      .post('/api/cart/pay', { token, id, email })
      .then((res) => {
        axios
          .post('/api/cart/email', { res, id, email })
          .then((res) => {
            // console.log('res:', res.config.data);
            const recepyData = async () => {
              try {
                const dataFromStripe = await JSON.parse(res.config.data);
                if (dataFromStripe) {
                  const { email } = dataFromStripe;
                  const { id, amount, currency } = dataFromStripe.res.data.compleate;
                  const recepy = { email, id, amount, currency };
                  setPurchaseDetales(recepy);
                }
              } catch (err) {
                console.log(err);
              }
            };
            recepyData();
            // FIXME: PULL DATA ON SCREEN AFTER SUCCESS PAYMENT
            // FIXME: PULL DATA ON SCREEN AFTER SUCCESS PAYMENT
            // FIXME: PULL DATA ON SCREEN AFTER SUCCESS PAYMENT
            // FIXME: PULL DATA ON SCREEN AFTER SUCCESS PAYMENT
            // let b = res.config.data.text();
            // console.log(b)
            const { message } = res.data;
            if (message === 'success') {
              fechCartData();
              setpuchaseCompleate(true);
              setLoadingDb(false);
            }
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => {
        setErrorHandler('Error something went wrong');
        console.log(err);
        setTimeout(() => {
          setErrorHandler(null);
        }, 3000);
      });
  };

  // function change states of sold item
  const cleanUpBags = () => {
    // shopItems
    itemsInBag.forEach((item) => {
      item.forEach((one) => {
        one.buy = false;
        one.holealbumsold = false;
      });
    });
    shopItems.forEach((item) => {
      item.forEach((one) => {
        one.buy = false;
        one.holealbumsold = false;
      });
    });
    shopItemsDb.forEach((item) => {
      item.forEach((one) => {
        one.buy = false;
        one.holealbumsold = false;
      });
    });
  };

  useEffect(() => {
    let id = loggedIn._id;
    if (puchaseCompleate) {
      axios
        .post('/api/cart/', { _id: id })
        .then((res) => {
          cleanUpBags();
          shopCardCurrentItems([...res.data.shopItemsDb]);
          setItemsInBag([...res.data.shopItemsDb]);
          setLoadingDb(false);
          setpuchaseCompleate(false);
        })
        .catch((err) => {
          setpuchaseCompleate(false);
          setLoadingDb(false);
          console.log(`response from db ${err}`);
          setpuchaseCompleate(false);
        });
    }
  }, [puchaseCompleate]);

  return (
    <RenderingStyles>
      <Wrapper>
        <GapToMakeSomeSpace />
        <ButtonX onClick={() => (loadingDb ? null : history.push('/'))}>{backToTheShop}</ButtonX>
        {purchaseDetales && itemsInBag.length === 0 ? (
          <PurchaseDetails language={language} purchaseDetales={purchaseDetales} />
        ) : (
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
                      {loadingDb ? (
                        <ClipLoader size='1.3rem' />
                      ) : (
                        <Button onClick={() => deleteItems(i)}>X</Button>
                      )}

                      <h4>{item.length === 1 ? item[0].songprice : item[0].albumprice}€</h4>
                    </RightBag>
                  </ShopItem>
                ))}
              </ItemsWrapper>
            </LeftWrapper>

            <RightWrapper>
              {/* desine */}
              {purchaseDetales ? null : (
                <TotalPrice>
                  <h2>{totalPrice}:</h2>
                  <h2>{sum === 0.75 ? 0 : sum} €</h2>
                </TotalPrice>
              )}
              {itemsInBag.length > 0 && !loadingDb ? (
                <ButtonWrapper>
                  <StripeCheckout stripeKey={process.env.REACT_APP_STRIPE} token={handleStripe}>
                    <ButtonSecureChekOut>{chekoutsecurity.toUpperCase()}</ButtonSecureChekOut>
                  </StripeCheckout>
                </ButtonWrapper>
              ) : null}
              {errorHandler && <Warning>{errorHandler}</Warning>}

              <br />
            </RightWrapper>
          </ShopMainWrapper>
        )}
      </Wrapper>
    </RenderingStyles>
  );
};

export default Shop;
