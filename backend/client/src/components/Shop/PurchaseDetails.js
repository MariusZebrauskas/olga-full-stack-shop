import React, { useState, useEffect } from 'react';
import { Body, Table, Box, H1, H2, FlexContainer } from './styles';

const PurchaseDetails = ({ purchaseDetales, language }) => {
  const [staticDetaisls, setStaticDetaisls] = useState({
    h1: 'Compleated Purchase Order Details',
    email: 'Email',
    id: 'Id',
    ammount: 'Ammount',
    currency: 'Currency',
    date: 'Date',
    thankYou: `Thank You For Buying From Olga Beliukevičienė Shop. Your Items Will Be Sent To Your Email
    With In One Day`,
  });
  
  let today = new Date();
  let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const variantsBill = {
    hidden: {
      opacity: 0,
      scale: 1.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 15, delay: 0.5 },
    },
  };

  useEffect(() => {
    if (language === 'lt') {
      setStaticDetaisls({
        h1: 'Užsakymo duomenys',
        email: 'E. Paštas',
        id: 'Id',
        ammount: 'Suma',
        currency: 'Valiuta',
        date: 'Data',
        thankYou: `Ačiū, kad naudojatės mūsų parduotuve. Natas gausite elektroniniu paštus per viena dieną.`,
      });
    } else if (language === 'eng') {
      setStaticDetaisls({
        h1: 'Compleated Purchase Order Details',
        email: 'Email',
        id: 'Id',
        ammount: 'Ammount',
        currency: 'Currency',
        date: 'Date',
        thankYou: `Thank You For Buying From Olga Beliukevičienė Shop. Your Items Will Be Sent To Your Email
        With In One Day`,
      });
    } else if (language === 'ru') {
      setStaticDetaisls({
        h1: 'Детали завершенного заказа на закупку',
        email: 'Эл. адрес',
        id: 'Идентификатор',
        ammount: 'Сумма',
        currency: 'Валюта',
        date: 'Дата',
        thankYou: `Спасибо за покупку в магазине Ольги Белюкявичене. Ваши товары будут отправлены на вашу электронную почту
        За один день`,
      });
    }
  }, [language]);
  return (
    <Body>
      <FlexContainer>
        <H1>{staticDetaisls.h1}</H1>
      </FlexContainer>
      <Table variants={variantsBill} initial='hidden' animate='animate'>
        <Box first>
          <h4>{staticDetaisls.email}:</h4>
          <h4>{purchaseDetales.email}</h4>
        </Box>
        <Box>
          <h4>{staticDetaisls.id}</h4>
          <h4>{purchaseDetales.id}</h4>
        </Box>
        <Box>
          <h4>{staticDetaisls.ammount}:</h4>
          <h4>{purchaseDetales.amount / 100}</h4>
        </Box>
        <Box>
          <h4>{staticDetaisls.currency}:</h4>
          <h4>{purchaseDetales.currency}</h4>
        </Box>
        <Box last>
          <h4>{staticDetaisls.date}:</h4>
          <h4>{date}</h4>
        </Box>
      </Table>
      <FlexContainer>
        <H2>{staticDetaisls.thankYou}</H2>
      </FlexContainer>
    </Body>
  );
};

export default PurchaseDetails;
